import React from 'react';
import Image from 'next/image';

const Img = (props: { src: string; w: number; h: number }) => {
  return (
    <Image src={props.src} alt={props.src} width={props.w} height={props.h} objectFit="contain" />
  );
};

export default Img;
