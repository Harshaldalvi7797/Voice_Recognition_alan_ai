/** @format */

import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
const alanKey =
  "9d400b6544695b94e0789e8499fc43f62e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "testcommand") {
          setNewsArticles(articles);
        }
      }
    });
  }, []);
  return (
    <div>
      Alan AI News Application
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
