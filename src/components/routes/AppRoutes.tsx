import routes from "../routes/routes";
import { Route as RouteType } from "../../types/route";
import { Route, Routes, useLocation } from "react-router-dom";

const AppRoutes = () => {
  const location = useLocation();
  const createRoutes = (routes: RouteType[]) => {
    return routes.map((route, key) => {
      let { path, component: Component } = route;
      return <Route path={path} key={key} element={<Component />} />;
    });
  };

  return (
    <div>
      <Routes key={location.pathname} location={location}>
        {createRoutes(routes)}
      </Routes>
    </div>
  );
};

export default AppRoutes;
