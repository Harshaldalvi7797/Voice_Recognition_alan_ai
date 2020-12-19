/** @format */

import React from "react";
import NewsCard from "./Newscard/NewsCard";

export default function NewsCards({ articles }) {
  return (
    <div>
      <h1>News cards</h1>
      {articles.map((article, i) => (
        <NewsCard />
      ))}
    </div>
  );
}
