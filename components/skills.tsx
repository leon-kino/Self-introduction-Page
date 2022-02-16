import React from 'react';

const Skills = (props: { title: string; percent: number}) => {
  const array =
   ['w-1/12', 'w-1/5', 'w-2/6', 'w-2/5',
     'w-1/2', 'w-3/5', 'w-4/6', 'w-4/5', 'w-11/12', 'w-full'];
  const per =
   'absolute bg-skills-bar h-4 ' +
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
