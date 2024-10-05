export const fadein = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 47 : direction === "down" ? -47 : 0,
      x: direction === "left" ? 47 : direction === "right" ? -47 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
