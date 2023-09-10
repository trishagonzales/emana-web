export const colors = {
  white: '#ffffff',
  black: '#000000',
  accent: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },
  primary: {
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314',
    950: '#1a2e05',
  },
  // primary: {
  //   50: '#f0fdf4',
  //   100: '#dcfce7',
  //   200: '#bbf7d0',
  //   300: '#86efac',
  //   400: '#4ade80',
  //   500: '#22c55e',
  //   600: '#16a34a',
  //   700: '#15803d',
  //   800: '#166534',
  //   900: '#14532d',
  //   950: '#052e16',
  // },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1b1f2d',
    // 800: '#1f2937',
    900: '#0e1220',
    // 900: '#111827',
    950: '#030712',
  },
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  danger: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  gradient: {
    100: 'linear-gradient(50deg, rgba(49,224,17,1) 40%, rgba(255,240,5,1) 100%)',
    200: 'linear-gradient(50deg, rgba(49,224,17,.9) 40%, rgba(255,240,5,.9) 100%)',

    // 200: 'linear-gradient(90deg, rgba(238, 230, 25, 0.75) 10%, rgba(57, 222, 16, 0.75) 90%)',
    // 300: 'linear-gradient(90deg, rgba(238, 230, 25, 0.5) 10%, rgba(57, 222, 16, 0.5) 90%)',
  },
};

export const semanticColors = {
  'accent-fg': colors.gray[950],
  'accent-default': colors.accent[200],
  'accent-emphasized': colors.accent[300],
  'accent-muted': colors.accent[400],
  'accent-subtle': colors.accent[500],

  'primary-fg': colors.gray[950],
  'primary-default': colors.primary[200],
  'primary-emphasized': colors.primary[400],
  'primary-muted': colors.primary[600],
  'primary-subtle': colors.primary[700],

  'fg-default': colors.white,
  'fg-emphasized': colors.gray[100],
  'fg-muted': colors.gray[300],
  'fg-subtle': colors.gray[400],
  'fg-disabled': colors.gray[600],

  'bg-canvas': colors.gray[950],
  'bg-default': colors.gray[900],
  'bg-subtle': colors.gray[800],
  'bg-muted': colors.gray[700],
  'bg-emphasized': colors.gray[500],
  'bg-disabled': colors.gray[700],
} as const;