function Hero(props) {
    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="flex w-1/2 flex-col items-center justify-center">
                    <div className="flex flex-col gap-1 text-3xl">
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
                <div className="flex w-1/2 items-center justify-center bg-[url('https://science.nasa.gov/wp-content/uploads/2023/06/webb-flickr-52259221868-30e1c78f0c-4k-jpg.webp')]">
                    <button>
                        <img
                            className="h-200"
                            src={props.previewImg}
                            alt="ảnh duPO"
                        />
                    </button>
                </div>
            </div>
            {/* <div className="columns-2">
        <div id="hero-slogan">
          <div className="">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.profileUrl}
            >
              This is <span>duPO's</span> galaxy
            </a>
            <span>
              W/ my hand in the{" "}
              <span className="ocean-easter-eggs">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.refUrl}
                >
                  O C E A N
                </a>
              </span>
            </span>
          </div>
        </div>
        <div id="hero-preview">
          <div id="dupo-galaxy">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={props.profileUrl}
            >
              <img className="img-dupo" src={props.previewImg} alt="" />
            </a>
          </div>
        </div>
      </div> */}
        </>
    );
}

export default Hero;
