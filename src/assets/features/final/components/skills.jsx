import React from 'react';
import SkillCard from './skills-card';
import SVGReact from '../../../svg/React_wordmark_dark.svg?react';
import SVGGit from '../../../svg/git.svg?react';
import SVGTail from '../../../svg/Tailwind_CSS_wordmark_dark.svg?react';
import SVGFigma from '../../../svg/figma.svg?react';
import SVGNext from '../../../svg/Next.js_wordmark_dark.svg?react';
import SVGSass from '../../../svg/sass.svg?react';

const Skills = () => {
    return (
        <div className="final-essay-section">
            <h1 className="final-section-title">Kỹ năng</h1>
            <div className="final-essay-section__article text-indigo-50">
                <div className="flex flex-col gap-4 bg-amber-500 p-5">
                    <div className="flex flex-row flex-wrap gap-4 bg-amber-600 p-5">
                        <SkillCard svg={SVGReact} />
                        <SkillCard svg={SVGTail} />
                        <SkillCard svg={SVGSass} />
                        <SkillCard svg={SVGNext} />
                    </div>
                    <div className="flex flex-row gap-3 bg-amber-600 p-5">
                        <SkillCard svg={SVGGit} />
                        <SkillCard svg={SVGFigma} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
