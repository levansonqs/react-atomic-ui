import React from "react";

function Carousel({ images }) {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive(nextValue());
    }, 1000);
    return () => clearInterval(timer);
  });

  function nextValue() {
    if (active >= 0 && active <= images.length - 2) return active + 1;
    else return 0;
  }

  function preValue() {
    if (active >= 1 && active <= images.length - 1) return active - 1;
    else return images.length - 1;
  }

  function handleActive(index) {
    setActive(index);
  }

  function handlePrev() {
    setActive(preValue());
  }

  function handleNext() {
    setActive(nextValue());
  }
  return (
    <div className="carousel relative">
      {images.map((image, index) => (
        <div className={active === index ? "block" : "hidden"} key={index}>
          <img src={image} />
        </div>
      ))}
      <ul className="carousel-link absolute">
        {images.map((image, index) => (
          <li
            key={index}
            className={
              active === index
                ? "font-bold text-white text-2xl mr-2"
                : "text-gray text-2xl mr-2"
            }
            onClick={() => handleActive(index)}
          >
            -
          </li>
        ))}
      </ul>
      <div
        className="text-gray text-2xl mr-2 absolute text-white carousel-left"
        onClick={handlePrev}
      >
        &lt;
      </div>
      <div
        className="text-gray text-2xl mr-2 absolute text-white carousel-right"
        onClick={handleNext}
      >
        &gt;
      </div>
    </div>
  );
}

export default Carousel;
