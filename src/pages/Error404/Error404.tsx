import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <main className="bg-hexagonal h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-[90px] font-black text-yellow">ERROR 404</h1>
      <p className="font-black uppercase">Page not found</p>
      <button className="btn mt-10">
        <Link to="/">Go Home</Link>
      </button>
    </main>
  );
};

export default Error404;
