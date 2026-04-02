import { SDPipeline, AVAILABLE_MODELS } from "https://decentralized-intelligence.com/scribbler-webnn/sd.js";

const modelSelect = document.getElementById("model-select");
const stepsRow = document.getElementById("steps-row");
const stepsSelect = document.getElementById("steps-select");
const loadBtn = document.getElementById("load-btn");
const promptInput = document.getElementById("prompt");
const seedInput = document.getElementById("seed");
const generateBtn = document.getElementById("generate-btn");
const status = document.getElementById("status");
const progressBarContainer = document.getElementById("progress-bar-container");
const progressBar = document.getElementById("progress-bar");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const timingEl = document.getElementById("timing");

let pipeline = null;

// Show/hide steps selector based on model
modelSelect.addEventListener("change", () => {
    stepsRow.style.display = modelSelect.value === "sd-1.5" ? "flex" : "none";
});
modelSelect.dispatchEvent(new Event("change"));

function setStatus(msg) {
    status.textContent = msg;
}

function showProgress(pct) {
    progressBarContainer.classList.remove("hidden");
    progressBar.style.width = `${pct}%`;
}

function hideProgress() {
    progressBarContainer.classList.add("hidden");
    progressBar.style.width = "0%";
}

function formatMs(ms) {
    return ms !== undefined ? `${ms.toFixed(0)} ms` : "-";
}

// ── Load ──────────────────────────────────────────────────────────────────────

loadBtn.addEventListener("click", async () => {
    const modelId = modelSelect.value;
    loadBtn.disabled = true;
    generateBtn.disabled = true;
    promptInput.disabled = true;
    modelSelect.disabled = true;

    if (pipeline) {
        setStatus("Releasing previous model...");
        await pipeline.release();
        pipeline = null;
    }

    pipeline = new SDPipeline(modelId);
    setStatus(`Loading ${AVAILABLE_MODELS[modelId]}...`);
    showProgress(0);

    try {
        await pipeline.loadModels(({ stage, model, index, total, loaded, totalBytes }) => {
            const modelPct = ((index) / total) * 100;
            const overallPct = Math.round(modelPct);
            if (stage === "cache") {
                const pct = Math.round(modelPct + (1 / total) * 100);
                showProgress(pct);
                setStatus(`[${pct}%] Loading ${model} (cached)...`);
            } else if (stage === "download" && totalBytes > 0) {
                const dlPct = (loaded / totalBytes) * (1 / total) * 100;
                const pct = Math.round(modelPct + dlPct);
                showProgress(pct);
                const mb = (loaded / 1024 / 1024).toFixed(1);
                const totalMb = (totalBytes / 1024 / 1024).toFixed(1);
                setStatus(`[${pct}%] Downloading ${model}... ${mb} / ${totalMb} MB`);
            } else if (stage === "compile") {
                showProgress(overallPct);
                setStatus(`[${overallPct}%] Compiling ${model}...`);
            }
        });
        showProgress(100);
        setStatus(`${AVAILABLE_MODELS[modelId]} ready.`);
        promptInput.disabled = false;
        generateBtn.disabled = false;
    } catch (err) {
        setStatus(`Error: ${err.message}`);
        console.error(err);
    }

    hideProgress();
    loadBtn.disabled = false;
    modelSelect.disabled = false;
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
    const seed = seedInput.value ? parseInt(seedInput.value, 10) : undefined;
    const steps = modelSelect.value === "sd-1.5" ? parseInt(stepsSelect.value, 10) : undefined;
    setStatus("Generating...");
    showProgress(0);
    timingEl.classList.add("hidden");

    try {
        const { imageData, timing } = await pipeline.generate(prompt, {
            seed,
            steps,
            onProgress: ({ step, totalSteps }) => {
                const pct = (step / totalSteps) * 100;
                showProgress(pct);
                setStatus(`Denoising step ${step}/${totalSteps}...`);
            },
        });

        canvas.width = imageData.width;
        canvas.height = imageData.height;
        ctx.putImageData(imageData, 0, 0);

        // Show timing
        document.getElementById("t-text-encode").textContent = formatMs(timing.textEncode);
        document.getElementById("t-unet").textContent = formatMs(timing.unet);
        document.getElementById("t-vae-decode").textContent = formatMs(timing.vaeDecode);
        document.getElementById("t-total").innerHTML = `<strong>${formatMs(timing.total)}</strong>`;
        timingEl.classList.remove("hidden");

        setStatus("Done.");
    } catch (err) {
        setStatus(`Error: ${err.message}`);
        console.error(err);
    }

    hideProgress();
    generateBtn.disabled = false;
    loadBtn.disabled = false;
});

// Allow Enter key to trigger generate
promptInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !generateBtn.disabled) {
        generateBtn.click();
    }
});
