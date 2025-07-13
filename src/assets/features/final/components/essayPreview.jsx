import GoToSVG from '../../../images/svg.svg?react';

function EssayPreview(props) {
    return (
        <div
            className="essay-preview-card mt-5 flex flex-col border-y border-amber-50 py-4 md:flex-row md:py-5"
            id={props.day}
        >
            <h1 className="essay-preview-card__title mb-5 text-xl text-amber-50 italic md:mb-0 lg:text-2xl">
                Buổi <span className="font-bold">0{props.day}</span> -{' '}
                {props.short}
            </h1>
            <div className="card-content ml-auto flex w-fit flex-col justify-end text-amber-50">
                <img
                    className="card-content__img-preview h-30 w-50"
                    src={props.imgSource}
                    alt="ảnh"
                />
                <div className="card-content__main flex">
                    <a href="" className="flex gap-1 text-amber-50">
                        {props.title}
                        <GoToSVG />
                    </a>
                </div>
                <p>NỘI DUNG</p>
                <p className="card-content__decription">{props.decript}</p>
                <a
                    className="card-content__go-to px-2 py-3 text-amber-50"
                    target="_blank"
                    href=""
                >
                    Xem bài tập
                </a>
            </div>
        </div>
    );
}

export default EssayPreview;
