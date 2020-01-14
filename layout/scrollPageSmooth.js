function scrollPageSmooth(el = window, from = document.documentElement.scrollTop || document.body.scrollTop, to = 0, duration = 800) {
  return new Promise((resolve, reject) => {
    try {
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame =
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            return window.setTimeout(callback, 1000 / 60);
          };
      }
      const difference = Math.abs(from - to);
      const outStep = Math.ceil((difference / duration) * 50);
      function scroll(start, end, step) {
        if (start === end) {
          resolve();
          return;
        }

        let d = start + step > end ? end : start + step;
        if (start > end) {
          d = start - step < end ? end : start - step;
        }

        if (el === window) {
          window.scrollTo(d, d);
        } else {
          el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
      }
      scroll(from, to, outStep);
    } catch (error) {
      reject(error);
    }
  });
}

export default scrollPageSmooth;
