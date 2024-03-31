import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Loggin from "./Loggin";


const Body = () => {

const appRouer = createBrowserRouter([
    {
        path:"/",
        element: <Loggin />
    },
    {
        path:"/browse",
        element: <Browse />
    }
])

    return (
        <div>
            <RouterProvider router={appRouer}>

            </RouterProvider>
            
        </div>
    )
}

export default Body;