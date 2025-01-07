

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instituteName: '',
    mobNo: '',
    additionalField1: '',
    additionalField2: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission here
  }

  return (
    <div className="container max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">CONTACT US</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="instituteName" className="block text-sm font-medium text-gray-700">
              Institute Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="instituteName"
              name="instituteName"
              required
              value={formData.instituteName}
              onChange={handleChange}
              className="mt-1 block w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
            Mobile Number (preferably whatsapp daal dijiye)<span className="text-red-500">*</span>
            </label>
            <input
            type='number'
              id="mobNo"
              name="mobNo"
              required
              value={formData.mobNo}
              onChange={handleChange}
              className="mt-1 block w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              
            </input>
          </div>

          <div>
            <input
              type="text"
              id="additionalField1"
              name="additionalField1"
              value={formData.additionalField1}
              onChange={handleChange}
              className="mt-1 block w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
              id="additionalField2"
              name="additionalField2"
              value={formData.additionalField2}
              onChange={handleChange}
              className="mt-1 block w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            type="submit" 
            className="bg-gradient-to-r from-[#3CD2FF] to-[#342499] hover:bg-blue-600 text-white px-8 py-2 rounded-full shadow-lg transition-all hover:shadow-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

