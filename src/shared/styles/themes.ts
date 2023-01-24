const base = {
  breakpoints: {
    mobile: "23.43rem",
    tablet: "48rem",
    desktop: "90rem",
  },
  maxWidth: "1000px",
  fontFamily: "Inter, sans-serif",
};

export const lightTheme = {
  ...base,
  background: "var(--color-white)",
  text: "var(--color-black)",
};

export const darkTheme = {
  ...base,
  background: "var(--color-black)",
  text: "var(--color-white)",
};
