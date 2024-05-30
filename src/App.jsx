import Navbar from "./components/Navbar"
import BottomNavbar from "./components/BottomNav"
import Home  from "./components/Home";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import UserProfile from "./components/Profile";
import ErrorElement from './components/ErrorElement';

import {createBrowserRouter,RouterProvider,Link,Outlet,useLoaderData,useNavigation,Router} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

 
const AppLayout = () => (
  <ErrorBoundary>
  <div className="App">
    <Navbar /> {/* Fixed position top navigation */}
    <div className="App-content">
      <Outlet /> {/* This is where the routed components will be rendered */}
    </div>
    <BottomNavbar /> {/* Fixed position bottom navigation */}
  </div></ErrorBoundary>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <><AppLayout/></>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/signin', element: <SigninForm/> },
      { path: '/signup', element: <SignupForm/> },
      { path: '/profile', element: <UserProfile/> },
      { path: '*', element: <ErrorElement /> },
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
