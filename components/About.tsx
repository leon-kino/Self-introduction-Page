import React from 'react';
import Img from './image';

const About = (props: { src: string; title: string; content: string }) => {
  return (
    <div className="mx-16 text-center">
      <div className="w-max h-max m-auto">
        <Img src={props.src} w={200} h={200} />
      </div>
      <p className="text-xl font-bold text-light-green tracking-widest my-8">{props.title}</p>
      <p
        className="
      text-brack tracking-widest w-64 my-4 m-auto whitespace-pre-line"
      >
        {props.content}
      </p>
    </div>
  );
};

export default About;
