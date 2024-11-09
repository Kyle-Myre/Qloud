import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="lg:px-20 px-5 py-4 backdrop-blur-md fixed w-full">
      <section className="flex items-center font-monsterate">
        <section className="flex-1">
          <h1 className="lg:text-4xl text-2xl text-black font-semibold">Q.</h1>
        </section>
        <section className="text-black font-semibold flex-1 lg:flex lg:justify-around lg:text-xl lg:gap-6 hidden">
          <a className="py-2 ">About</a>
          <a className="py-2">Offers</a>
          <a className="py-2">Clients</a>
          <a className="py-2">Contact</a>
          <a className="bg-indigo-700 py-2 px-4 rounded-xl text-white">
            Pricings
          </a>
        </section>
        <button
          onClick={() => setVisible(!visible)}
          className="lg:hidden visible"
        >
          {!visible ? (
            <FaBars className="size-6" />
          ) : (
            <RxCross1 className="size-6" />
          )}
        </button>
      </section>
      {visible ? (
        <section className="flex flex-col lg:hidden mt-4">
          <a className="py-2">About</a>
          <a className="py-2">Offers</a>
          <a className="py-2">Clients</a>
          <a className="py-2">Contact</a>
          <a className="py-2">Pricing</a>
        </section>
      ) : null}
    </nav>
  );
}
