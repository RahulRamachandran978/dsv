import { routes } from "../utils/routes";
import { lazy } from "react";
import laodable from "../components/common/Loadable";
import MainLayout from "../layouts/mainLayout";



//routes
const UploadCSV = laodable(lazy(() => import("views/upladCsv")));
const ExampleForm = laodable(lazy(() => import("views/exampleForm")));
//const ExampleTable = laodable(lazy(() => import("views/exampleTable")));
const DashboardLayout = laodable(lazy(() => import("../layouts/DashboardLayout/DashboardLayout")));
const Login = laodable(lazy(() => import("../views/Login/Login")));
const DashboardHome = laodable(lazy(() => import("../views/Home/DashboardHome")));
const Speakers = laodable(lazy(() => import("../views/Home/Speakers")));
const SpeakerDetail = laodable(lazy(() => import("../views/Home/SpeakerDetails")));
const EarBuds = laodable(lazy(() => import("../views/Home/EarBuds")));
const HeadPhones = laodable(lazy(() => import("../views/Home/HeadPhones")));
const HeadphoneDetail = laodable(lazy(() => import("../views/Home/HeadphoneDetail")));
const EarbudDetail = laodable(lazy(() => import("../views/Home/EarbudDetail")));
const AddUser  = laodable(lazy(() => import("../views/AddUser")));
const Cart = laodable(lazy(() => import("../views/Home/Cart")));

const mainRoutes = () => {
	return [
		{
      path: "/",
      element: <Login />,
    },
	{
			path: "dashboard",
			element: <DashboardLayout />,
			children: [
			{ index: true, element: <DashboardHome /> },
			{ path: "speakers", element: <Speakers /> },
			{ path: "speakers/:id", element: <SpeakerDetail /> },
			{ path: "headphones", element: <HeadPhones /> },			
			{ path: "headphones/:id", element: <HeadphoneDetail /> },
			{ path: "earbuds", element: <EarBuds /> },
			{ path: "earbuds/:id", element: <EarbudDetail /> },
			{ path: "add-user", element: <AddUser /> },
			{ path: "cart", element: <Cart /> }
			],
		},
	];
};

export default mainRoutes;
