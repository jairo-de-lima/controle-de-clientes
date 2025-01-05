"use client";

import ClientForm from "./_components/ClientForm";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Navbar />
      <ClientForm />
      <Footer />
    </div>
  );
};

export default Home;
