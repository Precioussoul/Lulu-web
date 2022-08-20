const words = [
  "Igbo",
  "Yoruba",
  "Swalihi",
  "Afrikaans",
  "Bini",
  "Hausa",
  "Panso",
  "Fula",
  "Arabic",
];
let count = 0;
let title = "";

const displayText = () => {
  if (count === title.length) {
    count = 0;
  }

  title = words[count];

  const textDiv = document.getElementById("display-text");
  textDiv.innerHTML = title;

  if (title.length === words[count].length) {
    count++;
  }
  if (count > words.length - 1) {
    count = 0;
  }

  setTimeout(() => {
    displayText();
  }, 1000);
};

displayText();
