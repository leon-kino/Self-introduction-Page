import React from 'react';

const About = (props: { src: string; title: string; content: string }) => {
  return (
    <div className="mx-16 text-center">
      <img src={props.src} alt={props.src} className="w-max h-max m-auto" />
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
