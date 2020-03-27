import React, { useState } from "react";
import Tweets from "./tweets";
import Timeline from "./timeline";
import { TweetProps } from "./tweet";

const App = () => {
  const [tweets, setTweets] = useState<TweetProps[]>([{ name: "", text: "" }]);
  const [name, setName] = useState<string>("");

  const handleTweet = (tweetText: string) => {
    const newTweets = tweets.slice();
    setTweets(newTweets.concat({ name: name, text: tweetText }));
  };

  return (
    <>
      name <input onChange={e => setName(e.target.value)} />
      <Tweets handleTweet={handleTweet} />
      <Timeline tweets={tweets} />
    </>
  );
};

export default App;
