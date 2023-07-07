// import { NavLink } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen grid content-center text-center bg-choc">
      <div className="text-center ">
        <h1 className="text-burnt text-4xl md:text-5xl font-extrabold">Africa - Do You Know</h1>
        <h1 className="text-burnt text-3xl md:text-4xl font-extrabold">General Knowledge Quiz</h1>
      </div>
      <div className="text-xl md:text-3xl font-medium mt-4 mb-11 text-burnt">
        <p>How much do you know about Africa?</p>
        <p>Take the quiz and find out!</p>
      </div>
      <div className="group text-gold transition-all duration-300 ease-in-out">
      <Link to="/about"><button className="uppercase bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out font-bold">
          Take Quiz
        </button>
        </Link>
        </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
