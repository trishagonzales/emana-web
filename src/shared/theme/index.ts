import { ThemeOverride, extendTheme } from "@chakra-ui/react";
import { colors, semanticColors } from "./colors";
import { borderWidths, borderRadius, sizes, space } from "./foundations";
import {
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  textStyles,
} from "./typography";
import { layerStyles } from "./layer-styles";

const config: ThemeOverride = {
  colors: {
    ...colors,
    ...semanticColors,
  },
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  borders: borderWidths,
  radii: borderRadius,
  sizes,
  space,
  textStyles,
  layerStyles,

  components: {
    Container: {
      baseStyle: {
        maxWidth: sizes["max-width"],
      },
    },
  },

  styles: {
    global: {
      "html, body": {
        ...textStyles.body,
        textColor: semanticColors["fg-default"],
        // bg: "bg-default",
        bg: semanticColors["bg-subtle"],
      },
      "*": {
        borderRadius: borderRadius.DEFAULT,
      },
    },
  },
};

export const theme = extendTheme(config);
