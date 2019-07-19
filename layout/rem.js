const BASE_FONT_SIZE = 16;
const DESIGN_SIZE = 375;
const MAX_ROOT_SIZE = 23.768;

/**
 * set rem config
 * @param { Object } config - The employee who is responsible for the project.
 * @param { Number } config.baseFontSize=16 - baseFontSize
 * @param { Number } config.designWidth=375 - designWidth
 * @param { Number } config.maxRootSize=23.768 - maxRootSize
 */
function rem({ baseFontSize = BASE_FONT_SIZE, designWidth = DESIGN_SIZE, maxRootSize = MAX_ROOT_SIZE }) {
  const setRem = () => {
    const clientWidth = document.documentElement.clientWidth;
    const per = clientWidth / designWidth;
    const rem = per * baseFontSize;
    if (rem < maxRootSize) {
      document.documentElement.style.fontSize = `${rem}px`;
    } else {
      document.documentElement.style.fontSize = `${maxRootSize}px`;
    }
  };

  setRem();

  window.onresize = () => {
    setRem();
  };
}

export default rem;
