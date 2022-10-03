// getting screen width and height, if you don't like this as "mobile support" just replace with css bootstrap styles.
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default getWindowDimensions;
