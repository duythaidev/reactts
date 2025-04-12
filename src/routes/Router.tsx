import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../components/404page";
import App from "../components/App";
import User from "../components/User";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<App />}></Route>
        <Route path="users" element={<User />} />
        <Route path="users/:items/:page" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}