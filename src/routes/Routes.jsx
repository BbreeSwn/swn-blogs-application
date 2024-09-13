import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Navbar from "../components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  { path: "/about", element: (<><Navbar /><About /></>) },
  { path: "/blogs", element: (<><Navbar /><Blogs /></>) },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
