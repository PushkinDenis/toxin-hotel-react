import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorsAndType, FormElements, Cards, HeadersAndFooters, LandingPage, SearchRoom, RoomDetails, Registration, SignIn } from "@pages";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/toxin-hotel-react/colors-and-type" element={<ColorsAndType />}></Route>
        <Route path="/toxin-hotel-react/form-elements" element={<FormElements />}></Route>
        <Route path="/toxin-hotel-react/cards" element={<Cards />}></Route>
        <Route path="/toxin-hotel-react/headers-and-footers" element={<HeadersAndFooters />}></Route>
        <Route path="/toxin-hotel-react/landing-page" element={<LandingPage />}></Route>
        <Route path="/toxin-hotel-react/landing-page-dates" element={<LandingPage defaultDate={new Date(2019, 7)} defaultValue={[new Date(2019, 7, 19), new Date(2019, 7, 23)]} />}></Route>
        <Route path="/toxin-hotel-react/landing-page-dropdown" element={<LandingPage defaultValue={[new Date(2019, 7, 19), new Date(2019, 7, 23)]} isDropdownActive={true} dropdownValues={[2, 1, 0]} />}></Route>
        <Route path="/toxin-hotel-react/search-room" element={<SearchRoom />}></Route>
        <Route path="/toxin-hotel-react/search-room-dropdown" element={<SearchRoom isDropdownActive={true} />}></Route>
        <Route path="/toxin-hotel-react/search-room-checkbox" element={<SearchRoom isCheckboxListActive={true} />}></Route>
        <Route path="/toxin-hotel-react/room-details" element={<RoomDetails />}></Route>
        <Route path="/toxin-hotel-react/registration" element={<Registration />}></Route>
        <Route path="/toxin-hotel-react/sign-in" element={<SignIn />}></Route>
        <Route path="*" element={<main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
