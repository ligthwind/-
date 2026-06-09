const bgmAudio = document.querySelector("[data-bgm]");
const bgmButton = document.querySelector("[data-bgm-toggle]");

async function playBgm() {
  if (!bgmAudio) return;
  try {
    bgmAudio.muted = false;
    bgmAudio.volume = 1;
    await bgmAudio.play();
    if (bgmButton) bgmButton.textContent = "暂停背景音乐";
  } catch {
    if (bgmButton) {
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

if (bgmAudio) {
  bgmAudio.addEventListener("error", () => {
    if (bgmButton) bgmButton.textContent = "音乐加载失败";
  });
  bgmAudio.addEventListener("play", () => {
    if (bgmButton) bgmButton.textContent = "暂停背景音乐";
  });
  bgmAudio.addEventListener("pause", () => {
    if (bgmButton) bgmButton.textContent = "播放背景音乐";
  });
}

window.addEventListener("DOMContentLoaded", playBgm);
