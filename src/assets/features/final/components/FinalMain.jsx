import '../styles/fMain.css';
import EssayPreview from './EssayPreview';
import Hero from './Hero';
import dupoPreview from '../../../images/this-is-dupo.png';
import { useState } from 'react';
import img from '../../..//images/day2_preview.jpg';

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

    return (
        <div className="final-essay-main">
            <Hero
                refUrl="https://www.google.com/search?q=ocean"
                profileUrl="facebook.com/dupo.duypotato"
                previewImg={dupoPreview}
            />
            <div className="final-essay__highlight bg-slate-950 px-2 py-5 md:px-5 md:py-10 lg:px-10 lg:py-15">
                <h1 className="fe-highlight__title text-lg font-bold text-amber-50 italic md:text-2xl lg:text-4xl">
                    MỘT SỐ BÀI LÀM TIÊU BIỂU
                </h1>
                <div className="fe-highlight__container">
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
            </div>
            <div className="fe-about"></div>
            <div className="fe-skills"></div>
            <div className="fe-contact"></div>
        </div>
    );
};

export default FinalMain;
