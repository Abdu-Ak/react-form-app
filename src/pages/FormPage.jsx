import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const FormPage = () => {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        <Navbar />

        <Form />
      </main>
    </>
  );
};

export default FormPage;
