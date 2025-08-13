const flame = document.querySelector('.flame');
const smokePuff = document.getElementById('smokePuff');
const message = document.getElementById('wishMessage');
const micStatus = document.getElementById('micStatus');
const song = document.getElementById('birthdaySong');

let flameOn = true;

// Fungsi matiin lilin
function blowCandle() {
  if (flameOn) {
    flame.style.display = 'none';
    micStatus.textContent = "husssh 🎂";
    message.style.display = 'block';
    song.play();
    flameOn = false;
  }
}

// Deteksi suara via mic
async function startMic() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const mic = audioContext.createMediaStreamSource(stream);
    mic.connect(analyser);

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function checkVolume() {
      analyser.getByteFrequencyData(dataArray);
      let volume = dataArray.reduce((a, b) => a + b) / dataArray.length;
      micStatus.textContent = `Mic active... volume: ${volume.toFixed(1)}`;

      if (volume > 50) { // ambang tiupan
        blowCandle();
      }
      requestAnimationFrame(checkVolume);
    }
    checkVolume();
  } catch (err) {
    micStatus.textContent = "Mic error: " + err;
  }
}

startMic();
