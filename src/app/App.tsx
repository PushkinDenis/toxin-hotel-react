import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorsAndType, FormElements } from "@pages";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/toxin-hotel-react/colors-and-type" element={<ColorsAndType />}></Route>
        <Route path="/toxin-hotel-react/form-elments" element={<FormElements />}></Route>
        <Route path="*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
};