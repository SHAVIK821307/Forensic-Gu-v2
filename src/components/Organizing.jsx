import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import organizingimg from "../assets/organizingimg.png";
import vinnySharma from "../assets/vinnySharma.jpeg";
import amitabhBiswas from "../assets/amitabhBiswas1.jpeg";
import anugyaAgrawal from "../assets/anugyaAgrawal.jpeg";
import dhruvGalgotia from "../assets/dhruvGalgotia.jpeg";
import mudassirNazir from "../assets/mudassirNazir.jpeg";
import nitinGaur from "../assets/nitinGaur.jpg";
import poojaKataria from "../assets/poojaKataria.png";
import shivaniTyagi from "../assets/shivaniTyagi.jpeg";
import shwetaSharma from "../assets/shwetaSharma.png";
import ankitSingh from "../assets/ankitSingh.jpeg";
import suneelGalgotia from "../assets/suneelGalgotia.png";
import aradhanaGalgotia from "../assets/aradhanaGalgotia.jpeg";
import namitaSinghMalik from "../assets/namitaSinghMalik.jpeg";
import abhimanyuKumarJha from "../assets/abhimanyuKumarJha.jpeg";
import avadeshKumar from "../assets/avadeshKumar.jpeg";
import kayalaMallikharjunaBabu from "../assets/kayalaMallikharjunaBabu.jpeg";
import rajeevKumar from "../assets/rajeevKumar.jpeg";
import neeharikaSrivastava from "../assets/neeharikaSrivastava.jpeg";
import amandeepKaurBhambara from "../assets/amandeepKaurBhambara.jpeg";
import kajolBhati from "../assets/kajolBhati.jpg";
import ayushiSingh from "../assets/ayushiSingh.jpg";
const teamMembers = [
  {
    id: 1,
    name: "Sh. Suneel Galgotia",
    role: "Hon'ble Chancellor",
    image: suneelGalgotia,
  },
  {
    id: 2,
    name: "Dr. Dhruv Galgotia",
    role: "Hon'ble CEO",
    image: dhruvGalgotia,
  },
  {
    id: 3,
    name: "Mrs. Aradhana Galgotia",
    role: "Director Operations",
    image: aradhanaGalgotia,
  },
  {
    id: 4,
    name: "Prof. (Dr.) Kayala Mallikharjuna Babu",
    role: "Hon'ble Vice-Chancellor",
    image: kayalaMallikharjunaBabu,
  },
  {
    id: 5,
    name: "Prof. (Dr.) Avadesh Kumar",
    role: "Pro Vice-Chancellor",
    image: avadeshKumar,
  },
  {
    id: 6,
    name: "Dr.Nitin Gaur",
    role: "Registrar",
    image: nitinGaur,
  },
  {
    id: 7,
    name: "Prof. (Dr.) Abhimanyu Kumar Jha",
    role: "Dean, School of Bio Sciences & Technology",
    image: abhimanyuKumarJha,
  },
  {
    id: 8,
    name: "Prof. (Dr.) Rajeev Kumar",
    role: "Conference Organizing Secretary, Professor & Head, Dept. of Forensic Science",
    image: rajeevKumar,
  },
  {
    id: 9,
    name: "Dr. (Mrs.) Vinny Sharma",
    role: "Conference Organizing Secretary, Associate Professor & PC -PG (Forensic Science)",
    image: vinnySharma,
  },
  {
    id: 10,
    name: "Dr. Kajol Bhati",
    role: "Conference Organizing Secretary, Assistant Professor & PC -UG (Forensic Science)",
    image: kajolBhati,
  },
  {
    id: 11,
    name: "Mr. Ankit Singh",
    role: "Conference Organizing Secretary, Assistant Professor (Forensic Sciences)",
    image: ankitSingh,
  },
  {
    id: 12,
    name: "Prof. (Dr.) Namita Singh Malik",
    role: "Professor (SOL)",
    image: namitaSinghMalik,
  },
  {
    id: 13,
    name: "Dr. Shweta Sharma",
    role: "Assistant Professor (Forensic Science)",
    image: shwetaSharma,
  },
  {
    id: 14,
    name: "Dr. Pooja Kataria",
    role: "Assistant Professor (Forensic Science)",
    image: poojaKataria,
  },
  {
    id: 15,
    name: "Dr. Neeharika Srivastava",
    role: "Associate Professor (Forensic Science)",
    image: neeharikaSrivastava,
  },
  {
    id: 16,
    name: "Dr. Shivani Tyagi",
    role: "Assistant Professor (Forensic Science)",
    image: shivaniTyagi,
  },
  {
    id: 17,
    name: "Dr. Amandeep Kaur Bhambara",
    role: "Assistant Professor (Forensic Science)",
    image: amandeepKaurBhambara,
  },
  {
    id: 18,
    name: "Dr. Amitabh Biswas",
    role: "Associate professor (Forensic Science)",
    image: amitabhBiswas,
  },
  {
    id: 19,
    name: "Dr. Anugya Agrawal",
    role: "Assistant Professor (Forensic Science)",
    image: anugyaAgrawal,
  },
  {
    id: 20,
    name: "Ms. Ayushi Singh",
    role: "Assistant Professor (Forensic Science)",
    image: ayushiSingh,
  },
  {
    id: 21,
    name: "Dr. Mudassir Nazir",
    role: "Assistant Professor (SOL)",
    image: mudassirNazir,
  },
];

export default function Organizing() {
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
      id="ourteam"
      style={{
        backgroundImage: `url(${organizingimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          MEET ORGANIZING TEAM
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] min-w-0 px-3"
              >
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <div className=" h-[290px] mb-2 w-full rounded-md" style={{
                          backgroundImage: `url(${member.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "top"
                        }}>
                    
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
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
            className="bg-transparent p-3 border rounded-md border-white hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </button>
          <button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="bg-transparent p-3 border rounded-md border-white hover:bg-white/10"
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
