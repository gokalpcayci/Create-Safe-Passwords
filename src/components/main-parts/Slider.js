import React from "react";
import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import * as SliderPrimitive from "@radix-ui/react-slider";
const StyledSlider = styled(SliderPrimitive.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  // width: 100,

  '&[data-orientation="horizontal"]': {
    height: 20,
  },

  '&[data-orientation="vertical"]': {
    flexDirection: "column",
    width: 20,
    height: 100,
  },
});

const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: blackA.blackA9,
  position: "relative",
  flexGrow: 1,
  // borderRadius: "9999px",
  '&[data-orientation="horizontal"]': { height: 8 },
  '&[data-orientation="vertical"]': { width: 3 },
});

const StyledRange = styled(SliderPrimitive.Range, {
  position: "absolute",
  backgroundColor: "hsl(127, 100%, 82%)",
  // borderRadius: "9999px",
  height: "100%",
});

const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: "unset",
  display: "block",
  cursor: "pointer",
  width: 20,
  height: 20,
  backgroundColor: "white",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  borderRadius: 100,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:active": {
    // boxShadow: `0 0 0 5px ${blackA.blackA8}`,
    border: `2px solid hsl(127, 100%, 82%)`,
    backgroundColor: "hsl(248, 10%, 15%)",
  },
});

export default function Slider({ value, handleValueChange }) {
  return (
    <StyledSlider
      className="w-full "
      defaultValue={[0]}
      min={0}
      max={20}
      width={"100%"}
      step={1}
      onValueChange={handleValueChange}
      value={value}
      aria-label="Volume"
    >
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb />
    </StyledSlider>
  );
}
