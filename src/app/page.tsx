import Image from "next/image";
import Dominoes from "../components/Dominoes";

export default function Home() {
  return (
    <section className="p-32">
      <h1 className="text-center text-2xl font-semibold font-mono">Dominoes</h1>
      <Dominoes />
    </section>
  );
}
