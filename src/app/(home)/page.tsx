import Link from "next/link";
import { Navbar } from "./navbar";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-5">
        <Navbar />
      </div>
      <div className="mt-16">
        Rajat Raj
        <Link href="/documents/123">Click</Link>
      </div>
    </div>
  );
};

export default Home;
