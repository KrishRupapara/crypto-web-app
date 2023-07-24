import type { ISourceOptions } from "tsparticles-engine";

const Options: ISourceOptions = {
  background: {
    color: {
      value: "#FAF3F1",
    },
    position: "50% 50%",
    repeat: "no-repeat",
    size: "20%",
  },
  fpsLimit: 120,
  // interactivity: {
  //   events: {
  //     onclick: {
  //       enable: true,
  //       mode: "repulse",
  //     },
  //     onHover: {
  //       enable: true,
  //       mode: "repulse",
  //     },
  //     resize: true,
  //   },
  //   modes: {
  //     push: {
  //       quantity: 4,
  //     },
  //     repulse: {
  //       distance: 200,
  //       duration: 0.4,
  //     },
  //   },
  // },

  particles: {
    color: {
      value: "#8D99AE",
    },
    shadow: {
      blur: 10,
      color: "#8D99AE",
      enable: true,
      offset: { x: 3, y: 3 },
    },
    links: {
      color: "#8D99AE",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  detectRetina: true,
};

export default Options;
