import GymDetail from "../components/pages/Gyms/GymDetail";
import Gyms from "../components/pages/Gyms/Gyms";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Signup";
import Trainers from "../components/pages/Trainers/Trainers";

export const routes = {
    publicRoutes: [
        { path: '/', component: Home },
        { path: '/home', component: Home },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/gyms', component: Gyms },
        { path: '/trainers', component: Trainers },
        { path: '/gyms/:id', component: GymDetail },
    ]
}