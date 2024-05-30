import Navbar from "./components/Navbar"
import BottomNavbar from "./components/BottomNav"
import Home  from "./components/Home";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";

import {createBrowserRouter,RouterProvider,Link,Outlet,useLoaderData,useNavigation,Router} from "react-router-dom";
 
const AppLayout = () => (
  <div className="App">
    <Navbar /> {/* Fixed position top navigation */}
    <div className="App-content">
      <Outlet /> {/* This is where the routed components will be rendered */}
    </div>
    <BottomNavbar /> {/* Fixed position bottom navigation */}
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <><AppLayout/></>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/signin', element: <SigninForm/> },
      { path: '/signup', element: <SignupForm/> },
    ],
  },
]);
 
 



function App() {

  return (
    
    
    <>
    
    <RouterProvider router={router}/>
    
    
    </>
    
  )
}

export default App;
