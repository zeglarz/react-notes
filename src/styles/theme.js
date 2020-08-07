const light = {
  primary: "#eee",
  secondary: "#FA8607",
  primaryDark: "#fff",
  secondaryDark: "#444",
  header: "#f5ba13",
  bg: "#f9f8f4",
  text: "#111",
  grey: "#c6c2c2",
  get shadow() {
    return `0 2px 5px ${this.grey}`;
  }
};

const dark = {
  primary: "#f5ba13",
  secondary: "#E6CA51",
  primaryDark: "#262626",
  secondaryDark: "#eee",
  header: "#444",
  bg: "#34353a",
  text: "#eee",
  grey: "#707275",
  get shadow() {
    return `0 2px 6px ${this.grey}`;
  }
};

export { light, dark };
