import React from 'react';

const About = () => {
    return (
        <div className="final-essay__about final-essay-section">
            <h1 className="final-section-title">Giới thiệu bản thân</h1>
            <div className="final-essay-section__article flex flex-col-reverse items-center gap-4 text-amber-50 md:flex-row md:items-start">
                <div className="mt-10 flex w-11/12 flex-col gap-3 md:w-5/12">
                    <span className="text-lg uppercase">
                        nguồn gốc & sức mạnh
                    </span>
                    <span className="inline-block text-justify italic">
                        Tớ là duPO :{`>`} Sinh ngày 02.11.2003, tớ được lớn lên
                        và học tập tại mảnh đất HÀ NỘI với nhẹ nhàng những con
                        phố cổ kính, những con đường rợp bóng cổ thụ...
                    </span>
                    <span className="inline-block text-justify italic">
                        Được làm quen với mọi người trên môi trường Internet từ
                        sớm, đặc biệt là những người đi trước, có tài năng trong
                        ngành học nên tớ rất yêu thích ngành thiết kế và mong
                        muốn của tớ cũng chính là trở thành một nhà thiết kế :
                        {`>`}
                    </span>
                </div>
                <img
                    src=""
                    alt=""
                    className="aspect-[4/3] h-full w-11/12 rounded-lg md:ml-auto md:w-5/12 md:rounded-l-lg md:rounded-r-none lg:w-4/12 xl:w-3/12"
                />
            </div>
        </div>
    );
};

export default About;
