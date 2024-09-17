import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmergencyNumber from "./EmergencyNumber/EmergencyNumber";
import Hotels from "./Hotels/Hotels";
import Innovengers from "./Innovengers/Innovengers";
import Navigation from "./Innovengers/Navigation";
import Places from "./Places/Places";
import Resturants from "./Resturants/Resturants";
import Search from "./Search/Search";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Innovengers />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/resturants" element={<Resturants />} />
                    <Route path="/underratedplaces" element={<Places />} />
                    <Route path="/emergencynumber" element={<EmergencyNumber />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}