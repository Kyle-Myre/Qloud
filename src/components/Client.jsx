export default function Client({ client, description, img }) {
  return (
    <div className="border-[1.5px] border-gray-400 shadow-xl rounded-2xl p-4 flex gap-4">
      <div>
        <img src={img} className="rounded-[4rem]" />
      </div>
      <div>
        <h1 className="font-semibold mb-4">{client}</h1>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
}
