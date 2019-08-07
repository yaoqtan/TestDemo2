import ContactPage from "../pages/Contact";
import HomePage from "../pages/Home";

const routes = [
    {
        name: "Home",
        path: "/home",
        component: HomePage
    },
    {
        name: "Contact",
        path: "/contact",
        component: ContactPage
    }
];

export default routes;