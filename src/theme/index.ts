import { ThemeOverride, extendTheme } from '@chakra-ui/react';
import { colors, semanticColors } from './colors';
import { borderWidths, borderRadius, sizes, space } from './foundations';
import {
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  letterSpacings,
  textStyles,
} from './typography';
import { layerStyles } from './layerStyles';

const config: ThemeOverride = {
  colors: {
    ...colors,
    success: {
      ...colors.primary,
    },
    ...semanticColors,
  },
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  borders: borderWidths,
  radii: borderRadius,
  sizes,
  space,
  textStyles,
  layerStyles,

  components: {
    Container: {
      baseStyle: {
        maxWidth: sizes['max-width'],
      },
    },
    VStack: {
      baseStyle: {
        align: 'start',
      },
    },
  },

  styles: {
    global: {
      'html, body': {
        ...textStyles.body,
        textColor: semanticColors['fg-default'],
        bg: semanticColors['bg-canvas'],
      },
    },
  },
};

export const theme = extendTheme(config);
