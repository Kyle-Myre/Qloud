import clients from "../constants/clients.json";
import Client from "./Client";

export default function Clients() {
  return (
    <section className="container mb-20 py-20 lg:px-20 px-5">
      <section className="mb-20 text-center text-4xl font-monsterate font-semibold">
        <h1 className="mb-4">Our Clients</h1>
        <div className="flex flex-row gap-6 justify-center">
          <div className="bg-indigo-500 h-5 w-5 rounded-2xl"></div>
          <div className="bg-purple-500 h-5 w-5 rounded-2xl"></div>
          <div className="bg-cyan-500 h-5 w-5 rounded-2xl"></div>
          <div className="bg-teal-500 h-5 w-5 rounded-2xl"></div>
        </div>
      </section>
      
      <section className="flex lg:flex-row flex-col justify-evenly gap-4">
        {clients.map((client, index) => {
          return (
            <Client
              key={index}
              client={client.name}
              description={client.description}
              img={client.image}
            />
          );
        })}
      </section>
    </section>
  );
}
