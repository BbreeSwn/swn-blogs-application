import { RouterProvider, createBrowserRouter,Navigate } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";

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
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/blogs",
    element: (
      <>
        <Navbar />
        <Blogs />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <NotFound />
      </>
    ),
  },
  {path:"/home",element:(<Navigate to="/" />)}
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
