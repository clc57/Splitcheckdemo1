const responses = {
  "Angry": [
    "I hear your anger. Try taking a break and breathing slowly.",
    "Anger can be intense. Name one small thing that calms you."
  ],
  "Sad": [
    "Sadness is valid. Would you like to write about it?",
    "I’m here with you. Try listing three things you appreciate."
  ],
  "Anxious": [
    "Anxiety can feel like waves. Let’s ground with your senses.",
    "Focus on one thing in the room. Describe it to yourself."
  ],
  "Empty": [
    "Emptiness can be heavy. What used to bring you joy?",
    "You’re not alone in that feeling. Let’s think of a favorite memory."
  ]
};

document.querySelectorAll('.buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    const emotion = btn.dataset.emotion;
    const list = responses[emotion];
    const reply = list[Math.floor(Math.random()*list.length)];
    document.getElementById('echoResponse').innerText = reply;
  });
});

document.getElementById('saveJournal').addEventListener('click', () => {
  const entry = document.getElementById('journal').value;
  if (!entry) return;
  localStorage.setItem('journalEntry', entry);
  document.getElementById('savedEntry').innerText = "Saved: " + entry;
  document.getElementById('journal').value = '';
});

// Load saved entry on page load
window.addEventListener('load', () => {
  const saved = localStorage.getItem('journalEntry');
  if (saved) {
    document.getElementById('savedEntry').innerText = "Saved: " + saved;
  }
});
