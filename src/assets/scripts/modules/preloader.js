export const preLoader = function() {
  const preloader = document.querySelector(".preloader");
  const preloaderText = document.querySelector(".preloader__text");
  const preloaderSpin = document.querySelector(".preloader__spinner");
  let currentPercent = 0;
  let animateInterval;
  let animatePreloader = () => {
    currentPercent += 15; // изменяется в зависимости от загрузки картинок

    if (currentPercent >= 100) {
      preloaderText.innerHTML = 100;
      currentPercent = 100;
      clearInterval(animateInterval);
      setTimeout(() => {
        preloaderSpin.style.opacity = 0;
        preloaderText.style.opacity = 0;
      }, 500);
      setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => {
          preloader.style.display = "none";
        }, 1500);
      }, 1000);
    }
    preloaderText.innerHTML = currentPercent;
  };

  if (preloaderSpin) {
    animateInterval = setInterval(animatePreloader, 50);
  }
};
