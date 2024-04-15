import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Reservation from "./pages/BookingPage";
import Confirmation from "./pages/Confirmation";

/*import About from "./pages/About";
import Order from "./pages/Order";
import Login from "./pages/Login";
*/

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    );
}
