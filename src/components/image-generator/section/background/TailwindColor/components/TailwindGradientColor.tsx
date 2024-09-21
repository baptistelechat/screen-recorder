import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import defaultImageGeneratorSettings from "@/lib/constant/defaultImageGeneratorSettings";
import useImageGeneratorStore from "@/lib/store/imageGenerator.store";
import { RotateCcw } from "lucide-react";
import GradientOrientationContainer from "../../components/gradient/GradientOrientationContainer";
import RandomGradient from "../../components/gradient/RandomGradient";
import TailwindColorPicker from "./TailwindColorPicker";

const TailwindGradientColor = () => {
  const via = useImageGeneratorStore((s) => s.settings.background.gradient.via);
  const setVia = useImageGeneratorStore((s) => s.setGradientVia);

  return (
    <>
      <RandomGradient variant={"tailwind"} />
      <GradientOrientationContainer />
      <Label className="text-primary/40">From</Label>
      <TailwindColorPicker action={"gradient-from"} />
      <div className="flex items-center gap-2">
        <Button
          disabled={
            via.hex ===
            defaultImageGeneratorSettings.background.gradient.via.hex
          }
          variant="outline"
          size="icon-sm"
          onClick={() => {
            setVia(defaultImageGeneratorSettings.background.gradient.via);
          }}
        >
          <RotateCcw className="size-4" />
        </Button>
        <Label className="text-primary/40">Via (Optional)</Label>
      </div>
      <TailwindColorPicker action={"gradient-via"} />
      <Label className="text-primary/40">To</Label>
      <TailwindColorPicker action={"gradient-to"} />
    </>
  );
};

export default TailwindGradientColor;
