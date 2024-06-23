function smoothScrollToTop() {
  const duration = 1000; // animation total duration
  const start = window.scrollY; // How far the user has scrolled down
  const end = 0; // I want the scroll to end at scroll0 (right of the top)
  const change = end - start; // 변화량
  let startTime = null;

  function animateScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    console.log(timeElapsed);

    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + change * progress);
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

document
  .querySelector(".back-to-top")
  .addEventListener("click", smoothScrollToTop);
