import { semanticColors } from './colors';

export const fonts = {
  heading: 'var(--font-body)',
  body: 'var(--font-body)',
} as const;

export const fontSizes = {
  xs: 'clamp(0.925rem, calc(0.925rem + 0.00vw), 0.925rem)',
  sm: 'clamp(1.00rem, calc(1.00rem + 0.00vw), 1.00rem)',
  md: 'clamp(1.20rem, calc(1.15rem + 0.13vw), 1.25rem)',
  lg: 'clamp(1.44rem, calc(1.32rem + 0.31vw), 1.56rem)',
  xl: 'clamp(1.73rem, calc(1.50rem + 0.56vw), 1.95rem)',
  '2xl': 'clamp(2.07rem, calc(1.71rem + 0.92vw), 2.44rem)',
  '3xl': 'clamp(2.49rem, calc(1.92rem + 1.41vw), 3.05rem)',
  '4xl': 'clamp(2.99rem, calc(2.16rem + 2.07vw), 3.82rem)',
  '5xl': 'clamp(3.58rem, calc(2.40rem + 2.96vw), 4.77rem)',
} as const;

export const fontWeights = {
  light: '300',
  regular: '400',
  semibold: '600',
  bold: '700',
  extrabold: '800',
} as const;

export const lineHeights = {
  none: '1',
  sm: '1.25',
  md: '1.5',
  lg: '1.75',
} as const;

export const letterSpacings = {
  none: '1',
  sm: '1.25',
  md: '1.375',
  lg: '1.5',
  xl: '1.625',
  '2xl': '2',
} as const;

export const textStyles = {
  'body-sm': {
    fontSize: fontSizes['xs'],
    lineHeight: lineHeights.lg,
    color: semanticColors['fg-subtle'],
  },
  body: {
    fontSize: fontSizes['sm'],
    fontWeights: fontWeights.light,
    lineHeight: lineHeights.lg,
    letterSpacing: letterSpacings['2xl'],
    color: semanticColors['fg-muted'],
  },
  'body-lg': {
    fontSize: fontSizes['md'],
    fontWeights: fontWeights.light,
    lineHeight: lineHeights.lg,
    color: semanticColors['fg-muted'],
  },
  subheading: {
    fontSize: fontSizes['sm'],
    fontWeight: fontWeights['semibold'],
    lineHeight: lineHeights.md,
  },
  heading: {
    fontSize: fontSizes['md'],
    fontWeight: fontWeights['semibold'],
    lineHeight: lineHeights.md,
  },
  'caption-heading': {
    fontSize: fontSizes['sm'],
    fontWeight: fontWeights['semibold'],
    lineHeight: lineHeights.md,
    color: semanticColors['primary-emphasized'],
  },
  'title-xs': {
    fontSize: fontSizes['lg'],
    fontWeight: fontWeights['semibold'],
    lineHeight: lineHeights.md,
  },
  'title-sm': {
    fontSize: fontSizes['xl'],
    fontWeight: fontWeights['bold'],
    lineHeight: lineHeights.sm,
  },
  'title-md': {
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights['bold'],
    lineHeight: lineHeights.sm,
  },
  'title-lg': {
    fontSize: fontSizes['3xl'],
    fontWeight: fontWeights['bold'],
    lineHeight: lineHeights.sm,
  },
  'title-xl': {
    fontSize: fontSizes['4xl'],
    fontWeight: fontWeights['extrabold'],
    lineHeight: lineHeights.sm,
  },
} as const;
