import React from "react";
import ClientForm from "./_components/ClientForm"; // Certifique-se de que o caminho está correto

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientForm />
    </main>
  );
};

export default Home;
