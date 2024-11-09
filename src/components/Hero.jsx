export default function Hero() {
  return (
    <section className="py-64 lg:px-16 flex items-center border-b-2">
      <div className="flex-1 flex flex-col gap-4 container">
        <h1 className="lg:text-6xl text-2xl font-monsterate lg:text-start text-center text-black font-bold">
          Work Efficently & Easily
        </h1>
        <p className="lg:text-justify text-center lg:text-xl/8 font-geist text-white font-semibold">
          Q Cloud Services empowers your business with flexible and scalable
          cloud solutions. Manage your resources effortlessly with Q’s
          user-friendly interface, designed for streamlined operations and
          cost-effective scaling. With Q, you’ll experience top-tier security,
          reliable data storage, and a suite of tools that adapt to your unique
          needs, ensuring you stay ahead in a rapidly evolving digital
          landscape. Make your work seamless and efficient with Q, where
          technology meets simplicity and performance.
        </p>
        <div className="font-open-sans flex flex-row lg:justify-start justify-center">
          <button className="bg-indigo-600 py-2 px-4 rounded-xl text-white lg:text-xl">
            Get Started
          </button>
          <button className="py-2 px-4 rounded-xl lg:text-xl text-white font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
