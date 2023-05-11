const useSrcollingBtn = (element) => {
  const elm = document.querySelector(element);

  return elm.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
};
