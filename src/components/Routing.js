import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
/*import About from "./pages/About";
import Reservation from "./pages/BookingPage";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";*/

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />

        </Routes>
    );
}
