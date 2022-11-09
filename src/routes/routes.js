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
import EditGym from "../components/Admin/pages/Gyms/EditGym";
import ListUser from "../components/Admin/pages/User/ListUser";
import ListTrainer from "../components/Admin/pages/Trainer/ListTrainer";
import ListCombo from "../components/Admin/pages/Combo/ListCombo";
import EditCombo from "../components/Admin/pages/Combo/EditCombo";
import CreateCombo from "../components/Admin/pages/Combo/CreateCombo";
import GetCode from "../components/pages/InfoSign/GetCode";
import FillCode from "../components/pages/InfoSign/FillCode";

export const routes = {
  publicRoutes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/forgotPass", component: ForgotPass },
    { path: "/getCode", component: GetCode },
    { path: "/fillCode", component: FillCode },
    { path: "/gyms", component: Gyms },
    { path: "/trainers", component: Trainers },
    { path: "/gyms/:id", component: GymDetail },
    { path: "/trainers/:id", component: TrainerDetail },
    { path: "/userInfo", component: UserInfo },
    { path: "/admin", component: Dashboard },
    { path: "/admin/listGym", component: ListGym },
    { path: "/admin/createGym", component: CreateGym },
    { path: "/admin/editGym", component: EditGym },
    { path: "/admin/listUser", component: ListUser },
    { path: "/admin/listTrainer", component: ListTrainer },
    { path: "/admin/listCombo", component: ListCombo },
    { path: "/admin/createCombo", component: CreateCombo },
    { path: "/admin/editCombo", component: EditCombo },
  ],
};
