import { FC, useState } from "react";
import styles from "./slider.module.scss";
import { Slider as SliderMui, StyledEngineProvider } from "@mui/material";

type SliderProps = {
  label: string;
};

export const Slider: FC<SliderProps> = ({ label }) => {
  const [value, setValue] = useState<number[]>([0, 10000]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <>
      <StyledEngineProvider injectFirst>
        <div className={styles.wrapper}>
          <label className={styles.label}>
            <div className={styles.label_text}>{label}</div>
            <div className={styles.values}>{`${value[0]}₽ - ${value[1]}₽`}</div>
          </label>
          <SliderMui className={styles.slider} max={15000} min={0} step={1000} value={value} onChange={handleChange} disableSwap />
        </div>
      </StyledEngineProvider>
    </>
  );
};
