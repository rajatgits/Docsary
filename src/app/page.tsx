import Link from "next/link";

export const Home = () => {
  return (
    <div className="flex items-center justify-center">
      Rajat Raj
      <Link href="/documents/123">Click</Link>
    </div>
  );
};

export default Home;
