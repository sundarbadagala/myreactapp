import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Samsung from "./pages/RQProducts";
import Redmi from "./pages/Products";
import "./styles.css";

// NOTE : Before start this page you need to run command   npx json-server --watch Json/data.json --port 400

const queryClient = new QueryClient();

function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rqproducts" element={<Samsung />} />
          <Route path="products" element={<Redmi />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default Index;
