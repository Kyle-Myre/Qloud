import companies from "../constants/companies.json";
import Company from "./Company";

export default function Companies() {
  return (
    <section className="container mb-20 py-20 lg:px-20 px-10">
      <section className="mb-20 text-center text-4xl font-monsterate font-semibold">
        <h1 className="mb-4">Our Partners</h1>
        <div className="flex flex-row gap-6 justify-center">
          <div className="bg-indigo-500 h-5 w-5 rounded-2xl"></div>
          <div className="bg-purple-500 h-5 w-5 rounded-2xl"></div>
          <div className="bg-cyan-500 h-5 w-5 rounded-2xl"></div>
          <div className="bg-teal-500 h-5 w-5 rounded-2xl"></div>
        </div>
      </section>
      <section className="flex lg:flex-row flex-col lg:justify-evenly items-start gap-3">
        {companies.map((company, index) => {
          return (
            <Company key={index} name={company.name} image={company.logo} />
          );
        })}
      </section>
    </section>
  );
}
