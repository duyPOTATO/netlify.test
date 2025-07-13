function Hero(props) {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div>
          <span className="text-9xl text-amber-50">Text 1</span>
          <span>
            <span></span>
          </span>
        </div>
        <div>
          <button>
            <img src={props.previewImg} alt="ảnh duPO" />
          </button>
        </div>
      </div>
      <div className="columns-2">
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
      </div>
    </>
  );
}

export default Hero;
