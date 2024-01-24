import Navbar from "./navbar";
import Intro from "./pages/intro";
import Career from "./pages/career";
import Contacts from "./pages/contacts";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
