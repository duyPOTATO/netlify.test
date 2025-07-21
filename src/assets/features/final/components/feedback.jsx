import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const FeedbackSection = ({ feedbacks }) => {
    const ClientFeedback = ({ name, content, avatar }) => {
        return (
            <div className="mb-10 flex w-full flex-row gap-3 rounded-xl border bg-amber-50 p-3">
                <img
                    className="aspect-square h-fit w-16 rounded-full"
                    src={avatar}
                    alt="Client_avatar"
                />
                <div className="info flex flex-1 flex-col">
                    <span className="font-bold">{name}</span>
                    <span className="line-clamp-3 text-sm italic">
                        {content}
                    </span>
                </div>
            </div>
        );
    };

    return (
        <div className="final-essay__feedback final-essay-section">
            <h1 className="final-section-title">Nhận xét từ khách hàng</h1>
            <div className="final-essay-section__article inline-flex w-full flex-row gap-2 overflow-x-auto">
                <Swiper
                    className="w-full"
                    modules={[Pagination]}
                    grabCursor
                    initialSlide={2}
                    freeMode={true}
                    speed={800}
                    slideToClickedSlide
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { spaceBetween: 15, slidesPerView: 2 },
                        1024: { spaceBetween: 20, slidesPerView: 3 }
                    }}
                >
                    {feedbacks.map((feedback) => (
                        <SwiperSlide>
                            <ClientFeedback
                                key={feedback.id}
                                name={feedback.name}
                                content={feedback.content}
                                avatar={feedback.avatar}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default FeedbackSection;
