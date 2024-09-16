import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";
import Detail from "../components/Detail";

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
    path: "/blog/:id",
    element: (
      <>
        <Navbar />
        <Detail />
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
  { path: "/home", element: <Navigate to="/" /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
