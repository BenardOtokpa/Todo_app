import React, { useState } from "react";
import background from "../assets/images/background.jpg";
import Cards from "./Cards";
import AddCard from "./AddCard";


const Home = () => {
  const [data, setData] = useState(null);

 

  return (
    <>
      <img
        src={background}
        style={{ height: "100vh", width: "100vw" }}
        alt="background"
      />
      <div
        className="container-fluid"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(1.5px)",
        }}
      >
        <main className="row w-100 h-100 d-flex justify-content-around align-items-center">
          <section className="col-md-4">
            <h3 className="display-1 text-white fst-italic">
              Manage Activities & Set Tasks
            </h3>
            <AddCard data={data} setData={setData}  />
          </section>
          <section className="col-md-6">
            {data ? (
              <div id="style-1" style={{overflowY:"scroll", height:"80vh"}}>
                <Cards data={data} setData={setData} />
              </div>
            ) : (
              <h3 className="display-2 fw-bold text-white">
                Start Creating Tasks
              </h3>
            )}
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
