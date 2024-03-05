import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Auth from "../pages/Auth";
import Add from "../pages/Add";
import AppProvider from "../providers/AppProvider";
import View from "../pages/View";

const Router = () => {
  const authRoute = "/signup";
  const addRoute = "/purchases/bills";
  const viewRoute = "/analytics/view";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          path: addRoute,
          element: <Add />,
        },
        {
          path: viewRoute,
          element: <View />,
        },
      ],
    },
    {
      path: authRoute,
      element: <Auth />,
    },
    {
      path:"*",
      element: <div className="w-full h-screen flex justify-center items-center text-red-500">
        Page Not Found (404 error).
      </div>,
    },
  ]);
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default Router;
