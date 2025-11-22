import { Routes, Route } from "react-router-dom";
import { Login } from "./components/ui/auth/login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
    </Routes>
  );
}

export default App;
