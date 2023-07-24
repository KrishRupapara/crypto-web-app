import { type cryptoNews } from "@/types/index.t";
import Image from "next/image";
import { FC } from "react";

interface NewsCardProps {
  title: cryptoNews["title"];
  image: cryptoNews["imageurl"];
  body: cryptoNews["body"];
}

const NewsCard: FC<NewsCardProps> = ({ title, image, body }) => {
  return (
    <div className="mx-auto transition-all border-b-4 border-l-4 rounded-lg cursor-pointer border-navbar hover:bg-navbar hover:text-white w-80 hover:shadow-2xl">
      <Image
        src={image}
        width={600}
        height={600}
        alt="Newscard"
        className="w-full h-auto mb-10 rounded-t-md"
      />
      <h1 className="px-3 mb-4 text-center">{title}</h1>
    </div>
  );
};

export default NewsCard;
