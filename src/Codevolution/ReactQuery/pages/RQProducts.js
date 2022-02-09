import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchProducts = () => {
  return axios.get("http://localhost:4000/data");
};

function RQProducts() {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "products",
    fetchProducts,
    {
      cacheTime: 10000, //React Query sets default value 5mins of query cacheTime i.e the cache will stored upto 5 mins but u can set that cacheTime how much time we want. => you can watch RQDevtool for better information
      staleTime: 5000 //Up to 5 seconds isFetching will be false i.e no data fetching will be done, the previous data which is stored in cache will be shown in browser, 0 is default value
    }
  );

  console.log({ isLoading, isFetching });
  return (
    <div>
      {isLoading ? (
        <h6>loading...</h6>
      ) : isError ? (
        <h6>{error.message}</h6>
      ) : (
        data?.data.map((item) => <div>{item.title}</div>)
      )}
    </div>
  );
}

export default RQProducts;
