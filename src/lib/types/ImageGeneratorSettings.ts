import {
  LinearGradientOrientation,
  RadialGradientOrientation,
} from "./gradientOrientation";

type ImageGeneratorSettings = {
  text: string;
  dimension: {
    width: number;
    height: number;
  };
  image: {
    src: string | null;
    borderRadius: number;
    shadow: number;
    scale: number;
    visibility: boolean;
  };
  background: {
    backgroundMode: "solid" | "gradient";
    backgroundColor: string;
    tailwindColor: string;
    gradient: {
      useVia: boolean;
      orientation: LinearGradientOrientation | RadialGradientOrientation;
      from: {
        name: string;
        hex: string;
      };
      via: {
        name: string;
        hex: string;
      };
      to: {
        name: string;
        hex: string;
      };
    };
  };
};

export default ImageGeneratorSettings;
