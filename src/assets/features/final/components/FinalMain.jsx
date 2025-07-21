import Essaypreview from './EssayPreview';
import Hero from './hero';
import FeedbackSection from './feedback';
import Skills from './skills';
import Contact from './contact';
import About from './about';
import dupoPreview from '../../../images/this-is-dupo.png';
import { useState } from 'react';
import img from '../../..//images/day2_preview.jpg';
import { TbCircleArrowRight } from 'react-icons/tb';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/FinalMain.css';

const FinalMain = () => {
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
    // eslint-disable-next-line no-unused-vars
    const [feedbacks, setFeedback] = useState([
        {
            id: 1,
            name: 'Deez nuts',
            content:
                'Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, ',
            avatar: {}
        },
        {
            id: 2,
            name: 'Deez nuts',
            content:
                'Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, ',
            avatar: {}
        },
        {
            id: 3,
            name: 'Deez nuts',
            content:
                'Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, ',
            avatar: {}
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
            <About />
            <Skills />
            <FeedbackSection feedbacks={feedbacks} />
            <Contact />
        </div>
    );
};

export default FinalMain;
