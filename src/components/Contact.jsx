import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_qzgn3tz', 'template_fsx0o17', form.current, {
            publicKey: 'hC6uNYFa9xlw96bvG',
        })
        .then (
            () => {
                console.log('SUCCESS!');
                setIsSubmitted(true);
                // Reset form fields
                form.current.reset(); 
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <>
            <Navbar />
            <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-300'>Contact</p>
                        <p className='text-gray-300 py-4'> To get in contact with us, Submit the form below or shoot an email - gathigidg26@gmail.com</p>
                    </div>
                    <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='user_name' />
                    <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email or Tel' name='user_email' />
                    <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                    <button className='text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Feedback</button>
                    {isSubmitted && <p className='text-green-500 bg-gray-200 p-2'>Form submitted successfully!</p>}
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
