import PageNotFound from "pages/messages/PageNotFound";
import Login from "pages/public/Login";
import Homescreen from "pages/public/HomeScreen";
import Others from "pages/auth/views/Others";
import Dashboard from "pages/auth/views/Dashboard";

const publicRoutes = [
  {
    component: Login,
    path: "/login",
    exact: true,
  },
  {
    component: Login,
    path: "/Register",
    exact: true,
  },
];
const protectedRoutes = [
  {
    component: Dashboard,
    path: "/dashboard",
    exact: true,
  },
  {
    component: Others,
    path: "/others",
    exact: true,
  },
];
const guestRoutes = [
  {
    component: Homescreen,
    path: "/",
    exact: true,
  },
  {
    component: PageNotFound,
    path: "*",
  },
];
export { guestRoutes, protectedRoutes, publicRoutes };