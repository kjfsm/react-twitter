import React from "react";

export interface TweetProps {
  name: string;
  text: string;
}

const Tweet: React.FC<TweetProps> = (props: TweetProps) => {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.text}</div>
    </>
  );
};

export default Tweet;
