import React from 'react';
import Img from './image';

const Values = (props: { src: string; title: string; content: string }) => {
  return (
    <div className="w-72 h-10/12 mx-auto md:mx-0 mb-7 md:mb-0">
      <div className="w-max h-max m-auto">
        <Img src={props.src} w={200} h={200} />
      </div>
      <h3 className="font-bold text-brack tracking-widest text-center py-5">{props.title}</h3>
      <h4 className="w-9/12 m-auto text-center text-sm text-brack whitespace-pre-line">
        {props.content}
      </h4>
    </div>
  );
};

export default Values;
