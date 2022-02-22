const customViewports = {
  Iphone8: {
    name: "Iphone 8",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  Iphone8Plus: {
    name: "Iphone 8+",
    styles: {
      width: "414px",
      height: "736px",
    },
  },
  IphoneX: {
    name: "Iphone X / Iphone 11",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
  Iphone11ProMax: {
    name: "Iphone 11 Pro Max",
    styles: {
      width: "414px",
      height: "896px",
    },
  },
  Iphone12: {
    name: "Iphone 12",
    styles: {
      width: "390px",
      height: "844px",
    },
  },
  Iphone12ProMax: {
    name: "Iphone 12 Pro Max",
    styles: {
      width: "428px",
      height: "926px",
    },
  },
  Ipad5: {
    name: "Ipad 5",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: customViewports },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
