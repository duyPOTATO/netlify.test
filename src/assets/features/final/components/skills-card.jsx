import React from 'react';

const SkillCard = ({ svg: Svg }) => {
    return (
        <div className="flex aspect-square items-center justify-center bg-amber-900 p-5">
            {Svg ? <Svg className="h-full w-30" /> : <span>No Icon</span>}
        </div>
    );
};

export default SkillCard;
