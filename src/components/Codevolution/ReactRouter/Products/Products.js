import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

function ProductsPage() {
  return (
    <>
      <div>
        <NavLink to="all-products">All</NavLink>
        <NavLink to="featured">Featured</NavLink>
        <NavLink to="new">New</NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default ProductsPage;
