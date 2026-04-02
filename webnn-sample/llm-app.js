import { LLMPipeline, AVAILABLE_MODELS, DEVICE_OPTIONS } from "https://decentralized-intelligence.com/scribbler-webnn/llm.js";

const modelSelect = document.getElementById("llm-model-select");
const deviceSelect = document.getElementById("llm-device-select");
const loadBtn = document.getElementById("llm-load-btn");
const promptInput = document.getElementById("llm-prompt");
const generateBtn = document.getElementById("llm-generate-btn");
const status = document.getElementById("llm-status");
const outputEl = document.getElementById("llm-output");
const timingEl = document.getElementById("llm-timing");

let pipeline = null;

// Populate dropdowns
Object.entries(AVAILABLE_MODELS).forEach(([id, cfg]) => {
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = cfg.name;
    if (id === "qwen2.5-0.5b") opt.selected = true;
    modelSelect.appendChild(opt);
});

DEVICE_OPTIONS.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    if (d === "webgpu") opt.selected = true;
    deviceSelect.appendChild(opt);
});

function setStatus(msg) {
    status.textContent = msg;
}

// ── Load ──────────────────────────────────────────────────────────────────────

loadBtn.addEventListener("click", async () => {
    loadBtn.disabled = true;
    generateBtn.disabled = true;
    promptInput.disabled = true;
    modelSelect.disabled = true;
    deviceSelect.disabled = true;

    if (pipeline) {
        setStatus("Releasing previous model...");
        await pipeline.release();
        pipeline = null;
    }

    const modelId = modelSelect.value;
    pipeline = new LLMPipeline(modelId, {
        device: deviceSelect.value,
    });

    try {
        await pipeline.load(({ stage, message }) => {
            setStatus(message);
        });
        promptInput.disabled = false;
        generateBtn.disabled = false;
    } catch (err) {
        const msg = err?.message || String(err);
        setStatus(`Error: ${msg}`);
        console.error("LLM load error:", err);
    }

    loadBtn.disabled = false;
    modelSelect.disabled = false;
    deviceSelect.disabled = false;
});

// ── Generate ──────────────────────────────────────────────────────────────────

generateBtn.addEventListener("click", async () => {
    if (!pipeline) return;

    const prompt = promptInput.value.trim();
    if (!prompt) {
        setStatus("Please enter a prompt.");
        return;
    }

    generateBtn.disabled = true;
    loadBtn.disabled = true;
    setStatus("Generating...");
    outputEl.textContent = "";
    outputEl.classList.remove("hidden");
    timingEl.classList.add("hidden");

    try {
        const result = await pipeline.generate(prompt, {
            onToken: (token) => {
                outputEl.textContent += token;
                outputEl.scrollTop = outputEl.scrollHeight;
            },
        });

        document.getElementById("llm-t-generation").textContent = `${result.generationTime.toFixed(0)} ms`;
        const wordCount = result.text.trim().split(/\s+/).length;
        document.getElementById("llm-t-tokens").textContent = `~${wordCount} words`;
        timingEl.classList.remove("hidden");

        setStatus("Done.");
    } catch (err) {
        setStatus(`Error: ${err.message}`);
        console.error(err);
    }

    generateBtn.disabled = false;
    loadBtn.disabled = false;
});

// Allow Enter key to trigger generate
promptInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !generateBtn.disabled) {
        generateBtn.click();
    }
});
