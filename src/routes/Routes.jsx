import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Home from "../components/Home";
import About from "../components/About";
import Blogs from "../components/Blogs";


const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/about", element: <About/>},
  {path: "/blogs", element: <Blogs/>},
])

export default function Router() {
return <RouterProvider router={router} />;

}
