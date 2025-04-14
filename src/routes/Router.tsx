import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../components/404page";
import App from "../components/App";
import User from "../components/User";
import PrivateRoute from "./PrivateRoute";
import {UserContextProvider} from "../components/UserContext";
export default function Router() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<App />}></Route>
          <Route path="users" element={<User />} />
          <Route path="users/:items/:page" element={<PrivateRoute children={<User />}></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}