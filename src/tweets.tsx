import React, { useState } from "react";

interface TweetsProps {
  handleTweet: (tweetText: string) => void;
}

const Tweets: React.FC<TweetsProps> = (props: TweetsProps) => {
  const [tweetText, setTweetText] = useState("");
  return (
    <div>
      <div>
        text <input onChange={e => setTweetText(e.target.value)} />
      </div>
      <div>
        <button
          onClick={() => {
            props.handleTweet(tweetText);
            // text消したい
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};
export default Tweets;
