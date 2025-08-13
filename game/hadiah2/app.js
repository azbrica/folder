const flame = document.getElementById("flame");
const song = document.getElementById("song");

// Deteksi suara tiupan
navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.fftSize = 256;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function detectBlow() {
        analyser.getByteFrequencyData(dataArray);
        let volume = dataArray.reduce((a, b) => a + b) / dataArray.length;
        if (volume > 50) {
            padamkanLilin();
        }
        requestAnimationFrame(detectBlow);
    }
    detectBlow();
});

function padamkanLilin() {
    flame.style.display = "none";
    let smoke = document.createElement("img");
    smoke.src = "assets/smoke.gif";
    smoke.style.position = "absolute";
    smoke.style.top = "20px";
    smoke.style.left = "50%";
    smoke.style.transform = "translateX(-50%)";
    document.querySelector(".cake-container").appendChild(smoke);

    song.play();
    confetti.start();
    setTimeout(() => confetti.stop(), 5000);
}
