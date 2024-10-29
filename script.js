// JavaScript to highlight the current conversation line
document.querySelectorAll("audio").forEach((audio, index) => {
  audio.addEventListener("play", function () {
    // Clear highlights in all conversations
    document.querySelectorAll(".line").forEach((line) => {
      line.classList.remove("highlight");
    });

    // Highlight the corresponding conversation
    const conversation = document.getElementById(`conversation${index + 1}`);
    const lines = conversation.querySelectorAll(".line");

    lines.forEach((line) => {
      line.classList.add("highlight");
    });
  });
});
