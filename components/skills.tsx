import React from 'react';

const Skills = (props: { title: string; percent: number}) => {
  const array =
   ['1/12', '1/5', '2/6', '2/5', '1/2', '3/5', '4/6', '4/5', '11/12', 'full'];
  const per =
   'absolute bg-skills-bar h-4 w-' +
    array[props.percent / 10 - 1] + ' borders rounded';
  return (
    <>
      <p className="text-light-green text-xl">{props.title}</p>
      <div className="flex">
        <div className="bg-bgc-skills rounded h-4 w-10/12 relative my-auto">
          <div className={per}>
          </div>
        </div>
        <p className="text-light-green -auto pl-3">{props.percent}%</p>
      </div>
    </>
  );
};

export default Skills;
