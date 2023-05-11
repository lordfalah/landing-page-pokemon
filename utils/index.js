const scrollingBtn = (element) => {
  const elm = document.querySelector(element);

  return elm.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
};

function random_rgb() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

export { scrollingBtn, random_rgb };
