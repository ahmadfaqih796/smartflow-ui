import { menuRouter } from "./menuRouter";

const flattenRoutes = (routes: any) => {
  return routes.reduce((acc: any, route?: any) => {
    if (route.children) {
      acc.push(route);
      return acc.concat(flattenRoutes(route.children));
    }
    acc.push(route);
    return acc;
  }, []);
};

const flattenedRoutes = flattenRoutes(menuRouter);

export const routeConfig = (routePath: any) => {
  const route = flattenedRoutes.find((route: any) => routePath === route.path);
  if (route) {
    const allowedRoles = route.role || [];
    const requiredDivision = route.division || [];
    if (route.children) {
      const childRoute = route.children.find(
        (child: any) => routePath === child.path
      );
      if (childRoute) {
        return {
          allowedRoles: childRoute.role || allowedRoles,
          requiredDivision: childRoute.division || requiredDivision,
        };
      }
    }
    return { allowedRoles, requiredDivision };
  }
  return { allowedRoles: null, requiredDivision: null };
};
