export const space = {
  xs: "clamp(0.25rem, calc(0.00rem + 0.63vw), 0.50rem)",
  sm: "clamp(0.50rem, calc(0.25rem + 0.63vw), 0.75rem)",
  md: "clamp(0.75rem, calc(0.50rem + 0.63vw), 1.00rem)",
  lg: "clamp(1.00rem, calc(0.50rem + 1.25vw), 1.50rem)",
  xl: "clamp(1.50rem, calc(1.00rem + 1.25vw), 2.00rem)",
  "2xl": "clamp(2.00rem, calc(1.00rem + 2.50vw), 3.00rem)",
  "3xl": "clamp(3.00rem, calc(2.00rem + 2.50vw), 4.00rem)",
  "4xl": "clamp(4.00rem, calc(2.00rem + 5.00vw), 6.00rem)",
  "5xl": "clamp(6.00rem, calc(4.00rem + 5.00vw), 8.00rem)",
  "6xl": "clamp(8.00rem, calc(4.00rem + 10.00vw), 12.00rem)",
  "7xl": "clamp(12.00rem, calc(8.00rem + 10.00vw), 16.00rem)",
} as const;

export const sizes = {
  "max-width": "1300px",
  "page-width": "1000px",
} as const;

export const borderRadius = {
  DEFAULT: "4px",
  none: "none",
  circle: "50%",
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "20px",
  xl: "24px",
  "2xl": "28px",
};

export const borderWidths = {
  DEFAULT: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
};
