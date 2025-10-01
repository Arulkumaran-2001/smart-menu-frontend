import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login.tsx";
import Signup from "../pages/auth/Signup.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";
import { useAuth } from "../context/authContext.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected route will be added later */}
        <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute roles={["superAdmin", "admin", "manager"]}>
            <Dashboard />
          </ProtectedRoute>
        }
         />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
