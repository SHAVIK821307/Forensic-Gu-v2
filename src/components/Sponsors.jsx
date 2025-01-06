import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sponsorbg from "../assets/sponsorbg.png";
const teamMembers = [
  {
    id: 1,
    name: "Member 1",
    role: "Role 1",
    image: "/placeholder.svg?height=297&width=233",
  },
  {
    id: 2,
    name: "Member 2",
    role: "Role 2",
    image: "/placeholder.svg?height=297&width=233",
  },
  {
    id: 3,
    name: "Member 3",
    role: "Role 3",
    image: "/placeholder.svg?height=297&width=233",
  },
  {
    id: 4,
    name: "Member 4",
    role: "Role 4",
    image: "/placeholder.svg?height=297&width=233",
  },
  {
    id: 5,
    name: "Member 5",
    role: "Role 5",
    image: "/placeholder.svg?height=297&width=233",
  },
  {
    id: 6,
    name: "Member 6",
    role: "Role 6",
    image: "/placeholder.svg?height=297&width=233",
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

        {/* <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0 px-3"
              >
                <div className="bg-[#000000]/50 p-2 rounded-lg shadow-lg">
                  <div className="h-[290px] w-full rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="flex justify-center gap-4 mt-6">
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
        </div> */}
      </div>
    </div>
  );
}
