import React from 'react'
import emailjs from 'emailjs-com';
import '../App.css';

const Email = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_1zbelp3', 'template_rl5v605', e.target, 'user_b3RorPcQVwrZwk3GR8Aom')
            .then((result) => {
                console.log('email successfully sent');
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <form className="email-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" className='meow' />
            <label>Email</label>
            <input type="email" name="user_email" className='meow' />
            <label>Message</label>
            <textarea name="message" className='meow' />
            <input type="submit" value="Send" />
        </form>
    );
}

export default Email
