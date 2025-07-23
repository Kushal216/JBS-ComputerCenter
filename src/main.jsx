import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import HomePage from "./Components/Home/Home.jsx";
import ProductsSection from "./Components/Products/Product.jsx";
import CoursesSection from "./Components/Courses.jsx";
import Forms from "./Components/Forms.jsx";
import AboutUs from "./Components/About.jsx";
import ContactSection from "./Components/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="products" element={<ProductsSection />} />
      <Route path="courses" element={<CoursesSection />} />
      <Route path="forms" element={<Forms />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactSection />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>
);
