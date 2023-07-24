import { getNews } from "@/utils";
import { NextFont } from "next/dist/compiled/@next/font";
import { FC } from "react";
import { type cryptoNews } from "@/types/index.t";
import NewsCard from "./NewsCard";

interface NewsInfoProps {
  lato: NextFont;
}

const NewsInfo: FC<NewsInfoProps> = async ({ lato }) => {
  const data = await getNews();
  const Data: Array<cryptoNews> = data.Data;

  return (
    <section className={lato.className + " h-screen bg-white"}>
      <div className="w-4/5 pt-24 mx-auto">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl text-navbar">Crypto News Today</h1>
          <div className="w-48 h-4 bg-navbar"></div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-24 lg:grid-rows-1 lg:grid-cols-3 news-grid">
          {Data.map(
            (news, index) =>
              index < 3 && (
                <NewsCard
                  key={news.id}
                  title={news.title}
                  image={news.imageurl}
                  body={news.body}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsInfo;
