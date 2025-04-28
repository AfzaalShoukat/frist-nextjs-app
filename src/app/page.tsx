import CardGrid from "./components/cardgrid";
import CardsGrid from "./components/cardsgrid";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <>
    <div  className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <h1 className="text-4xl font-bold text-center mt-8">Welcome to My Next.js App!</h1>
      <p className="text-center mt-4">This is my first Next.js page.</p>
      <Navbar/>
      <Hero/>
      <CardGrid/>
      <CardGrid/>
      <Hero/>
      <CardGrid/>
      <CardGrid/>
      <CardsGrid/>
    </main>
    <Footer/>
    </div>
    </>

  );
}
