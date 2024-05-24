import "./App.css";
import Sidebar from "./Components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import Logbook from "./Pages/Logbook";
import Reports from "./Pages/Reports";
import Dashcams from "./Pages/Dashcams";
import Reportdetails from "./Pages/Reportdetails";
import Iftatrips from "./Pages/Iftatrips";
import Iftareports from "./Pages/Iftareports";
import Vehicles from "./Pages/Vehicles";
import Vehicledetail from "./Pages/Vehicledetail";
import Drivers from "./Pages/Drivers";
import Deleteddrivers from "./Pages/Deleteddrivers";
import Devices from "./Pages/Devices";
import Trakingdevices from "./Pages/Trackingdevices";
import Trackingdevices from "./Pages/Trackingdevices";
import Userroles from "./Pages/Userroles";
import Terminals from "./Pages/Terminals";
import Sensordevices from "./Pages/Sensordevices";
import Dashcamdevices from "./Pages/Dashcamdevices";
import Companyprofile from "./Pages/Companyprofile";
import Billingdetails from "./Pages/Billingdetails";
import Apisharing from "./Pages/Apisharing";
import Alerts from "./Pages/Alerts";
import Login from "./Components/Login/Login";
import Diagnosticevents from "./Pages/Diagnosticevents";
import Trackinglinks from "./Pages/Trackinglinks";
import Forgetpassword from "./Components/Login/Forgetpassword";
import Verifyemailandphone from "./Components/Login/Verifyemailandphone";
import Verificationcode from "./Components/Login/Verificationcode";
import LogbookDetails from "./Pages/LogbookDetails";
import Location from "./Pages/Location";
import Park from "./Pages/Park";
import ParkedCar from "./Pages/ParkedCar";
import Geofences from "./Pages/Geofences";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/forgetpassword",
    element: <Forgetpassword />,
  },
  {
    path: "/Verifyemailandphone",
    element: <Verifyemailandphone />,
  },
  {
    path: "/Verificationcode",
    element: <Verificationcode />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/Dashboard", element: <Dashboard /> },
      { path: "/Logbook", element: <Logbook /> },
      { path: "/Logbook/:id", element: <LogbookDetails /> },
      { path: "/location", element: <Location /> },
      { path: "/park", element: <Park /> },
      { path: "/parked", element: <ParkedCar /> },
      { path: "/Trackinglinks", element: <Trackinglinks /> },
      { path: "/Geofences", element: <Geofences /> },
      { path: "/Reports", element: <Reports /> },
      { path: "/Reportdetails", element: <Reportdetails /> },
      { path: "/Dashcams", element: <Dashcams /> },
      { path: "/Iftatrips", element: <Iftatrips /> },
      { path: "/Iftareports", element: <Iftareports /> },
      { path: "/Vehicles", element: <Vehicles /> },
      { path: "/Vehicledetail", element: <Vehicledetail /> },
      { path: "/Drivers", element: <Drivers /> },
      { path: "/Deleteddrivers", element: <Deleteddrivers /> },
      { path: "/Devices", element: <Devices /> },
      { path: "/Userroles", element: <Userroles /> },
      { path: "/Trackingdevices", element: <Trackingdevices /> },
      { path: "/Sensordevices", element: <Sensordevices /> },
      { path: "/Dashcamdevices", element: <Dashcamdevices /> },
      { path: "/Terminals", element: <Terminals /> },
      { path: "/Alerts", element: <Alerts /> },
      { path: "/Companyprofile", element: <Companyprofile /> },
      { path: "/Billingdetails", element: <Billingdetails /> },
      { path: "/Apisharing", element: <Apisharing /> },
      { path: "/Diagnosticevents", element: <Diagnosticevents /> },
    
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
