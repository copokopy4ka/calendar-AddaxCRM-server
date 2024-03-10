import { FC } from 'react';
import { ColorResult, SketchPicker } from 'react-color';

interface ColorPickerProps {
  color: string;
  handleSelectedColor: (color: string) => void;
}

export const ColorPicker: FC<ColorPickerProps> = ({ color, handleSelectedColor }) => {
  const handleChangeComplete = (color: ColorResult) => {
    handleSelectedColor(color.hex);
  };
  return <SketchPicker color={color} onChangeComplete={handleChangeComplete} />;
};
