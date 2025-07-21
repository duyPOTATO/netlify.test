import React from 'react';
import EssayPreview from './essayPreview';
import { TbCircleArrowRight } from 'react-icons/tb';

const HighLights = ({ items }) => {
    return (
        <div className="final-essay__highlight final-essay-section">
            <h1 className="final-section-title">MỘT SỐ BÀI LÀM TIÊU BIỂU</h1>
            <div className="final-essay__highlight__container">
                {items.map((item) => (
                    <EssayPreview
                        key={item.id}
                        day={item.day}
                        short={item.short}
                        url={item.url}
                        imgSource={item.imgSource}
                        title={item.title}
                        decript={item.decript}
                    />
                ))}
            </div>
            <a
                href="#"
                className="final-section-title mt-3 flex items-center justify-end gap-2 hover:text-blue-800"
            >
                Xem tất cả bài tập
                <TbCircleArrowRight />
            </a>
        </div>
    );
};

export default HighLights;
