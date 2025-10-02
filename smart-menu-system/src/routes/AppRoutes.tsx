import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import Dashboard from '../pages/dashboard/Dashboard';
import { useAuth } from '../context/authContext';
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
