import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({ image, date, title, description, link }) => {
  return (
    <div className="flex flex-col text-Dark-Blue dark:text-white lg:w-[405px] px-2 lg:px-0">
      <img src={image} alt={title} className="w-full h-auto" />
      <h2 className="lg:pt-8 pt-2 pb-4 font-medium">{date}</h2>
      <h3 className="lg:text-2xl text-xl font-medium pb-4">{title}</h3>
      <p className="lg:pb-8 pb-2">{description}</p>

      <a href={link}
        className="flex items-center gap-x-2.5 cursor-pointer hover:text-Royal-Blue duration-200"
      >
        Read more
        <FaArrowRightLong />
      </a>
    </div>
  );
};

export default BlogCard;