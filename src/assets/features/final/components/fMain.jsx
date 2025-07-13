import '../styles/fMain.css';
import EssayPreview from './essayPreview';
import Hero from './hero';
import dupoPreview from '../../../images/this-is-dupo.png';
import img from '../../..//images/day3_preview.jpg';

function FMain() {
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
                    <EssayPreview
                        day="3"
                        short="KIỂM TRA"
                        imgSource={img}
                        title="BÀI TẬP KIỂM TRA GIỮA KÌ"
                        decript="Xin chào buổi 3 abc"
                    />
                </div>
            </div>
            <div className="fe-about"></div>
            <div className="fe-skills"></div>
            <div className="fe-contact"></div>
        </div>
    );
}

export default FMain;
