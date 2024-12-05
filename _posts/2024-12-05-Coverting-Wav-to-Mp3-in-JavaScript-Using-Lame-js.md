---
title: Converting WAV to MP3 in JavaScript Using Lame.js
description: By leveraging JavaScript and Lame.js powerful in-browser applications can be for processing audio files, specifically converting .wav files to .mp3 files. 
start_link: https://app.scribbler.live/?jsnb=https://examples.scribbler.live/Advanced%20JavaScript/Wav-to-MP3.jsnb
categories: Libraries
layout: post
---

Audio file conversions are a common requirement in modern web applications, whether for optimizing file sizes or supporting various playback formats. In this article, we’ll explore how to convert WAV files to MP3 directly in the browser using JavaScript and the [Lame.js](https://github.com/zhuker/lamejs) library.

## Prerequisites for Converting Wav to Mp3

Before proceeding, ensure you have:
- A basic understanding of JavaScript.
- A browser that supports modern JavaScript features like `FileReader` and `Blob`.

We’ll use **Lame.js**, a JavaScript port of the LAME MP3 encoder, to handle the WAV-to-MP3 conversion.

---

## The Code for Converting Wav to Mp3

Below is the step-by-step implementation:

### 1. Load Lame.js
We begin by loading Lame.js using a CDN:
```javascript
await scrib.loadScript("https://cdn.jsdelivr.net/npm/lamejs@1.2.0/lame.min.js");
```
This makes the Lame.js library available in your script.

### 2. HTML Setup
Add a file input element for users to upload their `.wav` files:
```html
<input type="file" id="fileInput" accept="audio/wav" />
```

### 3. JavaScript Logic
Here’s the complete JavaScript code:
```javascript
document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file && file.type === 'audio/wav') {
    const reader = new FileReader();
    reader.onload = function(e) {
      const arrayBuffer = e.target.result;
      convertToMp3(arrayBuffer);
    };
    reader.readAsArrayBuffer(file);
  } else {
    alert('Please upload a .wav file.');
  }
});

function convertToMp3(arrayBuffer) {
  // Decode the WAV file
  const wav = lamejs.WavHeader.readHeader(new DataView(arrayBuffer));
  const samples = new Int16Array(arrayBuffer, wav.dataOffset, wav.dataLen / 2);

  // Create MP3 encoder instance
  const mp3Encoder = new lamejs.Mp3Encoder(1, wav.sampleRate, 128); // Mono, 128 kbps

  // Encode WAV to MP3
  const mp3Data = [];
  const sampleBlockSize = 1152;
  for (let i = 0; i < samples.length; i += sampleBlockSize) {
    const sampleChunk = samples.subarray(i, i + sampleBlockSize);
    const mp3buf = mp3Encoder.encodeBuffer(sampleChunk);
    if (mp3buf.length > 0) {
      mp3Data.push(mp3buf);
    }
  }

  // Finish the MP3 encoding
  const end = mp3Encoder.flush();
  if (end.length > 0) {
    mp3Data.push(end);
  }

  // Create a Blob and trigger download
  const blob = new Blob(mp3Data, { type: 'audio/mp3' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'output.mp3';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
```

---

## How It Works

1. **File Input and Validation**:
   - A `change` event listener is attached to the file input element.
   - The script ensures only `.wav` files are processed.

2. **Reading the File**:
   - The `FileReader` reads the `.wav` file as an ArrayBuffer.

3. **Decoding WAV Data**:
   - Lame.js’s `WavHeader.readHeader()` extracts WAV header information like sample rate and data offset.

4. **Encoding MP3**:
   - The WAV data is divided into chunks of 1152 samples (a typical size for MP3 frames).
   - Each chunk is passed to the `Mp3Encoder`, which encodes it into MP3 format.
   - Remaining data is flushed and appended.

5. **Download MP3**:
   - The encoded MP3 data is converted into a `Blob`.
   - A temporary download link is created and clicked programmatically to trigger the download.


### Example Usage

1. Open your browser.
2. Load the HTML and JavaScript code.
3. Select a `.wav` file using the input element.
4. The script will generate and download the `.mp3` version of the file.



### Advantages of This Approach
- **Client-Side Processing**: No server or backend is required, enhancing privacy.
- **Lightweight Library**: Lame.js is efficient and easy to use.
- **Cross-Browser**: Works on any modern browser supporting JavaScript.


### Limitations
- Limited to relatively small `.wav` files due to browser memory constraints.
- Currently, supports mono-channel WAV files. Stereo support can be added by modifying the `Mp3Encoder` parameters.

Experiment here: [Scribbler Notebook for .wav to .mp3 coversion](https://app.scribbler.live/?jsnb=https://examples.scribbler.live/Advanced%20JavaScript/Wav-to-MP3.jsnb). You can expand this functionality further to support additional audio formats or features.
