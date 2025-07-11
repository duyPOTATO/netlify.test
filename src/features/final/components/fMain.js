import EssayPreview from "./essayPreview";

function FMain() {
    return (
        <>
            <section className="hero">
                <div class="home-page-left">
                    <div class="hpl-title1">
                        <a href="#">This is <span >duPO's</span> galaxy</a>
                        <p>"W/ my hand in the <span class="ocean-easter-eggs"><a target="_blank" href="https://www.google.com/search?q=ocean">O C E A N</a></span>"</p>
                    </div>
                </div>
                <div class="home-page-right">
                    <div class="dupo-galaxy">
                        <a target="_blank" href="https://www.facebook.com/duPO.gotCursed">
                            <img class="img-dupo" src="./this-is-dupo.png" alt="" />
                        </a>
                    </div>
                </div>
            </section>
            <section className="works">
                <h1 class="header">MỘT SỐ BÀI LÀM TIÊU BIỂU</h1>
                <div className="grid">
                    <EssayPreview
                        id="1"
                        day="Bài tập buổi 3"
                        imgSource=""
                        title="Xin chào buổi 3"
                        decript="Xin chào buổi 3 abc"
                    />
                </div>
            </section>
            <section className="about"></section>
            <section className="skills"></section>
            <section className="contact"></section>
        </>
    );
}

export default FMain;