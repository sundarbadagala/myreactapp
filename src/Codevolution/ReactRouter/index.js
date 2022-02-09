import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Menubar from "./Navbar/Menubar";
import Home from "./Home";
import About from "./About/About";
import Success from "./EndPage/Success";
import Final from "./EndPage/Final";
import NoMatch from "./Error/NoMatch";
import Products from "./Products/Products";
import AllProducts from "./Products/AllProducts";
import FeaturedProducts from "./Products/FeaturedProducts";
import NewProducts from "./Products/NewProducts";
import User from "./User/User";
import UserDetails from "./User/UserDetails";
import Admin from "./User/Admin";
import Customer from './Customers/Customers'
import Profile from './Profile/Profile'
import Login from './Profile/Login'
import RequiredAuth from "./RequiredAuth";
import {AuthProvider} from './auth'
import "./styles.css";

const LazyAbout = React.lazy(() => import("./About/About"));

export default function Routing() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        {/* <Menubar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<React.Suspense fallback='loading...'><LazyAbout /></React.Suspense>} />
          <Route path="success" element={<Success />} />
          <Route path="final" element={<Final />} />
          <Route path="products" element={<Products />}>
            <Route index element={<AllProducts />} />
            <Route path="all-products" element={<AllProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="user" element={<User />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path='customer' element={<Customer/>}/>
          <Route path='profile' element={<RequiredAuth><Profile/></RequiredAuth>}/>
          <Route path='login' element={<Login/>}/>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
