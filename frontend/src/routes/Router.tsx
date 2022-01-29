import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inbox } from "../components/Inbox";
import { Sent } from "../components/Sent";
import { Spam } from "../components/Spam";
import { Starred } from "../components/Starred";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { MailDetail } from "./../components/Mail/MailDetail";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Inbox />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="sent" element={<Sent />} />
            <Route path="starred" element={<Starred />} />
            <Route path="spam" element={<Spam />} />
            <Route path=":routeName/:mailId" element={<MailDetail />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
