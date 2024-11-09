import features from "../constants/features.json";
import Feature from "./Feature";

export default function Features() {
  return (
    <section className="container mb-20 py-10 lg:px-20 px-10">
      <section className="mb-20 text-center text-4xl font-monsterate font-semibold">
        <h1 className="mb-4">Key Features</h1>
        <div className="flex flex-row gap-6 justify-center">
          <div className="bg-indigo-500 h-5 w-5 rounded-2xl"></div>
          <div className="bg-purple-500 h-5 w-5 rounded-2xl"></div>
          <div className="bg-cyan-500 h-5 w-5 rounded-2xl"></div>
          <div className="bg-teal-500 h-5 w-5 rounded-2xl"></div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        {features.map((feature, index) => {
          return (
            <Feature
              key={index}
              image={feature.image}
              title={feature.title}
              reversed={feature.reversed}
              description={feature.description}
            />
          );
        })}
      </section>
    </section>
  );
}
