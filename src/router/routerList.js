import { routes } from "./routes";

export const routeList = [];

routes.map((item) => {
  if (item.children) {
    routeList.push({
      name: item.name,
      path: item.path,
      children: item.children.map((childItem) => {
        return {
          name: childItem.name,
          path: `${item.path}/${childItem.path}`,
        };
      }),
    });
  } else {
    routeList.push({
      name: item.name,
      path: item.path,
    });
  }
});