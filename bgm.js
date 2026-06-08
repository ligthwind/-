const bgmAudio = document.querySelector("[data-bgm]");
const bgmButton = document.querySelector("[data-bgm-toggle]");

async function playBgm() {
  if (!bgmAudio) return;
  try {
    await bgmAudio.play();
    if (bgmButton) bgmButton.textContent = "暂停背景音乐";
  } catch {
    if (bgmButton) {
      bgmButton.hidden = false;
      bgmButton.textContent = "播放背景音乐";
    }
  }
}

function toggleBgm() {
  if (!bgmAudio) return;
  if (bgmAudio.paused) {
    playBgm();
  } else {
    bgmAudio.pause();
    if (bgmButton) bgmButton.textContent = "播放背景音乐";
  }
}

if (bgmButton) {
  bgmButton.addEventListener("click", toggleBgm);
}

window.addEventListener("DOMContentLoaded", playBgm);
