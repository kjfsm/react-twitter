import React from "react";
import Tweet, { TweetProps } from "./tweet";

interface TimelineProps {
  tweets: TweetProps[];
}

const Timeline: React.FC<TimelineProps> = (props: TimelineProps) => {
  console.log(props);
  return (
    <div>
      {props.tweets.map((tweet, index) => (
        <Tweet key={index} name={tweet.name} text={tweet.text} />
      ))}
    </div>
  );
};

export default Timeline;
