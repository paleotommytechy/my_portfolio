import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {BsLinkedin, BsGithub, BsFacebook, BsWhatsapp} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import { toast, ToastContainer } from 'react-toastify';


const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_u8qd6ni',
        'template_3n89vr8',
        form.current,
        'sH53aZOAev148aQVy'
      )
      .then(
        () => toast.success(' Message sent successfully!'),
        () => toast.error('Failed to send. Try again.')
      );

    form.current.reset();
  };

  return (
    <section id="contact" className="py-5">
      <div className="text-center mb-4" data-aos="fade-up">
        <h2 className="fw-bold">📬 Contact Me</h2>
        <p className="text-muted">Have a project or question? Let’s chat!</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form ref={form} onSubmit={sendEmail} className="p-4 border rounded bg-body shadow-sm">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" name="user_name" className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" name="user_email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea name="message" className="form-control" rows={5} required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send</button>

            <ToastContainer position="top-right" autoClose={3000} />

            
          </form>

          <div className="text-center mt-4" data-aos="fade-up">
            <p>Or reach out on:</p>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://github.com/paleotommytechy" target="_blank" rel="noreferrer">
                <BsGithub size={30} />
              </a>
              <a href="https://linkedin.com/in/olusegun-ifeoluwa" target="_blank" rel="noreferrer">
                <BsLinkedin size={30} color="#0A66C2" />
              </a>
              <a href="https://wa.me/2349028168649" target="_blank" rel="noreferrer">
                <BsWhatsapp size={30} color="#25D366"/>
              </a>
              <a href="https://facebook/" target="_blank" rel="noreferrer">
                <BsFacebook size={30} />
              </a>

              <a href="mailto:olusegunifetomiwa2000@gmail.com">
                <FcGoogle size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
