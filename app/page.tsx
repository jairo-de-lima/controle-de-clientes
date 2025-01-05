"use client";

import ClientForm from "./_components/ClientForm";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import RegistrationForm from "./_forAprovation/forAprovation2";

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {/* <Navbar /> */}
      {/* <ClientForm /> */}
      <RegistrationForm
        onSubmit={(data: any) => {
          // data.type terá o tipo selecionado ('cliente' ou 'fornecedor')
          console.log("Dados do formulário:", data);
        }}
        initialData={{}} // Opcional: para edição
      />
      <Footer />
    </div>
  );
};

export default Home;
