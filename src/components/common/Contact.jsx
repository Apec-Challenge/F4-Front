import React from 'react';
import { Link } from 'react-router-dom';
import useContact from 'src/hook/common/useContact';

const Contact = () => {
  const { onChangeField, name, email, subject, message } = useContact();
  const onChangeName = e => onChangeField({ key: 'name', value: e.target.value });
  const onChangeEmail = e => onChangeField({ key: 'email', value: e.target.value });
  const onChangeSubject = e => onChangeField({ key: 'subject', value: e.target.value });
  const onChangeMessage = e => onChangeField({ key: 'message', value: e.target.value });
  return (
    <main id="main" className="site-main">
      <div className="page-title background-page">
        <div className="container">
          <h1>Say Hello!</h1>
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <span>/</span>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="page-content contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 main-content">
              <div className="entry-content">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="form-contact">
                      <h2>Drop US a line</h2>
                      <form action="s" method="POST" id="contactForm" className="clearfix">
                        <div className="clearfix">
                          <div className="field align-left">
                            <input
                              type="text"
                              value={name}
                              name="s"
                              placeholder="Your Name"
                              onChange={onChangeName}
                            />
                          </div>
                          <div className="field align-right">
                            <input
                              type="email"
                              value={email}
                              name="s"
                              placeholder="Your Email"
                              onChange={onChangeEmail}
                            />
                          </div>
                        </div>
                        <div className="field">
                          <input
                            type="text"
                            value={subject}
                            name="s"
                            placeholder="Subject"
                            onChange={onChangeSubject}
                          />
                        </div>
                        <div className="field-textarea">
                          <textarea
                            rows="8"
                            placeholder="Message"
                            value={message}
                            onChange={onChangeMessage}
                          />
                        </div>
                        <button type="submit" value="Send Messager" className="btn-primary">
                          Submit Message
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="contact-info">
                      <h3>Contact Infomation</h3>
                      <ul>
                        <li>
                          <i className="fa fa-map-marker" aria-hidden="true" />
                          Fulham Rd, Fulham, London SW6 1HS, UK
                        </li>
                        <li>
                          <i className="fa fa-phone" aria-hidden="true" />
                          (+1) 123.456.789
                        </li>
                        <li>
                          <i className="fa fa-mobile" aria-hidden="true" />
                          (+1) 987.654.321
                        </li>
                        <li>
                          <i className="fa fa-envelope-o" aria-hidden="true" />
                          sayhello@IdeaPresswp.com
                        </li>
                      </ul>
                      <div className="contact-desc">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing & typesetting industry.
                          Lorem Ipsum has been scrambled it to make type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
