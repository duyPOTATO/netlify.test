import "../styles/fMain.css";
import EssayPreview from "./essayPreview";
import Hero from "./hero";
import dupoPreview from "../../../images/this-is-dupo.png";

function FMain() {
  return (
    <div className="fMain">
      <Hero
        refUrl="https://www.google.com/search?q=ocean"
        profileUrl="facebook.com/dupo.duypotato"
        previewImg={dupoPreview}
      />
      <div className="highlight">
        <h1 className="hl-title">MỘT SỐ BÀI LÀM TIÊU BIỂU</h1>
        <div className="hl-container">
          <EssayPreview
            id="1"
            day="Bài tập buổi 3"
            imgSource=""
            title="Xin chào buổi 3"
            decript="Xin chào buổi 3 abc"
          />
        </div>
      </div>
      <div className="about"></div>
      <div className="skills"></div>
      <div className="contact"></div>
    </div>
  );
}

export default FMain;
