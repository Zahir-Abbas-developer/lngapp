import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";


import Login from "./components/Authentication/Login";
import NotFound from "./components/Authentication/NotFound";
import SignUp from "./components/Authentication/SignUp";
import Unathorized from "./components/Authentication/Unathorized";
import ResetPassword from "./components/Authentication/ResetPassword";
import RequireAuth from "./components/Authentication/RequireAuth";
import LoadingSvg from "../src/assets/Login/loader-icon.gif";
import { ROLES } from "./constants/Roles";
import path from "path";
import AddStyles from "./components/Admin/AddStyles/AddStyles";
import OurCollectionTabDetails from "./components/ClientTabs/OurCollectionTabDetails/OurCollectionTabDetails";
import OurCustomOrderDetails from "./components/ClientTabs/CustomOrderTabDetails/CustomOrderTabDetails";
import DashboardLayout from "./layout/Header/dashboard.layout";
import { ConfirmationCode } from "./components/Otp/otp";


const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
  (
    <Suspense
      fallback={
        <div
          className="d-flex justify-center align-center"
          style={{ height: "80vh" }}
        >
          <img src={LoadingSvg} height={200} width={200} alt="LoadingSvg" /> 
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );


const DashboardPage = Loadable(lazy(() => import("./pages/Dashboard")));
const JacketDetailsPage = Loadable(lazy(() => import("./pages/JacketDetails")));
const OtpPage=Loadable(lazy(()=>import("./pages/Otp")))

const CylinderOrders = Loadable(lazy(() => import("./pages/CylinderOrders")));
const ProductDetailsPage = Loadable(
  lazy(() => import("./pages/ProductDetails"))
);
const BillingDetailsPage = Loadable(
  lazy(() => import("./pages/BillingDetails"))
);
const ConfirmationPage =Loadable(lazy(()=>import("./pages/ConfirmationPage")))

//Cart Details
const CartDetailsPage=Loadable(
  lazy(() => import("./pages/CartDetails"))
);
//UserVerification page
const UserVerficationPage=Loadable(
  lazy(() => import("./pages/UserVerification"))
);

const StaffAllocationPage = Loadable(
  lazy(() => import("./pages/StaffAllocation"))
);


const AddProductsPage = Loadable(
  lazy(() => import("./pages/AddProducts"))
);
const AddCategoriesPage = Loadable(
  lazy(() => import("./pages/AddCategories"))
);
const AddColorsPage = Loadable(
  lazy(() => import("./pages/AddColors"))
);
const UsersData = Loadable(
  lazy(() => import("./pages/AddStyles"))
);
const AddOrdersPage = Loadable(
  lazy(() => import("./pages/AddOrders"))
);

// Reports and its Child Routes Ends Here

const SettingsPage = Loadable(lazy(() => import("./pages/Settings")));



const KeyInfo = Loadable(lazy(() => import("./pages/Settings/KeyInfo")));
const JobRole = Loadable(lazy(() => import("./pages/Settings/JobRole")));
const ShiftTimeSettings = Loadable(
  lazy(() => import("./pages/Settings/ShiftTimeSettings"))
);
const Services=Loadable(
  lazy(() => import("./components/ClientTabs/Services/Services"))
);
const StaffSettings = Loadable(
  lazy(() => import("./pages/Settings/StaffSettings"))
);
const BankHolidays = Loadable(
  lazy(() => import("./pages/Settings/BankHolidays"))
);
const DBSConfiguration = Loadable(
  lazy(() => import("./pages/Settings/DBSConfiguration"))
);
const EmailNotification = Loadable(
  lazy(() => import("./pages/Settings/EmailNotification"))
);
const ResetEmailPhone = Loadable(
  lazy(() => import("./pages/Settings/ResetEmailPhone"))
);
const WeekStartDay = Loadable(
  lazy(() => import("./pages/Settings/WeekStartDay"))
);
const ClientTermsCondition = Loadable(lazy(() => import("./pages/Settings/ClientTermsConditionPage")));
const FestivalDayGreeting = Loadable(
  lazy(() => import("./pages/Settings/FestivalDayGreeting"))
);
const BreakTime = Loadable(lazy(() => import("./pages/Settings/BreakTime")));
const ChangePassword = Loadable(
  lazy(() => import("./pages/Settings/ChangePassword"))
);
const ElectronicAttendanceMonitoring = Loadable(
  lazy(() => import("./pages/Settings/ElectronicAttendanceMonitoring"))
);

const ContactDetailsPage=Loadable((lazy(()=>import("./pages/ContactDetails"))))

export const routes: any = [
  { path: "/", element: <Navigate to="services" /> },
  
  {
    path: "login",
    element: <Login />,
  },
  {path:"forget-password", element: <Login />,
},
  {
    path: "change-password",
    element: <Login />,
  },
  {
    path:"user-verification",
    element:<UserVerficationPage/>
  },
  {
    path: "reset-password",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <Login />,
  },
  {
    path: "unauthorized",
    element: <Unathorized />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
  {
    path:"confirmation-signup",
    element:<ConfirmationPage/>
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "services",
        element: (
         
            <Services />
         
        ),
      },
      {
        path: "orders",
        element: (
          // <RequireAuth allowedRoles={[ROLES.admin || "admin"]}>
            <CylinderOrders />
          // </RequireAuth>
        ),
      },
      {
        path: "admin-dashboard",
        element: (
          <RequireAuth allowedRoles={[ROLES.admin || "admin"]}>
            <StaffAllocationPage />
            </RequireAuth>
        ),
      },
      {
        path: "otp-verification",
        element: (
          
            <OtpPage />
        
        ),
      },
      
      {
        path: "dashboard",
        element: (
          // <RequireAuth allowedRoles={[ROLES.user]}>
            <DashboardPage />
          //  </RequireAuth>
        ),
      },
      {
        path:"contact-details",
        element:<ContactDetailsPage/>
      },
      {
        path:"productDetails",
        element:<ProductDetailsPage/>
      },
      {
   
        path:"/productDetails/cart-details/checkout-details",
            
        element:(  <RequireAuth allowedRoles={[ROLES.user]}><BillingDetailsPage/>
         </RequireAuth>)
      },
      {
        path:"/add-products",
        element:  <RequireAuth allowedRoles={[ROLES.admin || "admin"]}> <AddProductsPage/></RequireAuth>
      },
      // {
      //   path:"/otp",
      //   element:  <ConfirmationCode/>
      // },
      {
        path:"/jacket-details",
        element:(<JacketDetailsPage/>)
      },
      {
        path:"/add-categories",
        element:( <RequireAuth allowedRoles={[ROLES.admin || "admin"]}><AddCategoriesPage/></RequireAuth> )
      },
      {
        path:"/add-orders",
        element:(<RequireAuth allowedRoles={[ROLES.admin || "admin"]}><AddOrdersPage/></RequireAuth> )
      },
      {
        path:"/users-list",
        element:(<RequireAuth allowedRoles={[ROLES.admin || "admin"]}><UsersData/></RequireAuth> )
      },
      {
        path:"/add-styles",
        element:(<RequireAuth allowedRoles={[ROLES.admin || "admin"]}><AddStyles/></RequireAuth> )
      },
     
     
      {
        path:"productDetails/cart-details",
        element:<CartDetailsPage/>
      },
      

      {
        path: "shoes-products",
        element: (
          <RequireAuth allowedRoles={[ROLES.user]}>
          
            <OurCollectionTabDetails/>
          </RequireAuth>
        ),
      },
     
    
      
   
     
      {
        path: "",
        children: [
          {
            path: "settings",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.admin, ROLES.coordinator, ROLES.client]}
              >
                <SettingsPage />
              </RequireAuth>
            ),
          },
          {
            path: "settings/Key-info",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.admin,ROLES.client]}
              >
                <KeyInfo />
              </RequireAuth>
            ),
          },
          {
            path: "settings/job-role",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.admin, ROLES.coordinator, ROLES.client]}
              >
                <JobRole />
              </RequireAuth>
            ),
          },
          {
            path: "settings/shift-time-settings",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.admin,ROLES.client]}
              >
                <ShiftTimeSettings />
              </RequireAuth>
            ),
          },
          {
            path: "settings/staff-settings",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.admin,ROLES.client]}
              >
                <StaffSettings />
              </RequireAuth>
            ),
          },
          {
            path: "settings/bank-holidays",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.admin,ROLES.client]}
              >
                <BankHolidays />
              </RequireAuth>
            ),
          },
          {
            path: "settings/dbs-configuration",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.admin]}
              >
                <DBSConfiguration />
              </RequireAuth>
            ),
          },
          {
            path: "settings/email-notification",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.admin]}
              >
                <EmailNotification />
              </RequireAuth>
            ),
          },
          {
            path: "settings/set-email-Phone",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.admin,ROLES.client]}
              >
                <ResetEmailPhone />
              </RequireAuth>
            ),
          },
          {
            path: "settings/week-start-day",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.admin, ROLES.coordinator, ROLES.client]}
              >
                <WeekStartDay />
              </RequireAuth>
            ),
          },
          {
            path: "settings/festival-day-greeting",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.admin,ROLES.client]}
              >
                <FestivalDayGreeting />
              </RequireAuth>
            ),
          },
          {
            path: "settings/client-terms-condition",
            element: (
              <RequireAuth allowedRoles={[ROLES.admin, ROLES.coordinator]}>
                <ClientTermsCondition />
              </RequireAuth>
            ),
          },
        
          {
            path: "settings/break-time-settings",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.admin, ROLES.coordinator, ROLES.client]}
              >
                <BreakTime />
              </RequireAuth>
            ),
          },
          {
            path: "settings/change-password",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.coordinator]}
              >
                <ChangePassword />
              </RequireAuth>
            ),
          },
          {
            path: "settings/electronic-attendance-monitoring",
            element: (
              <RequireAuth
                allowedRoles={[ROLES.client]}
              >
                <ElectronicAttendanceMonitoring />
              </RequireAuth>
            ),
          },
        ],
      },
     
      //client
      {
        path: "",
        children: [
          {
            path: "client-booking-calendar",
            element: (
              <RequireAuth allowedRoles={[ROLES.user]}>
                 <OurCustomOrderDetails /> 
              </RequireAuth>
            ),
          },
          
        ],
      },
     
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
];
