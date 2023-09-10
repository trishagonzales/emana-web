import { colors, semanticColors } from './colors';
import { borderRadius, borderWidths } from './foundations';

const boxLayerStyles = {
  'box-disabled': {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: semanticColors['bg-disabled'],
    bg: semanticColors['bg-disabled'],
    color: semanticColors['fg-disabled'],
  },
  'box-muted': {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: semanticColors['bg-subtle'],
    bg: semanticColors['bg-default'],
    color: semanticColors['fg-muted'],
  },
  'box-emphasized': {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: semanticColors['bg-muted'],
    bg: semanticColors['bg-subtle'],
    color: semanticColors['fg-emphasized'],
  },
  'box-selected': {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: semanticColors['primary-muted'],
    bg: semanticColors['bg-subtle'],
    color: semanticColors['primary-default'],
  },
  'box-outline': {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: semanticColors['primary-muted'],
    bg: 'whiteAlpha.50',
    color: semanticColors['fg-muted'],
  },
  'box-outline-emphasized': {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: semanticColors['primary-emphasized'],
    bg: 'whiteAlpha.100',
    color: semanticColors['fg-default'],
  },
  'box-solid': {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: colors.primary[500],
    bgGradient: colors.gradient['100'],
    color: semanticColors['primary-fg'],
  },
  'box-solid-emphasized': {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: colors.primary[500],
    bgGradient: colors.gradient['200'],
    color: semanticColors['primary-fg'],
  },
};

export const layerStyles = {
  'text-accent': {
    color: semanticColors['accent-muted'],
  },
  'text-primary': {
    color: semanticColors['primary-muted'],
  },
  'text-accent-gradient': {
    bgClip: 'text',
    bgGradient: 'linear-gradient(45deg, #39de10 10%, #eee619 90%)',
  },
  ...boxLayerStyles,
};
