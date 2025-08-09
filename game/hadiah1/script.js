const lyrics = ["Your morning eyes, I could stare like watching stars", "I could walk you by, and I'll tell without a thought", "You'd be mine", "Would you mind if I took your hand tonight", "Know you're all that I want this life", "I'll imagine we fell in love", "I'll nap under moonlight skies with you", "I think I'll picture us, you with the waves", "The oceans colors on your face", "I'll leave my heart with your air", "So let me fly with you", "Will you be forever with me", "[Guitar]", "My love will always stay by you", "I'll keep it safe so don't you worry a thing,", "I'll tell you I love you more", "It's stuck with you forever so promise you won't let it go", "I'll trust the universe will always bring me to you", "I'll imagine we fell in love", "I'll nap under moonlight skies with you", "I think I'll picture us, you with the waves", "The oceans colors on your face", "I'll leave my heart with your air", "So let me fly with you", "Will you be forever with me"];
const delays = [400, 300, 300, 400, 3300, 200, 200, 200, 400, 400, 400, 400, 30000, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 1000];
let currentIndex = 0;
let currentCharIndex = 0;
let currentLine = "";

const lyricsElement = document.getElementById("lyrics");

function typeNextCharacter() {
  if (currentIndex >= lyrics.length) return;

  if (currentCharIndex < lyrics[currentIndex].length) {
    currentLine += lyrics[currentIndex].charAt(currentCharIndex);
    lyricsElement.textContent = currentLine;
    currentCharIndex++;
    setTimeout(typeNextCharacter, 110);
  } else {
    setTimeout(() => {
      currentIndex++;
      currentLine = "";
      currentCharIndex = 0;
      lyricsElement.textContent = "";
      typeNextCharacter();
    }, delays[currentIndex]);
  }
}

typeNextCharacter();
