import { Link } from "react-router-dom";

export default function About() {
  return (
    <div
      id="about"
      className="text-center grid bg-choc content-center h-screen text-burnt text-2xl md:px-96 px-11"
    >
      <p className="">
        Answer as many general knowledge questions about the African continent
        before the timer runs out!
      </p>
      <p className="mb-16 mt-4">You have only 60 seconds. Good luck!</p>
      <div className="group text-gold transition-all duration-300 ease-in-out">
      <Link to="/quiz"><button className="uppercase bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_6px] bg-no-repeat group-hover:bg-[length:0%_6px] transition-all duration-700 ease-out font-bold">
          Start Quiz
        </button></Link>
      </div>
      
    </div>
  );
}
