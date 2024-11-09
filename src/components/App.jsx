/** Main App */

import Features from "./Features";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Companies from "./Companies";
import Clients from "./Clients";
import Pricings from "./Pricings";

/**
 * The main App component.
 *
 * This component renders the entire application. It renders a header
 * component containing a navbar and hero component, a main component
 * containing the features, companies, clients, pricings and contact
 * components, and a footer component.
 *
 * The header and main components are styled with a gradient background
 * and the components are positioned relative to the gradient.
 *
 * The footer component is currently empty.
 */
export default function App() {
  return (
    <>
      <header className="relative bg-[url('/backdrop.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-700 via-teal-500 to-cyan-700 opacity-40"></div>
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </header>
      <main className="bg-slate-50">
        <Features />
        <Companies />
        <Clients />
        <Pricings />
      </main>
      <footer></footer>
    </>
  );
}
