import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { search } from "../../../Backend/src";

function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesize, setPageSize] = useState(12);
  const [totalPage, setTotalPage] = useState(1);
  const search = useLocation().search;
  
  return <div>
  <h1>{search}</h1>

  </div>;
}

export default Home;
