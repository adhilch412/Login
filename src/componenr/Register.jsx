import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Registration() {
    const navigate=useNavigate()
    const [form,setform]=useState({
    name: '',
    email: '',
    password: '',
  })

    const handlechange=(e)=>{
        setform({...form,[e.target.name]: e.target.value})
    }

    const submit=(e)=>{
            e.preventDefault(); 

        alert("registration successfull")
        navigate("/Login")
    }
  return (
    <div>
        <div>
              <form
        onSubmit={submit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Register
        </h2>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handlechange}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handlechange}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handlechange}
            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
        </div>
        </div>
  )
}

export default Registration