---
title: Spectral Analysis in JavaScript
layout: post
description: Spectral Analysis is a powerful tool used to solve scientific and engineering problems. JavaScript provides the toolkit to do this easily.
start_link: https://app.scribbler.live/?jsnb=./examples/spectral-analysis.jsnb
categories: Scientific
---
[Jump to Scribbler Notebook](https://app.scribbler.live/?jsnb=./examples/spectral-analysis.jsnb)
## Understanding Spectral Analysis

Spectral analysis, also known as frequency domain analysis, is a technique used to analyze signals, systems, and processes in terms of their frequency components. This method is fundamental in various fields such as engineering, physics, finance, and even medicine. It provides insights that are often not visible in the time domain, making it a powerful tool for signal processing and data analysis.

### What is Spectral Analysis?

Spectral analysis involves transforming a signal from its original domain (often time or space) into the frequency domain. This transformation reveals the different frequency components (or spectra) that make up the signal. The most common tool for this transformation is the Fourier Transform, which decomposes a signal into its constituent frequencies.

### Key Concepts in Spectral Analysis

1. **Frequency Spectrum:**
   - **Definition:** A representation of the amplitude (or power) of different frequency components present in a signal.
   - **Types:** Continuous spectrum for continuous signals and discrete spectrum for discrete signals.

2. **Fourier Transform:**
   - **Definition:** A mathematical transform that decomposes a function (often a time-domain signal) into its constituent frequencies.
   - **Types:**
     - **Continuous Fourier Transform (CFT):** Used for continuous signals.
     - **Discrete Fourier Transform (DFT):** Used for discrete signals, with the Fast Fourier Transform (FFT) being an efficient algorithm for computing the DFT.

3. **Power Spectral Density (PSD):**
   - **Definition:** A measure of a signal's power content versus frequency. It describes how the power of a signal is distributed across different frequencies.

4. **Windowing:**
   - **Definition:** A technique used to minimize edge effects when performing spectral analysis on a segment of a signal. Common window functions include Hamming, Hanning, and Blackman windows.

### Applications of Spectral Analysis

1. **Engineering and Signal Processing:**
   - **Communication Systems:** Spectral analysis is used to design and analyze communication systems, ensuring that signals are transmitted efficiently and without interference.
   - **Audio Processing:** In music and speech processing, spectral analysis helps in noise reduction, echo cancellation, and audio compression.
   - **Vibration Analysis:** Used in mechanical engineering to detect faults in rotating machinery by analyzing vibration signals.

2. **Physics:**
   - **Optics:** Spectral analysis of light helps in identifying materials and analyzing properties of optical systems.
   - **Quantum Mechanics:** Used to study energy levels of atoms and molecules.

3. **Medicine:**
   - **Electroencephalography (EEG):** Analyzing brain wave frequencies to study brain activity and diagnose neurological disorders.
   - **Medical Imaging:** Techniques like Magnetic Resonance Imaging (MRI) use spectral analysis to create detailed images of the body's internal structures.

4. **Finance:**
   - **Time Series Analysis:** Spectral analysis helps in understanding the cyclical patterns in financial data, such as stock prices or economic indicators.

5. **Environmental Science:**
   - **Climate Studies:** Used to analyze climate data and identify periodic patterns like El Niño and other atmospheric phenomena.

### Techniques and Tools for Spectral Analysis

1. **Fast Fourier Transform (FFT):**
   - **Description:** An efficient algorithm for computing the Discrete Fourier Transform (DFT) of a sequence. Widely used due to its speed and computational efficiency.
   - **Applications:** Commonly used in real-time signal processing applications.

2. **Wavelet Transform:**
   - **Description:** An alternative to the Fourier Transform that provides both time and frequency information. Useful for analyzing non-stationary signals.
   - **Applications:** Used in image compression, denoising, and feature extraction.

3. **Short-Time Fourier Transform (STFT):**
   - **Description:** A method that divides a signal into short segments and applies the Fourier Transform to each segment, providing a time-frequency representation.
   - **Applications:** Useful for analyzing signals whose frequency content changes over time.


## What is Digital Signal Processing (DSP)?

Digital Signal Processing (DSP) is the field of study and practice that deals with the digital representation of signals and the processing of these signals using digital computation techniques. DSP plays a critical role in various applications, from telecommunications and audio processing to medical imaging and radar systems.

### Key Concepts in DSP

1. **Signals:**
   - **Definition:** A signal is a function that conveys information about the behavior or attributes of some phenomenon. In DSP, signals are typically represented as sequences of numbers, which can be processed and analyzed.
   - **Types:** Common types of signals include audio signals, video signals, sensor data, and communication signals.

2. **Sampling:**
   - **Definition:** The process of converting a continuous-time signal into a discrete-time signal by taking samples at regular intervals.
   - **Nyquist-Shannon Sampling Theorem:** This theorem states that a continuous signal can be completely represented by its samples and perfectly reconstructed if it is sampled at a rate greater than twice its highest frequency component (Nyquist rate).

3. **Quantization:**
   - **Definition:** The process of mapping a large set of input values to a smaller set, such as rounding values to a set of discrete levels in digital signal representation.

4. **Transforms:**
   - **Fourier Transform (FT):** Converts a time-domain signal into its frequency components.
   - **Discrete Fourier Transform (DFT):** A finite sequence of equally spaced samples of a signal is transformed into the same number of frequency components.
   - **Fast Fourier Transform (FFT):** An efficient algorithm to compute the DFT.

5. **Filtering:**
   - **Definition:** The process of modifying or enhancing certain aspects of a signal. Filters can be used to remove noise, extract important information, or alter the signal in various ways.
   - **Types of Filters:** Low-pass, high-pass, band-pass, and band-stop filters.

6. **Convolution:**
   - **Definition:** A mathematical operation used to express the relationship between the input and output of a linear time-invariant system. It is fundamental in the analysis and implementation of filters.

### Applications of DSP

1. **Audio Processing:**
   - **Noise Reduction:** Removing unwanted background noise from audio recordings.
   - **Compression:** Reducing the size of audio files without significantly compromising quality (e.g., MP3 encoding).
   - **Equalization:** Adjusting the balance between frequency components to achieve desired sound characteristics.

2. **Telecommunications:**
   - **Modulation and Demodulation:** Converting digital data into signals suitable for transmission over communication channels and vice versa.
   - **Error Detection and Correction:** Techniques to detect and correct errors in transmitted data.
   - **Signal Encoding:** Encoding data for efficient and reliable transmission.

3. **Medical Imaging:**
   - **MRI and CT Scans:** Processing raw data from scans to produce clear images for diagnosis.
   - **Ultrasound Imaging:** Enhancing image quality and extracting important features.

4. **Radar and Sonar:**
   - **Target Detection:** Identifying objects and their characteristics from radar or sonar signals.
   - **Signal Analysis:** Analyzing echoes and reflections to determine distance, speed, and direction.

5. **Image Processing:**
   - **Compression:** Reducing the file size of images (e.g., JPEG).
   - **Enhancement:** Improving the visual quality of images through techniques like sharpening and noise reduction.
   - **Feature Extraction:** Identifying and extracting important features from images for tasks such as object recognition.

6. **Speech Processing:**
   - **Speech Recognition:** Converting spoken words into text.
   - **Text-to-Speech:** Converting text into synthetic speech.
   - **Voice Authentication:** Verifying a person's identity based on their voice.

### Tools and Libraries for DSP

1. **MATLAB:** A high-level language and interactive environment for numerical computation, visualization, and programming.
   - **Website:** [MATLAB](https://www.mathworks.com/products/matlab.html)

2. **SciPy:** An open-source Python library used for scientific and technical computing, including DSP.
   - **Website:** [SciPy](https://scipy.org/)
   - **GitHub:** [SciPy GitHub](https://github.com/scipy/scipy)

3. **NumPy:** A fundamental package for numerical computation in Python, providing support for arrays and matrices.
   - **Website:** [NumPy](https://numpy.org/)
   - **GitHub:** [NumPy GitHub](https://github.com/numpy/numpy)

4. **GNU Radio:** An open-source software development toolkit that provides signal processing blocks to implement software-defined radios and signal processing systems.
   - **Website:** [GNU Radio](https://www.gnuradio.org/)
   - **GitHub:** [GNU Radio GitHub](https://github.com/gnuradio/gnuradio)

5. **TensorFlow:** An open-source library for numerical computation using data flow graphs, widely used for machine learning and deep learning applications, including DSP tasks.
   - **Website:** [TensorFlow](https://www.tensorflow.org/)
   - **GitHub:** [TensorFlow GitHub](https://github.com/tensorflow/tensorflow)

## Digital Signal Processing in JavaScript


A good library for DSP in JavaScript is here: [https://github.com/corbanbrook/dsp.js/](https://github.com/corbanbrook/dsp.js/). This provides the basic tools for DSP inclduing FFT. Here is a sample code for generating spectogram from an Audio Buffer using the FFT class from the library:

      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      const fftSize = 2048; // FFT size (powers of 2 are often used for efficiency)
      const fft = new FFT(fftSize);

      const channelData = audioBuffer.getChannelData(0); // Use the first audio channel
      const hopSize = fftSize / 4; // Hop size for overlapping windows

      const spectrogram = [];
      for (let i = 0; i + fftSize <= channelData.length; i += hopSize) {
        const windowData = channelData.slice(i, i + fftSize);
        fft.realTransform(windowData);

        const magnitudes = new Array(fftSize / 2);
        for (let j = 0; j < fftSize / 2; j++) {
          magnitudes[j] = Math.sqrt(windowData[2 * j] ** 2 + windowData[2 * j + 1] ** 2);
        }

        spectrogram.push(magnitudes);
      }


A complete code including the visualization of the spectrogram is available in the notebook: [Spectral Analysis](https://app.scribbler.live/#./examples/spectral-analysis.jsnb). 

## Fast Fourier Transform (FFT) Implementation in JavaScript

Here's a simple implementation of the Fast Fourier Transform (FFT) algorithm in JavaScript:


```javascript
// FFT function
function fft(input) {
    const N = input.length;
    if (N <= 1) return input;

    // Divide
    const even = fft(input.filter((_, i) => i % 2 === 0));
    const odd = fft(input.filter((_, i) => i % 2 !== 0));

    // Conquer
    const T = [];
    for (let k = 0; k < N / 2; k++) {
        const t = odd[k] * Math.exp(-2 * Math.PI * 1j * k / N);
        T[k] = even[k] + t;
        T[k + N / 2] = even[k] - t;
    }

    return T;
}

// Helper function to generate complex number
function Complex(re, im) {
    return { re, im, toString: () => `${re} + ${im}i` };
}

// Example usage
const input = [
    Complex(1, 0),
    Complex(1, 0),
    Complex(1, 0),
    Complex(1, 0),
    Complex(0, 0),
    Complex(0, 0),
    Complex(0, 0),
    Complex(0, 0)
];

const output = fft(input);
console.log("FFT Output:");
output.forEach((val, index) => console.log(`index ${index}: ${val.toString()}`));
```

### Explanation

1. **FFT Function:**
   - The `fft` function takes an array of complex numbers as input.
   - It uses the divide-and-conquer approach to recursively split the input array into even and odd indexed elements.
   - It then combines the results of the recursive calls using the butterfly operation.

2. **Complex Number Helper:**
   - The `Complex` function is a helper to create complex numbers with real (`re`) and imaginary (`im`) parts.

3. **Example Usage:**
   - The `input` array is an example input signal composed of complex numbers.
   - The `output` array stores the result of the FFT transformation, which is logged to the console.

### Notes

- **Complex Arithmetic:** This code assumes a basic understanding of complex arithmetic (addition, multiplication) and the exponential function involving imaginary numbers (`Math.exp(-2 * Math.PI * 1j * k / N)`).
- **Efficiency:** This implementation is a straightforward, educational example. For more efficient and robust FFT implementations, consider using optimized libraries like [fft.js](https://github.com/dntj/jsfft) or [DSP.js](https://github.com/corbanbrook/dsp.js).

### Libraries for FFT in JavaScript

1. **fft.js**
   - **Description:** A comprehensive library for fast Fourier transform in JavaScript.
   - **GitHub:** [fft.js GitHub](https://github.com/dntj/jsfft)

2. **DSP.js**
   - **Description:** A digital signal processing library for JavaScript.
   - **GitHub:** [DSP.js GitHub](https://github.com/corbanbrook/dsp.js)

These libraries provide optimized and feature-rich implementations of FFT and other signal processing algorithms, suitable for more complex and performance-critical applications.



## Applications of Digital Signal Processing (DSP) in the Browser

Digital Signal Processing (DSP) in the browser leverages the power of JavaScript and Web APIs to handle and manipulate digital signals directly within web applications. This has opened up numerous exciting applications across various domains. Here are some key applications of DSP in the browser:

### 1. **Audio Processing**

**Description:** Real-time manipulation and analysis of audio signals.

- **Examples:**
  - **Noise Reduction:** Removing background noise from microphone input in real-time.
  - **Equalization:** Adjusting audio frequencies to enhance sound quality.
  - **Effects Processing:** Adding reverb, echo, or other audio effects in web-based music production tools.

**Tools and Libraries:**
  - **Web Audio API:** Provides high-level JavaScript API for processing and synthesizing audio.
  - **Tone.js:** A library built on the Web Audio API for creating interactive music in the browser.

**Example Use Case:**
```javascript
const context = new (window.AudioContext || window.webkitAudioContext)();
const source = context.createMediaElementSource(audioElement);
const gainNode = context.createGain();

source.connect(gainNode);
gainNode.connect(context.destination);
gainNode.gain.value = 0.5; // Adjust volume
```

### 2. **Speech Recognition and Synthesis**

**Description:** Converting spoken words into text (speech recognition) and text into spoken words (speech synthesis).

- **Examples:**
  - **Voice Command Applications:** Control web applications using voice commands.
  - **Accessibility Tools:** Text-to-speech for visually impaired users.

**Tools and Libraries:**
  - **Web Speech API:** Provides speech recognition and speech synthesis capabilities.

**Example Use Case:**
```javascript
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.onresult = (event) => {
  console.log('You said: ', event.results[0][0].transcript);
};
recognition.start();
```

### 3. **Real-Time Communication**

**Description:** Enhancing the quality of audio and video in real-time communication applications.

- **Examples:**
  - **Echo Cancellation:** Removing echo from audio during video calls.
  - **Noise Suppression:** Reducing background noise in voice chat applications.

**Tools and Libraries:**
  - **WebRTC:** Real-time communication capabilities for audio, video, and data.

**Example Use Case:**
```javascript
const constraints = { audio: true, video: true };
navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    const video = document.querySelector('video');
    video.srcObject = stream;
    video.onloadedmetadata = (e) => {
      video.play();
    };
  })
  .catch((err) => {
    console.error('Error accessing media devices.', err);
  });
```

### 4. **Data Visualization and Analysis**

**Description:** Analyzing and visualizing signals such as financial data or scientific measurements.

- **Examples:**
  - **Fourier Transform:** Analyzing the frequency components of signals.
  - **Spectrograms:** Visualizing the frequency spectrum of signals over time.

**Tools and Libraries:**
  - **D3.js:** A JavaScript library for producing dynamic, interactive data visualizations in web browsers.

**Example Use Case:**
```javascript
const data = [30, 86, 168, 281, 303, 365, 420, 485];
d3.select('.chart')
  .selectAll('div')
  .data(data)
  .enter().append('div')
  .style('width', d => `${d}px`)
  .text(d => d);
```

### 5. **Medical and Biometric Applications**

**Description:** Processing and analyzing biometric signals for health monitoring and diagnostics.

- **Examples:**
  - **ECG Analysis:** Real-time monitoring and analysis of electrocardiogram signals.
  - **Wearable Devices:** Signal processing for fitness trackers and health monitoring devices.

**Tools and Libraries:**
  - **Web Bluetooth API:** Allows web applications to connect to Bluetooth devices, such as health monitors.

**Example Use Case:**
```javascript
navigator.bluetooth.requestDevice({ filters: [{ services: ['heart_rate'] }] })
  .then(device => device.gatt.connect())
  .then(server => server.getPrimaryService('heart_rate'))
  .then(service => service.getCharacteristic('heart_rate_measurement'))
  .then(characteristic => {
    characteristic.startNotifications().then(_ => {
      characteristic.addEventListener('characteristicvaluechanged', event => {
        const heartRate = event.target.value.getUint8(1);
        console.log('Heart Rate: ', heartRate);
      });
    });
  })
  .catch(error => { console.error(error); });
```

### 6. **Interactive Learning Tools**

**Description:** Creating educational tools that teach DSP concepts through interactive simulations.

- **Examples:**
  - **Signal Processing Simulators:** Interactive platforms for learning about filters, transforms, and other DSP concepts.
  - **Visualization of Algorithms:** Demonstrating how different DSP algorithms work through visual aids.

**Tools and Libraries:**
  - **p5.js:** A JavaScript library that makes coding accessible for artists, designers, educators, and beginners.

**Example Use Case:**
```javascript
function setup() {
  createCanvas(400, 400);
  let fft = new p5.FFT();
}

function draw() {
  background(200);
  let spectrum = fft.analyze();
  noStroke();
  fill(255, 0, 0); // Spectrum is red
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }
}
```





