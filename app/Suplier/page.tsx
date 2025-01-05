"use client";

import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import SuplierForm from "./_components/SuplierForm";

const Suplier = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Navbar />
      <SuplierForm />
      <Footer />
    </div>
  );
};

export default Suplier;
