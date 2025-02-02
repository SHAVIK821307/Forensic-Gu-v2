import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sponsorbg from "../assets/sponsorbg.png";
import sp1 from "../assets/sponsors/1.png"
import sp2 from "../assets/sponsors/2.png"
import sp3 from "../assets/sponsors/3.png"
import sp4 from "../assets/sponsors/4.png"
import sp5 from "../assets/sponsors/5.png"
import sp6 from "../assets/sponsors/6.png"
import sp7 from "../assets/sponsors/7.png"
import sp8 from "../assets/sponsors/8.png"
import sp9 from "../assets/sponsors/9.png"
import sp10 from "../assets/sponsors/10.png"
import sp11 from "../assets/sponsors/11.png"
import sp12 from "../assets/sponsors/12.png"
import sp13 from "../assets/sponsors/13.png"
import sp14 from "../assets/sponsors/14.png"
import sp15 from "../assets/sponsors/15.png"
import sp16 from "../assets/sponsors/16.png"
import sp17 from "../assets/sponsors/17.png"
import sp18 from "../assets/sponsors/18.png"
import sp19 from "../assets/sponsors/19.png"
import sp20 from "../assets/sponsors/20.png"
import sp21 from "../assets/sponsors/21.png"
import sp22 from "../assets/sponsors/22.png"
import sp23 from "../assets/sponsors/23.png"
import sp24 from "../assets/sponsors/24.png"
import sp25 from "../assets/sponsors/25.png"
import sp26 from "../assets/sponsors/26.png"
import sp27 from "../assets/sponsors/27.png"
import sp28 from "../assets/sponsors/28.png"
import sp29 from "../assets/sponsors/29.png"
import sp30 from "../assets/sponsors/30.png"
import sp31 from "../assets/sponsors/31.png"
const teamMembers = [
  {
    id: 1,
    image: sp1,
  },
  {
    id: 2,
    image: sp2,
  },
  {
    id: 3,
    image: sp3,
  },
  {
    id: 4,
    image: sp4,
  },
  {
    id: 5,
    image: sp5,
  },
  {
    id: 6,
    image: sp6,
  },
  {
    id: 7,
    image: sp7,
  },
  {
    id: 8,
    image: sp8,
  },
  {
    id: 9,
    image: sp9,
  },
  {
    id: 10,
    image: sp10,
  },
  {
    id: 11,
    image: sp11,
  },
  {
    id: 12,
    image: sp12,
  },
  {
    id: 13,
    image: sp13,
  },
  {
    id: 14,
    image: sp14,
  },
  {
    id: 15,
    image: sp15,
  },
  {
    id: 16,
    image: sp16,
  },
  {
    id: 17,
    image: sp17,
  },
  {
    id: 18,
    image: sp18,
  },
  {
    id: 19,
    image: sp19,
  },
  {
    id: 20,
    image: sp20,
  },
  {
    id: 21,
    image: sp21,
  },
  {
    id: 22,
    image: sp22,
  },
  {
    id: 23,
    image: sp23,
  },
  {
    id: 24,
    image: sp24,
  },
  {
    id: 25,
    image: sp25,
  },
  {
    id: 26,
    image: sp26,
  },
  {
    id: 27,
    image: sp27,
  },
  {
    id: 28,
    image: sp28,
  },
  {
    id: 29,
    image: sp29,
  },
  {
    id: 30,
    image: sp30,
  },
  {
    id: 31,
    image: sp31,
  },
];

export default function Sponsors() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  const options = {
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1280) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, slidesPerView]);

  return (
    <div
      className="relative px-4 py-12 bg-teal-950"
      style={{
        backgroundImage: `url(${sponsorbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="sponsors"
    >
      <div className="absolute inset-0 bg-[#D9D9D9]/70 backdrop-blur-sm" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          SPONSORS
        </h2>

        <h3 className="text-center text-black mb-12 text-xl md:text-2xl font-bold">
          Supporters from different organizations who participated in remarkable
          events.
        </h3>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0 px-3"
              >
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <div className="h-[290px] w-full rounded-md" style={{
                          backgroundImage: `url(${member.image})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "top"
                        }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="bg-transparent p-3 border rounded-md border-black hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4 text-black" />
          </button>
          <button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="bg-transparent p-3 border rounded-md border-black hover:bg-white/10"
          >
            <ChevronRight className="h-4 w-4 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
