import { routes } from "../utils/routes";
import { lazy } from "react";
import laodable from "../components/common/Loadable";
import MainLayout from "../layouts/mainLayout";



//routes
const UploadCSV = laodable(lazy(() => import("views/upladCsv")));
const ExampleForm = laodable(lazy(() => import("views/exampleForm")));
//const ExampleTable = laodable(lazy(() => import("views/exampleTable")));
const Login = laodable(lazy(() => import("../views/Login/Login")));
const Dashboard = laodable(lazy(() => import("../views/Home/Dashboard")));

const mainRoutes = () => {
	return {
		path: routes.home,
		element: <MainLayout />,
		children: [
			//{ path: routes.home, element: <UploadCSV /> },
			{path:routes.home, element:<Login/>},
			{ path: routes.exampleForm, element: <ExampleForm /> },
			{ path: routes.dashBoard, element: <Dashboard /> },
		],
	};
};

export default mainRoutes;
