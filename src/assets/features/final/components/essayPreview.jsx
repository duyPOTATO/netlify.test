import GoToSVG from '../../../images/svg.svg?react';

const EssayPreview = (props) => {
    return (
        <div
            className="essay-preview-card final-essay-section__article flex flex-col md:flex-row"
            id={props.day}
        >
            <h1 className="essay-preview-card__title mb-5 text-xl font-bold text-amber-50 italic md:mr-auto md:mb-0 lg:text-2xl">
                {props.day} - {props.dayend}
            </h1>
            <div className="card-content ml-auto flex w-full flex-col items-center justify-end text-amber-50 sm:w-9/12 md:w-8/12 md:items-start lg:w-7/12">
                <img
                    src={props.imgSource}
                    className="aspect-[4/3] h-full w-11/12 overflow-hidden rounded-lg object-cover sm:w-full md:aspect-[21/9] md:rounded-l-lg md:rounded-r-none"
                    alt="ảnh gì gì đó"
                />
                <div className="card-content__main mt-2 flex w-11/12 flex-col gap-2 sm:w-full md:mt-4">
                    <a
                        to="/"
                        className="text-amber-50md:text-xl flex w-full items-center gap-1 text-lg hover:cursor-pointer hover:border-blue-900 lg:text-2xl"
                    >
                        <span className="pr-1 uppercase">{props.title}</span> -
                        <span>{props.role}</span>
                        {/* <GoToSVG /> */}
                    </a>
                    {/* <p className="text-md w-full md:text-lg">NỘI DUNG</p> */}
                    <p className="card-content__decription text-md line-clamp-3 w-full text-justify italic md:text-lg">
                        {props.decript}
                    </p>
                    <a className="action-btn" target="_blank" href="">
                        Xem dự án
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EssayPreview;
