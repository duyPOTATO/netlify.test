import Hero from './hero';
import FeedbackSection from './feedback';
// import Experience from './experience_disable';
// import Contact from './contact';
// import About from './about';
import Experience from './experience';
import Skills from './skills';
import dupoPreview from '../../../images/this-is-dupo.png';
import { useState } from 'react';
import img from '../../../images/login-page.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/FinalMain.css';

const FinalMain = () => {
    // eslint-disable-next-line no-unused-vars
    const [items, setItem] = useState([
        {
            day: 2024,
            dayend: 2025,
            url: '',
            imgSource: img,
            title: 'Nghiên cứu và xây dựng hệ thống quản lý đào tạo tại trường đại học',
            role: 'FE Dev',
            decript:
                'Thiết kế giao diện và trải nghiệm người dùng thân thiện, trực quan và hiện đại hơn, tối ưu thời gian tải trang bằng việc sử dụng components và template tự tạo sử dụng React Components, Props, State.'
        }
    ]);
    // eslint-disable-next-line no-unused-vars
    const [feedbacks, setFeedback] = useState([
        {
            id: 1,
            name: 'Rebecca',
            content:
                'Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, ',
            avatar: '/src/assets/images/fc1_ht4auam1nxb.jpg'
        },
        {
            id: 2,
            name: 'Rebecca',
            content:
                'Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, ',
            avatar: '/src/assets/images/fc1_ht4auam1nxb.jpg'
        },
        {
            id: 3,
            name: 'Rebecca',
            content:
                'Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.[1][2] Nó cũng là quyển sách bán chạy nhất của New York Times trong 10 năm. Tác phẩm được đánh giá là cuốn sách đầu tiên và hay nhất trong thể loại này, ',
            avatar: '/src/assets/images/fc1_ht4auam1nxb.jpg'
        }
    ]);

    return (
        <div className="final-essay bg-slate-950">
            <Hero
                refUrl="https://www.google.com/search?q=ocean"
                profileUrl="facebook.com/dupo.duypotato"
                previewImg={dupoPreview}
            />
            {/* <About /> */}
            <Experience items={items} />
            <Skills />
            <FeedbackSection feedbacks={feedbacks} />
            {/* <Contact /> */}
        </div>
    );
};

export default FinalMain;
