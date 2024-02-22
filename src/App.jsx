import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage.jsx";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AuthPage />} />
        <Route exact path="/home" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
