import { useRoutes } from "react-router-dom";
import mainRoutes from "./mainRoutes";

const AppRoutes = () => {
  const routes = useRoutes(mainRoutes());
  return routes;
};

export default AppRoutes;