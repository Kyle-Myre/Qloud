export default function Feature({ image, title, description, reversed }) {
  return (
    <div
      className={`flex ${
        !reversed ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-6 items-center flex-col border-2 border-gray-300 rounded-xl shadow-md`}
    >
      <section>
        <img
          src={image}
          className={`${
            !reversed
              ? "rounded-tl-xl rounded-bl-xl"
              : "rounded-tr-xl rounded-br-xl"
          } lg:w-[100rem] w-full`}
        />
      </section>
      <section className="flex flex-col gap-2 px-3">
        <h3 className="lg:text-3xl lg:text-start text-center text-xl font-monsterate font-semibold text-indigo-600">
          {title}
        </h3>
        <p className="font-geist text-justify">{description}</p>
      </section>
    </div>
  );
}
