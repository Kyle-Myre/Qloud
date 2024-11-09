import pricings from "../constants/pricings.json";
import Pricing from "./Pricing";

export default function Pricings() {
  return (
    <section className="container mb-20 py-20 lg:px-20">
      <section className="mb-20 text-center text-4xl font-monsterate font-semibold">
        <h1 className="mb-4">Pricings</h1>
        <div className="flex flex-row gap-6 justify-center">
          <div className="bg-indigo-500 h-5 w-5 rounded-2xl"></div>
          <div className="bg-purple-500 h-5 w-5 rounded-2xl"></div>
          <div className="bg-cyan-500 h-5 w-5 rounded-2xl"></div>
          <div className="bg-teal-500 h-5 w-5 rounded-2xl"></div>
        </div>
      </section>
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-3">
        {pricings.map((pricing, index) => {
          return (
            <Pricing
              key={index}
              name={pricing.name}
              price={pricing.price}
              target={pricing.target}
              memory={pricing.memory}
              storage={pricing.storage}
              transfer={pricing.transfer}
              support={pricing.support}
              uptime={pricing.uptime}
              description={pricing.description}
            />
          );
        })}
      </section>
    </section>
  );
}
