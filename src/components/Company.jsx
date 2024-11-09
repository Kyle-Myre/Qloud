export default function Company({ name, image }) {
  return (
    <div className="flex flex-row items-center gap-2">
      <img src={image} className="w-[5rem]" />
      <h3 className="lg:text-2xl text-xl font-black">{name}</h3>
    </div>
  );
}
