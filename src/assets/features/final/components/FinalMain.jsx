import EssayPreview from './EssayPreview';
import Hero from './hero';
import dupoPreview from '../../../images/this-is-dupo.png';
import { useState } from 'react';
import img from '../../..//images/day2_preview.jpg';
import { TbCircleArrowRight } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/FinalMain.css';

const FinalMain = () => {
    const ClientFeedback = ({ name, content }) => {
        return (
            <div className="mb-10 flex flex-row gap-3 rounded-xl border bg-amber-50 p-3">
                {/* <div className="flex w-10/12 flex-shrink-0 flex-row gap-3 rounded-xl border bg-amber-50 p-3 md:w-5/12 lg:w-4/12"> */}
                <img
                    className="aspect-square h-fit w-18 rounded-full bg-blue-950"
                    alt="Client avatar"
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

    // eslint-disable-next-line no-unused-vars
    const [items, setItem] = useState([
        {
            day: 3,
            short: 'KIỂM TRA',
            url: '',
            imgSource: img,
            title: 'BÀI TẬP KIỂM TRA GIỮA KÌ',
            decript:
                'Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, có ảnh hưởng thay đổi cuộc đời đối với hàng triệu người trên thế giới.'
        }
    ]);

    return (
        <div className="final-essay bg-slate-950">
            <Hero
                refUrl="https://www.google.com/search?q=ocean"
                profileUrl="facebook.com/dupo.duypotato"
                previewImg={dupoPreview}
            />
            <div className="final-essay__highlight final-essay-section">
                <h1 className="final-section-title">
                    MỘT SỐ BÀI LÀM TIÊU BIỂU
                </h1>
                <div className="final-essay__highlight__container">
                    {items.map((item) => (
                        <EssayPreview
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
            <div className="final-essay__about final-essay-section">
                <h1 className="final-section-title">Giới thiệu bản thân</h1>
                <div className="final-essay-section__article flex flex-col-reverse items-center gap-4 text-amber-50 md:flex-row md:items-start">
                    <div className="mt-10 flex w-11/12 flex-col gap-3 md:w-5/12">
                        <span className="text-lg uppercase">
                            nguồn gốc & sức mạnh
                        </span>
                        <span className="inline-block text-justify italic">
                            Tớ là duPO :{`>`} Sinh ngày 02.11.2003, tớ được lớn
                            lên và học tập tại mảnh đất HÀ NỘI với nhẹ nhàng
                            những con phố cổ kính, những con đường rợp bóng cổ
                            thụ...
                        </span>
                        <span className="inline-block text-justify italic">
                            Được làm quen với mọi người trên môi trường Internet
                            từ sớm, đặc biệt là những người đi trước, có tài
                            năng trong ngành học nên tớ rất yêu thích ngành
                            thiết kế và mong muốn của tớ cũng chính là trở thành
                            một nhà thiết kế :{`>`}
                        </span>
                    </div>
                    <img
                        src=""
                        alt=""
                        className="aspect-[4/3] h-full w-11/12 rounded-lg bg-amber-700 md:ml-auto md:w-5/12 md:rounded-l-lg md:rounded-r-none lg:w-4/12 xl:w-3/12"
                    />
                </div>
            </div>
            <div className="final-essay__skills final-essay-section">
                <h1 className="final-section-title">Kỹ năng cá nhân</h1>
                <div className="final-essay-section__article">OK</div>
            </div>
            <div className="final-essay__contact final-essay-section">
                <h1 className="final-section-title">Thông tin liên hệ</h1>
                <div className="final-essay-section__article">OK</div>
            </div>
            <div className="final-essay__about final-essay-section">
                <h1 className="final-section-title">Nhận xét từ khách hàng</h1>
                <div className="final-essay-section__article inline-flex w-full flex-row gap-2 overflow-x-auto">
                    <Swiper
                        className=""
                        modules={[Pagination]}
                        grabCursor
                        initialSlide={[2]}
                        slidesPerView="auto"
                        speed={800}
                        slideToClickedSlide
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { spaceBetween: 10, slidesPerView: 1 },
                            768: { spaceBetween: 15, slidesPerView: 3 },
                            1024: { spaceBetween: 20, slidesPerView: 4 }
                        }}
                    >
                        <SwiperSlide>
                            <ClientFeedback
                                name="Deez nuts"
                                content="Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientFeedback
                                name="Deez nuts"
                                content="Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientFeedback
                                name="Deez nuts"
                                content="Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientFeedback
                                name="Deez nuts"
                                content="Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientFeedback
                                name="Deez nuts"
                                content="Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClientFeedback
                                name="Deez nuts"
                                content="Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, "
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FinalMain;
