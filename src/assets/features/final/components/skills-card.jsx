import React from 'react';

const SkillCard = ({ svg: Svg }) => {
    return (
        <div className="flex aspect-square rounded-xl bg-neutral-50/5 p-5 hover:cursor-pointer hover:bg-neutral-50/10">
            {Svg ? <Svg className="h-full w-30" /> : <span>No Icon</span>}
        </div>
    );
};

export default SkillCard;
