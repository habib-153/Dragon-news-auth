import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsCard = ({ news }) => {
  const { title, _id, image_url, details, author } = news;
  return (
    <div className="rounded-[0px] border mb-4 card ">
      <div className="bg-base-200 p-3">
        <div className="flex  gap-4 items-center">
          <img className="w-[50px] rounded-3xl" src={author.img} alt="" />
          <div>
            <p className="text-[16px] text-[#403F3F] font-semibold">
              {author.name}
            </p>
            <p className="text-[14px] text-[#706F6F]">
              {author.published_date}
            </p>
          </div>
        </div>
      </div>
      <div className="p-3 space-y-4">
        <h2 className="card-title">{title}</h2>
        <figure className="">
          <img src={image_url} alt="img" className="" />
        </figure>
        <div className="card-body p-0 items-center">
          {details.length > 200 ? (
            <p className="text-[#706F6F]">
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-[#FF8C47]">
                ...Read More
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
