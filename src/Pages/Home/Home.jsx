import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSidedNav from "../Shared/LeftSidedNav/LeftSidedNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSidedNav from "../Shared/RightSidedNav/RightSidedNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="font-poppins font-bold text-xl">This is home</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSidedNav></LeftSidedNav>
                </div>
                {/* news cont */}
                <div className="border md:col-span-2">
                    {
                        news.map(aNews => <NewsCard
                        key={aNews._id}
                        news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div className="border">
                    <RightSidedNav></RightSidedNav>
                </div>
            </div>
        </div>
    );
};

export default Home;