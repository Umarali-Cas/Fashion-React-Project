import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { ROUTER_PATHS } from "./routesPath";
import { Main } from "../Main";
import { Shop } from "./Shop";
import { ShopMain } from "./ShopMain";
import { Cart } from "./Cart";
import { Timer } from "./Timer";
import { ToDoList } from "../redux/ToDoList/ToDoList";



export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: ROUTER_PATHS.main,
          element: <Main />,
        },
        {
          path: ROUTER_PATHS.shopScreen,
          element: <Shop/>,
        },
        {
          path: ROUTER_PATHS.shop,
          element: <ShopMain />,
        },
        {
          path: ROUTER_PATHS.lookbook,
          element: <h1>LOOKBOOK</h1>,
        },
        {
          path: ROUTER_PATHS.features,
          element: <ToDoList />,
        },
        {
          path: ROUTER_PATHS.pages,
          element: <h1>PAGES</h1>,
        },
        {
          path: ROUTER_PATHS.blog,
          element: <h1>BLOG</h1>,
        },
        {
          path: ROUTER_PATHS.cart,
          element: <Cart />,
        },
        {
          path: ROUTER_PATHS.faqTimer,
          element: <Timer />,
        },
        {
          path: ROUTER_PATHS.invalid,
          element: <h1>Такой страницы не существует</h1>,
        },
      ],
    },
  ]);
  