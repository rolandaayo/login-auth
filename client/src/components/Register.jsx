/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [isCreateLoading, setIsCreateLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsCreateLoading(true)
    axios.post("http://localhost:3000/register", {
      name,
      email,
      password
    })
      .then(res => {
        setIsCreateLoading(false)
        window.location.href = '/login'
      })
      .catch(err => {
        setIsCreateLoading(false)
        console.log(err)
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-800 font-['Google_Sans'] tracking-tight">Create Your Account ✍🏽</h2>
          <p className="mt-2 text-center text-sm text-gray-600 font-['Roboto']">Welcome back</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-['Google_Sans']">Full Name</label>
            <input
             onChange={(e)=> setName(e.target.value)}
              id="name" 
              name="name"
              type="text" 
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 font-['Roboto']" />
          </div>
          <div>
            <label htmlFor="email-address" 
            className="block text-sm font-medium text-gray-700 font-['Google_Sans']">Email address</label>
            <input 
            onChange={(e)=> setEmail(e.target.value)}
             id="email-address" 
             name="email" 
             type="email"
             required 
             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 font-['Roboto']" />
          </div>
          <div>
            <label 
            htmlFor="password" 
            className="block text-sm font-medium text-gray-700 font-['Google_Sans']">Password</label>
            <input
            onChange={(e)=> setPassword(e.target.value)}
             id="password" 
             name="password" 
             type="password"
             required
             minLength="6" 
             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 font-['Roboto']" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 font-['Roboto']">Remember me</label>
            </div>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500 font-['Google_Sans']">Forgot password?</a>
          </div>

          <button type="submit" disabled={isCreateLoading} className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 font-['Google_Sans'] transition-all duration-200">
            {isCreateLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : null}
            {isCreateLoading ? 'Creating Account...' : 'Create New Account'}
          </button>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 font-['Roboto']">Already have an account?</p>
            <a href="/login" className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-['Google_Sans'] transition-all duration-200">
              Log in
            </a>            
          </div>
        </form>
      </div>
    </div>
  )
}