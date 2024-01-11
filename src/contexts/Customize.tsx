import { createContext, useState } from 'react';
import { chairColors, cushionColors } from '../assets/colors';

interface CustomizeProvider {
  children: React.ReactNode;
}

interface Color {
  color: string | null;
  name: string | null;
}

interface CustomizeProps {
  material: string | null;
  setMaterial: React.Dispatch<React.SetStateAction<string | null>>;

  legs: number | null;
  setLegs: React.Dispatch<React.SetStateAction<number | null>>;

  // chairColor: string | null;
  chairColor: Color;
  setChairColor: React.Dispatch<React.SetStateAction<Color>>;

  cushionColor: Color;
  setCushionColor: React.Dispatch<React.SetStateAction<Color>>;
}

const customContextState = {
  material: null,
  setMaterial: () => {},

  legs: null,
  setLegs: () => {},

  chairColor: { color: null, name: null },
  setChairColor: () => {},

  cushionColor: { color: null, name: null },
  setCushionColor: () => {},
};

export const CustomizeContext =
  createContext<CustomizeProps>(customContextState);

export const CustomizeProvider: React.FC<CustomizeProvider> = ({
  children,
}) => {
  const [material, setMaterial] = useState<string | null>('leather');
  const [legs, setLegs] = useState<number | null>(1);
  const [chairColor, setChairColor] = useState<Color>(chairColors[0]);
  const [cushionColor, setCushionColor] = useState<Color>(cushionColors[0]);
  return (
    <CustomizeContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColor,
        setChairColor,
        cushionColor,
        setCushionColor,
      }}
    >
      {children}
    </CustomizeContext.Provider>
  );
};
