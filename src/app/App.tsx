import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorsAndType, FormElements, Cards } from "@pages";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/toxin-hotel-react/colors-and-type" element={<ColorsAndType />}></Route>
        <Route path="/toxin-hotel-react/form-elements" element={<FormElements />}></Route>
        <Route path="/toxin-hotel-react/cards" element={<Cards />}></Route>
        <Route path="*" element={<main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
