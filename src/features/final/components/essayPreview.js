
function EssayPreview(props) {
    return (
        <div class="day" id={props.id}>
            <h1 class="session">{props.day}</h1>
            <div class="content">
                <img class="img_preview" src={props.imgSource} />
                <div class="name">
                    <a href="">{props.title}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z" fill="currentColor" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
                <p>NỘI DUNG</p>
                <p id="decription">
                    {props.decript}
                </p>
                <a id="view_notebook" target="_blank" href="">Xem bài tập</a>
            </div>
        </div>
    );
}

export default EssayPreview;