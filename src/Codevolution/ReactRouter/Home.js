import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleSuccess = () => {
    alert("successfully submitted");
    navigate("/success");
  };
  const handleFinal = () => {
    alert("you cant come back");
    navigate("final", { replace: true });
  };
  return (
    <>
      <h1>
        Home Component <br />
      </h1>
      <button onClick={handleSuccess}>Sucess</button>
      <button onClick={handleFinal}>Final</button>
    </>
  );
}

export default Home;
