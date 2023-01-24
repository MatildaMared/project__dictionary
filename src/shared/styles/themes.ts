const base = {
  breakpoints: {
    mobile: "23.43rem",
    tablet: "48rem",
    desktop: "90rem",
  },
  maxWidth: "1200px",
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
