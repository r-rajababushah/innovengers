import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Innovengers from "./Innovengers/Innovengers";
import Navigation from "./Innovengers/Navigation";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Innovengers />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}