import React from "react";
import { CardGridNews, CardListlNews } from "@asu/component-news";

const News = ({ data }) => {
  console.log(data);
  const feed = data.feed;
  const feedPath = feed
    .split("https://news.asu.edu/feeds-json/")[1]
    .replace(/-/g, "_");
  const newsPath = feed
    .split("https://news.asu.edu/feeds-json/")[1]
    .replace(/(?:the-|of-)/gi, "");
  const items = data.items;
  const view = data.view;
  return (
    // if (view === "Cards")
    <>
      {view === "Cards" ? (
        <CardGridNews
          ctaButton={{
            url: "https://news.asu.edu/college-unit/" + newsPath,
            text: "Read More News",
          }}
          dataSource={{
            url: "https://news.asu.edu/feeds-json/",
            filters: feedPath,
          }}
          maxItems={items === "Three" && 3}
          header={{
            color: "dark",
          }}
        />
      ) : (
        <CardListlNews
          ctaButton={{
            url: "https://news.asu.edu/college-unit/" + newsPath,
            text: "Read More News",
          }}
          dataSource={{
            url: "https://news.asu.edu/feeds-json/",
            filters: feedPath,
          }}
          maxItems={items === "Three" && 3}
          header={{
            color: "dark",
          }}
        />
      )}
    </>
  );
};

export default News;
