import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:ssharma18_be22@thapar.edu';
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/samdeep_.s/', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/samdeep-sharma-20894b283/', '_blank');
  };
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="text-center mb-5">
            <h2 className="mb-3">About iNotebook Cloud</h2>
            <p className="lead">Welcome to iNotebook Cloud, a secure and reliable cloud-based application for managing and storing your notes with enhanced security and authentication features. Our mission is to provide a seamless and intuitive note-taking experience while prioritizing the privacy and security of your valuable data.</p>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="feature text-center">
                <h3>Secure Cloud Storage</h3>
                <p>iNotebook Cloud leverages cutting-edge encryption technology to securely store your notes in the cloud.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature text-center">
                <h3>End-to-End Encryption</h3>
                <p>Your notes are encrypted using strong, end-to-end encryption techniques for maximum security.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature text-center">
                <h3>Authenticated User Access</h3>
                <p>We employ robust user authentication mechanisms to ensure secure access to iNotebook Cloud.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <p>Join thousands of users who trust iNotebook Cloud for their note-taking needs. Sign up today to experience the convenience of cloud-based note storage with top-notch security and privacy.</p>
          </div>
        </div>
        <div className="connect-with-us text-center mt-5">
          <h2 className='py-3'>Connect With Us</h2>
          <div className="social-icons">
            <button className="btn mx-1" onClick={handleInstagramClick}>
              <FaInstagram size={30} />
            </button>
            <button className="btn mx-1" onClick={handleLinkedinClick}>
              <FaLinkedin size={30} />
            </button>
            <button className="btn mx-1" onClick={handleEmailClick}>
              <FaEnvelope size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
