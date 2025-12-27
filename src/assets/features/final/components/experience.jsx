import React from 'react';
import EssayPreview from './essayPreview';
import { TbCircleArrowRight } from 'react-icons/tb';

const Experience = ({ items }) => {
    return (
        <div className="final-essay__highlight final-essay-section">
            <h1 className="final-section-title">Kinh nghiệm làm việc</h1>
            <div className="final-essay__highlight__container">
                {items.map((item) => (
                    <EssayPreview
                        key={item.id}
                        day={item.day}
                        dayend={item.dayend}
                        // short={item.short}
                        url={item.url}
                        imgSource={item.imgSource}
                        title={item.title}
                        role={item.role}
                        decript={item.decript}
                    />
                ))}
            </div>
            <a href="#" className="final-section-title action-go-to disable">
                {/* <span className="pr-1">Xem thêm</span> */}
                <span className="pr-1">đang cập nhật</span>
                <TbCircleArrowRight />
            </a>
        </div>
    );
};

export default Experience;
