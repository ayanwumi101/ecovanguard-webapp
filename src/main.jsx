import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import withLazyComponent from "./components/lazyLoadHoc/index";
import Page404 from "./pages/404/page404";
import Gallery from "./pages/Gallery/gallery";
import Calendar from "./pages/calendar/";
// import Admin from "./pages/admin";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/AboutPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/contact/";
import Location from "./pages/location/index";
import Donate from "./pages/Donate/Donate";
// import AdminPartner from "./pages/admin/Pages/partners/index";
// import AdminEvent from "./pages/admin/Pages/events/index";
import FormOption from "./pages/ProfileForms/FormOption";
import FormContainer from "./pages/ProfileForms/FormContainer";
import FormContainer2 from "./pages/ProfileForms/FormContainer2";
// import MembersData from "./pages/admin/Pages/members-data/index";
// import AdminProject from "./pages/admin/Pages/projects/index";
// import AdminTable from "./pages/admin/Pages/new-admin/index";
import PasswordReset from "./pages/Reset Password/PasswordReset";
import SinglePost from "./pages/SinglePost/SinglePost";

// lazy loaded routes
const Executive = withLazyComponent(
  lazy(() => import("./pages/Executive/executive"))
);
const Partner = withLazyComponent(lazy(() => import("./pages/partner")));

const Blog = withLazyComponent(lazy(() => import("./pages/Blog/blog")));

const Projects = withLazyComponent(
  lazy(() => import("./pages/projects/projects"))
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="executives" element={<Executive />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<SinglePost />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="about" element={<About />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="partners" element={<Partner />} />
          <Route path="contact" element={<Contact />} />
          <Route path="location" element={<Location />} />
          <Route path="donate" element={<Donate />} />
          <Route path="password" element={<PasswordReset />} />
          <Route path="projects" element={<Projects />} />
          {/* profile form pages  */}
          <Route exact path="create_account" element={<FormOption />} />
          <Route
            exact
            path="create_account/higher_institution"
            element={<FormContainer />}
          />
          <Route path="password" element={<PasswordReset />} />
          <Route
            exact
            path="create_account/secondary_school"
            element={<FormContainer2 />}
          />
          <Route path="*" element={<Page404 />} />
        </Route>
        {/* Admin page routes */}
        {/* <Route path="admin" element={<Admin />}>
          <Route index element={<AdminHome />} />
          <Route path="data/*" element={<MembersData />} />
          <Route path="partners" element={<AdminPartner />} />
          <Route path="events" element={<AdminEvent />} />
          <Route path="projects" element={<AdminProject />} />
          <Route path="new-admin" element={<AdminTable />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
