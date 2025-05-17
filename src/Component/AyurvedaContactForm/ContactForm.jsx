import React, { useEffect, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [accessKey, setAccessKey] = useState('');

  useEffect(() => {
    const key = import.meta.env.VITE_WEB3FORM_ACCESS_KEY;
    setAccessKey(key);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setStatus('Sending...');

    formData.append('access_key', accessKey);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      setStatus('Message sent successfully!');
      e.target.reset();
    } else {
      setStatus('Failed to send message. Please try again.');
      console.error(result);
    }
  };

  return (
    <>
      <div className=''>
        <h2>Contact Us - Ayurveda Inquiry</h2>
        <form onSubmit={handleSubmit}>

          <div>
            <label>Name: </label>
            <input type="text" name="name" required placeholder='Enter Name'/>
          </div>

          <div>
            <label>Email: </label>
            <input type="email" name="email" required placeholder='Enter Email'/>
          </div>

          <div>
            <label>Phone: </label>
            <input type="tel" name="phone" placeholder='Enter Phone No' required/>
          </div>

          <div>
            <label>Subject: </label>
            <input type="text" name="Subject" placeholder='Please Fill Required Subject' required/>
          </div>

          <div>
            <label>Message</label>
            <textarea name="Message" placeholder='Message...' required></textarea>
          </div>
          <div>
            <label>
              <input type="checkbox" name="newsletter" value="yes" />
              Subscribe to our newsletter
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>

        <p>{status}</p>
      </div>
    </>
  );
}
