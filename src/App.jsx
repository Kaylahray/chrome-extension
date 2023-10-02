import { Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import Singlevideo from "./pages/singlevideo";
import VideoFileSent from "./pages/FileSent";
import HomePage from "./pages/homePage";
import LandingPage from "./pages/landingPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/file" element={<VideoFileSent />} />
        <Route path="/video" element={<Singlevideo />} />
      </Routes>
    </>
  );
};

export default App;
