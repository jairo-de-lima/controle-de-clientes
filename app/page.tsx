"use client";

import ClientForm from "./_components/ClientForm";
import Navbar from "./_components/Header";

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Navbar />
      <ClientForm />
    </div>
  );
};

export default Home;
