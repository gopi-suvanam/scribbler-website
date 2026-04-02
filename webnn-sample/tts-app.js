import { TTSPipeline, AVAILABLE_VOICES, DTYPE_OPTIONS, DEVICE_OPTIONS } from "https://decentralized-intelligence.com/scribbler-webnn/tts.js";

const dtypeSelect = document.getElementById("tts-dtype-select");
const deviceSelect = document.getElementById("tts-device-select");
const voiceSelect = document.getElementById("tts-voice-select");
const loadBtn = document.getElementById("tts-load-btn");
const textInput = document.getElementById("tts-text");
const generateBtn = document.getElementById("tts-generate-btn");
const status = document.getElementById("tts-status");
const audioPlayer = document.getElementById("tts-audio");
const timingEl = document.getElementById("tts-timing");

let pipeline = null;

// Populate dropdowns
DTYPE_OPTIONS.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    if (d === "fp32") opt.selected = true;
    dtypeSelect.appendChild(opt);
});

DEVICE_OPTIONS.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    if (d === "webgpu") opt.selected = true;
    deviceSelect.appendChild(opt);
});

Object.entries(AVAILABLE_VOICES).forEach(([id, name]) => {
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = name;
    if (id === "bf_alice") opt.selected = true;
    voiceSelect.appendChild(opt);
});

function setStatus(msg) {
    status.textContent = msg;
}

// ── Load ──────────────────────────────────────────────────────────────────────

loadBtn.addEventListener("click", async () => {
    loadBtn.disabled = true;
    generateBtn.disabled = true;
    textInput.disabled = true;
    dtypeSelect.disabled = true;
    deviceSelect.disabled = true;

    if (pipeline) {
        setStatus("Releasing previous model...");
        await pipeline.release();
        pipeline = null;
    }

    pipeline = new TTSPipeline({
        dtype: dtypeSelect.value,
        device: deviceSelect.value,
    });

    try {
        await pipeline.load(({ stage, message }) => {
            setStatus(message);
        });
        textInput.disabled = false;
        generateBtn.disabled = false;
    } catch (err) {
        setStatus(`Error: ${err.message}`);
        console.error(err);
    }

    loadBtn.disabled = false;
    dtypeSelect.disabled = false;
    deviceSelect.disabled = false;
});

// ── Generate ──────────────────────────────────────────────────────────────────

generateBtn.addEventListener("click", async () => {
    if (!pipeline) return;

    const text = textInput.value.trim();
    if (!text) {
        setStatus("Please enter some text.");
        return;
    }

    generateBtn.disabled = true;
    loadBtn.disabled = true;
    setStatus("Generating speech...");
    timingEl.classList.add("hidden");

    try {
        const result = await pipeline.generate(text, {
            voice: voiceSelect.value,
        });

        audioPlayer.src = result.url;
        audioPlayer.classList.remove("hidden");
        audioPlayer.play();

        document.getElementById("tts-t-generation").textContent = `${result.generationTime.toFixed(0)} ms`;
        document.getElementById("tts-t-duration").textContent = `${result.duration.toFixed(2)} s`;
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
textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !generateBtn.disabled) {
        generateBtn.click();
    }
});
