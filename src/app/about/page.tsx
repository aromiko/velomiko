import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Find out more about VeloMiko here.",
};

const About = () => {
  return (
    <main className="flex-grow">
      <section className="flex w-full justify-center my-40">
        <h1 className="font-bold text-4xl w-fit">About</h1>
      </section>
    </main>
  );
};

export default About;
