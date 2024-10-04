import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { AboutUs } from "./views/AboutUs";
import { DislikedListing } from "./views/DislikedListing";
import { LikedListing } from "./views/LikedListing";
import { Login } from "./views/Login";
import { MainListing } from "./views/MainListing";

const App: React.FC = () => {
  const username = localStorage.getItem("username");

  return (
    <Router>
      <Routes>
        {!username ? (
          <Route path="*" element={<Navigate to="/login" />} />
        ) : (
          <>
            <Route path="/" element={<MainListing />} />
            <Route path="/liked-listing" element={<LikedListing />} />
            <Route path="/disliked-listing" element={<DislikedListing />} />
            <Route path="/about-us" element={<AboutUs />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
