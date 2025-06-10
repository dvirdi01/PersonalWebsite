import React from 'react'
import CommonButton from './CommonButton'

const ContactForm = () => {
    return (
        <form className="max-w-sm mx-auto min-h-screen">
            <div className="mb-5">
                <label for="name" className="block text-sm mb-2 font-medium text-white ">Your Name </label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Awesome Stranger" required />
            </div>
            <div className="mb-5">
                <label for="email" className="block text-sm mb-2 font-medium text-white ">Your Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="yourname@gmail.com" required />
            </div>
            <div className="mb-5">
                <label for="message" className="block w-full mb-2 text-sm font-medium text-white">Message </label>
                <textarea id="message" rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Type your message here..." required></textarea>
            </div>
            <div className='max-w-sm flex items-center justify-center'>
                <CommonButton label="Submit"/>
            </div>
            {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button> */}
        </form>
    )
}

export default ContactForm