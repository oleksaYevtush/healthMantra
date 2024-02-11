import "../../index.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import arrowIcon from "@/assets/arrow.gif";

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300;

  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }

  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });

  slider.on("detailsChanged", rotate);
};

export default function App() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1">Harmony  </div>
          <div className="carousel__cell number-slide2">Within</div>
          <div className="carousel__cell number-slide3">Wellness</div>
          <div className="carousel__cell number-slide4">Throughout:</div>
          <div className="carousel__cell number-slide5">Yoga</div>
          <div className="carousel__cell number-slide6">Hub</div>
        </div>
        <div className="flex justify-center mt-[330px]">
          <img src={arrowIcon} alt="Arrow Icon" className="w-[35px] h-[35px]" style={{ zIndex: 1000 }} />
        </div>
      </div>
    </div>
  );
}
