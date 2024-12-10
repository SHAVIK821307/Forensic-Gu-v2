import React from "react"
import registrationbg from "../assets/registrationbg.png"


export default function RegistrationCharges() {
  const registrationOptions = [
    { type: "GU STUDENTS", price: 1000 },
    { type: "NON-GU STUDENTS", price: 1200 },
    { type: "ALUMINI", price: 1100 },
    { type: "RESEARCH SCHOLAR @GU", price: 1500 },
    { type: "RESEARCH SCHOLAR @NON-GU", price: 1700 },
    { type: "FACULTY @GU", price: 1200 },
    { type: "FACULTY @NON-GU", price: 2000 },
    { type: "INDUSTRIAL DELIGATES", price: 2500 },
  ]

  return (
    <div 
      className="min-h-screen p-6 relative"
      style={{
        backgroundImage: `url(${registrationbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      id="registration"
    >
      {/* Pink overlay */}
      <div className="absolute inset-0 bg-[#D35CE8]/70 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-[#AAED76] to-[#C24CC4] text-black max-w-2xl mx-auto text-center text-3xl font-bold p-4 rounded-2xl shadow-2xl mb-8">
          REGISTRATION CHARGES
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {registrationOptions.map((option) => (
            <div key={option.type} className="backdrop-blur-sm bg-white/10 rounded-2xl border border-white">
              <div className="p-6 flex flex-col items-center text-center text-white space-y-4">
                <h3 className="font-semibold text-lg">{option.type}</h3>
                <p className="text-3xl font-bold">₹{option.price}</p>
                <button className="bg-white hover:bg-gray-200  text-[#5779FF] font-bold rounded-2xl p-4 w-full">
                  REGISTER
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white mt-8 text-2xl font-bold">
          For bulk Registration please contact the team
        </p>
      </div>
    </div>
  )
}

