const lyrics = [
  "Living all alone kinda forgot it's been that long",
  "Since someone's gone, I've been trying to be a little bit strong",
  "And it is not that easy to be exactly who I was",
  "My shit is done, now it's time for me try to moving on",
  "'Cuz if you think I'm such a happy person, no you are wrong",
  "By saying my laughter is louder than yours",
  "Shut your freakin' mouth",
  "No one knows what I feel and what I suffer, no they don't know",
  "So keep your thoughts and stop assuming that",
  "Someone is always fine"
];

const delays = [400, 400, 400, 400, 400, 400, 400, 400, 400, 1000];
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
