import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="py-52 text-3xl bg-pink-500 text-white px-52 rounded-lg flex flex-col">
        <p>Hello Tayyab! are you deploying a boiler plate NextJS App, Thats great!</p>
        <button className="px-3 py-2 rounded-md mx-auto bg-white text-black my-5 hover:bg-pink-300 hover:text-white">Click me</button>
      </div>
    </main>
  );
}
