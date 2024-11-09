export default function Pricing({
  name,
  description,
  price,
  target,
  memory,
  storage,
  transfer,
  support,
  uptime,
}) {
  return (
    <div className="border-[1.5px] border-gray-400 shadow-xl rounded-2xl px-12 py-6 flex gap-4">
      <div>
        <div className="mb-4 flex flex-row items-center justify-between font-monsterate">
          <span className="font-semibold text-xl">{name}</span>
          <p className="text-2xl">$ {price} /month</p>
        </div>
        <div className="py-4 text-xl font-open-sans">
          <ul className="flex flex-col gap-2">
            <li>
              <span className="font-semibold">Compute Resources:</span> 1 vCPU
            </li>
            <li>
              <span className="font-semibold">Memory:</span> {memory} GB
            </li>
            <li>
              <span className="font-semibold">Storage:</span> {storage} GB
            </li>
            <li>
              <span className="font-semibold">Transfer:</span> {transfer} GB
            </li>
            <li>
              <span className="font-semibold">Support:</span> {support}
            </li>
            <li>
              <span className="font-semibold">Uptime SLA:</span> {uptime}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
