import GymDetail from "../components/pages/Gyms/GymDetail";
import Gyms from "../components/pages/Gyms/Gyms";
import Home from "../components/pages/Home";
import Login from "../components/pages/InfoSign/Login";
import Register from "../components/pages/InfoSign/Signup";
import Trainers from "../components/pages/Trainers/Trainers";
import TrainerDetail from "../components/pages/Trainers/TrainerDetail";
import Dashboard from "../components/Admin/pages/Dashboard";
import ForgotPass from "../components/pages/InfoSign/ForgotPass";
import UserInfo from "../components/pages/User/UserInfo";
import ListGym from "../components/Admin/pages/Gyms/ListGym";
import CreateGym from "../components/Admin/pages/Gyms/CreateGym";

export const routes = {
  publicRoutes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/forgotPass", component: ForgotPass },
    { path: "/gyms", component: Gyms },
    { path: "/trainers", component: Trainers },
    { path: "/gyms/:id", component: GymDetail },
    { path: "/trainers/:id", component: TrainerDetail },
    { path: "/userInfo", component: UserInfo },
    { path: "/admin", component: Dashboard },
    { path: "/admin/listGym", component: ListGym },
    { path: "/admin/createGym", component: CreateGym },
  ],
};
