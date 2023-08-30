import { semanticColors } from "./colors";
import { borderRadius, borderWidths } from "./foundations";

const boxLayerStyles = {
  "box-disabled": {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: semanticColors["bg-disabled"],
    bg: semanticColors["bg-disabled"],
    color: semanticColors["fg-disabled"],
  },
  "box-muted": {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: semanticColors["bg-subtle"],
    bg: semanticColors["bg-default"],
    color: semanticColors["fg-muted"],
  },
  "box-emphasized": {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: semanticColors["bg-emphasized"],
    bg: semanticColors["bg-subtle"],
    color: semanticColors["fg-emphasized"],
  },
  "box-selected": {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: semanticColors["accent-muted"],
    bg: semanticColors["bg-subtle"],
    color: semanticColors["accent-default"],
  },
  "box-solid": {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: semanticColors["accent-muted"],
    bg: semanticColors["accent-muted"],
    color: semanticColors["accent-fg"],
  },
  "box-solid-emphasized": {
    border: borderWidths.DEFAULT,
    borderRadius: borderRadius.DEFAULT,
    borderColor: semanticColors["accent-emphasized"],
    bg: semanticColors["accent-emphasized"],
    color: semanticColors["accent-fg"],
  },
};

export const layerStyles = {
  "text-accent": {
    color: semanticColors["accent-default"],
  },
  ...boxLayerStyles,
};
