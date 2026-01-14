import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/sign_up";
import SignInPage from "./pages/login";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/sign-up" element={<SignUpPage />} />
          <Route path="/auth/sign-in" element={<SignInPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
