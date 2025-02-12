import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gear",
  description: "This is the gear that VeloMiko uses.",
};

const Gear = () => {
  return (
    <main className="flex-grow">
      <section className="flex w-full justify-center my-40">
        <h1 className="font-bold text-4xl w-fit">Gear</h1>
      </section>
    </main>
  );
};

export default Gear;
