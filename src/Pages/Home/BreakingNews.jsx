import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-4">
      <button className="btn px-6 text-[#FFF] bg-[#D72050]">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="text-[18px] font-semibold mr-10">Match Highlights: Germany vs Spain — as it happened !</Link>
        <Link className="text-[18px] font-semibold mr-10">Match Highlights: Germany vs Spain — as it happened !</Link>
        <Link className="text-[18px] font-semibold mr-10">Match Highlights: Germany vs Spain — as it happened !</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
