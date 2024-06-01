import { FC } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ColorsAndType, FormElements } from "@pages";

export const App: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/toxin-hotel-react/colors-and-type" element={<ColorsAndType />}></Route>
        <Route path="/toxin-hotel-react/form-elements" element={<FormElements />}></Route>
        <Route path="*" element={<main />}></Route>
      </Routes>
    </HashRouter>
  );
};
