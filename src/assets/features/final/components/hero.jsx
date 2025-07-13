function Hero(props) {
    return (
        <>
            <div className="final-essay__hero flex flex-row items-center justify-between bg-gray-700">
                <div className="flex w-1/2 flex-col items-center justify-center">
                    <div className="flex flex-col gap-1 text-xs md:text-xl lg:text-2xl">
                        <span className="text-amber-50">
                            This is duPO's Galaxy
                        </span>
                        <span className="text-amber-50 italic">
                            "W/ my hand in the
                            <span className="font-bold text-cyan-500">
                                {' '}
                                O C E A N
                            </span>
                            "
                        </span>
                    </div>
                </div>
                <div className="flex w-1/2 items-center justify-center bg-[url('https://www.nasa.gov/wp-content/uploads/2023/06/stsci-01h1q2vfhvmajgh4wrnmk0dy52.png')] pt-10">
                    <button>
                        <img
                            className="h-70 md:h-150 lg:h-150"
                            src={props.previewImg}
                            alt="ảnh duPO"
                        />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Hero;
