const scrollingBtn = (element) => {
  const elm = document.querySelector(element);

  elm.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
};

const randomRGB = () => {
  const generateRandomNumber = () => Math.round(Math.random() * 255);
  const red = generateRandomNumber();
  const green = generateRandomNumber();
  const blue = generateRandomNumber();
  return `rgb(${red},${green},${blue})`;
};

export { scrollingBtn, randomRGB };
