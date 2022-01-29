import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inbox } from "../components/Inbox";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />}>
            <Route path="inbox" element={<Inbox />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
