import React from 'react'
import aboutbg from "../assets/aboutbg.png"
const About = () => {
  return (
    <div className="relative min-h-screen w-full p-3 pt-10 sm:p-10 md:pt-28">
      {/* Background Image */}
      <img
        src={aboutbg}
        alt="Background texture"
        fill="true"
        className="object-cover opacity-60 absolute inset-0 bg-cover bg-center h-full w-full"
        loading='lazy'
      />
      
      {/* Content Grid */}
      <div className="relative grid gap-14 md:grid-cols-3 mb-20">
        {/* University Section */}
        <div className="bg-transparent relative rounded-2xl border border-black shadow-sm p-4">
          <div className="bg-gradient-to-r from-[#3CD2FF] to-[#342499] text-white p-3 relative -top-10 rounded-2xl text-center font-bold">
            ABOUT THE UNIVERSITY
          </div>
          <p className="text-sm">
          We are honoured to host the 7th Forensis Agora – 3rd International Conference on “Beyond the evidence: Reflecting on forensic innovations to shape the future of criminal justice”, scheduled for 08–09 February 2025 in collaboration with our MOU partner Forensic Experts Pvt. Ltd. at Galgotias University, Greater Noida. This prestigious event is meticulously curated for professionals and experts from diverse fields, including criminal investigation, legal practice, research, and academia.
The conference aspires to be a dynamic platform that unites the scientific and legal communities to explore and discuss groundbreaking advancements in the realm of forensic science and its interplay with the law. Over two enriching days, participants will engage in plenary lectures, invited talks, panel discussions, and paper/poster presentations, showcasing cutting-edge research and innovations.
Representatives from renowned forensic science and legal institutions will converge to foster dialogue, collaboration, and knowledge exchange. Join us as we embark on this academic journey to illuminate new horizons in forensic science and legal integration, promising an unforgettable experience for all attendees.
          </p>
        </div>

        {/* School Section */}
        <div className="bg-transparent rounded-2xl border border-black shadow-sm p-4">
          <div className="bg-gradient-to-r from-[#3CD2FF] to-[#342499] text-white p-3 rounded-2xl relative -top-10 text-center font-bold">
            ABOUT THE SCHOOL
          </div>
          <p className="text-sm">
          The School of Biosciences and Technology (SBT) at Galgotias University, Greater Noida, is a hub of excellence, committed to advancing education and research in the dynamic fields of biosciences and biotechnology. Through its comprehensive undergraduate, postgraduate, and doctoral programs, SBT nurtures future-ready professionals for impactful careers in biotechnology, healthcare, agriculture, and environmental sciences.<br/> <br/>

SBT encompasses a diverse range of specialized departments, including the Department of Biotechnology, Department of Microbiology, Department of Bioinformatics, Department of Environmental Science, and Department of Forensic Science. These departments provide a holistic understanding of biological sciences and foster interdisciplinary collaboration. <br /> <br />

Equipped with state-of-the-art laboratories, cutting-edge research facilities, and robust industry partnerships, SBT ensures that students gain both theoretical expertise and hands-on experience. With an emphasis on research-driven education, the school empowers students to drive innovations that tackle global challenges in healthcare, sustainable agriculture, and environmental conservation, making them pioneers in shaping a better future.
          </p>
        </div>

        {/* Department Section */}
        <div className="bg-transparent rounded-2xl border border-black shadow-sm p-4">
          <div className="bg-gradient-to-r from-[#3CD2FF] to-[#342499] text-white p-3 rounded-2xl relative -top-10 text-center font-bold">
            ABOUT THE DEPARTMENT
          </div>
          <p className="text-sm">
          We are honoured to host the 7th Forensis Agora – 3rd International Conference on “Beyond the evidence: Reflecting on forensic innovations to shape the future of criminal justice”, scheduled for 08–09 February 2025 in collaboration with our MOU partner Forensic Experts Pvt. Ltd. at Galgotias University, Greater Noida. This prestigious event is meticulously curated for professionals and experts from diverse fields, including criminal investigation, legal practice, research, and academia.
The conference aspires to be a dynamic platform that unites the scientific and legal communities to explore and discuss groundbreaking advancements in the realm of forensic science and its interplay with the law. Over two enriching days, participants will engage in plenary lectures, invited talks, panel discussions, and paper/poster presentations, showcasing cutting-edge research and innovations.
Representatives from renowned forensic science and legal institutions will converge to foster dialogue, collaboration, and knowledge exchange. Join us as we embark on this academic journey to illuminate new horizons in forensic science and legal integration, promising an unforgettable experience for all attendees.
          </p>
        </div>
      </div>

      {/* Conference Section */}
      <div className="relative bg-transparent rounded-2xl border border-black shadow-sm p-4 max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-[#3CD2FF] to-[#342499] text-white p-3 rounded-2xl relative -top-10 text-center font-bold">
          ABOUT THE CONFERENCE
        </div>
        <p className="text-sm">
        We are honoured to host the <span className='font-bold'> 7th Forensis Agora – 3rd International Conference on “Beyond the evidence: Reflecting on forensic innovations to shape the future of criminal justice”, scheduled for 08–09 February 2025 at Galgotias University, Greater Noida.</span> This prestigious event is meticulously curated for professionals and experts from diverse fields, including criminal investigation, legal practice, research, and academia. The conference aspires to be a dynamic platform that unites the scientific and legal communities to explore and discuss groundbreaking advancements in the realm of forensic science and its interplay with the law. Over two enriching days, participants will engage in plenary lectures, invited talks, panel discussions, and paper/poster presentations, showcasing cutting-edge research and innovations. Representatives from renowned forensic science and legal institutions will converge to foster dialogue, collaboration, and knowledge exchange. Join us as we embark on this academic journey to illuminate new horizons in forensic science and legal integration, promising an unforgettable experience for all attendees.
        </p>
      </div>
    </div>
  )
}

export default About