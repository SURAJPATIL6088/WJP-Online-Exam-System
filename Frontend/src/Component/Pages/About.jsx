import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../Styling/About.css";

const About = () => {
  const teamMembers = [
    { id: 1, name: 'Aarya', role: 'Frontend Developer', bio: 'Passionate about education technology', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Suraj', role: 'Backend Developer', bio: 'Expert in creating interactive learning platforms', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Nikhil', role: '--------', bio: 'Creates beautiful and intuitive interfaces', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
    <Container className="about-page">
      <section className="about-section">
        <Row className="align-items-center">
          <Col md={6}>
            <p id='first'>
              <i>Vidyarthi is an innovative online exam platform designed to make learning fun and engaging.</i>
            </p>
            <p className='para'>
              <i>Our mission is to provide high-quality exams across various subjects to help people test their knowledge,
              prepare for exams, or simply learn something new in an interactive way.
            </i></p>
            <p className='para'><i>
              Founded in 2025, we've grown to serve thousands of users worldwide with our constantly expanding library
              of exams created by subject matter experts.</i>
            </p>
          </Col>
          <Col md={6}>
            <div className="about-image">
              <img src="src/assets/vidyarthi.png" alt="About QuizMaster" className="img-fluid rounded" />
            </div>
          </Col>
        </Row>
      </section>

      <div className="card-section">
        <div className="info-card">
          <img src="aarya.jpg" alt="Aarya Dange" />
          <h4>Aarya Sanjay Dange</h4>
          <h4>( Frontend )</h4>
          
          <p className='para'>Designed and developed user interface (UI) to ensure a smooth, interactive experience. 
Used HTML, CSS, JavaScript, and front-end frameworks (React, Bootstrap) for UI development.
</p>
    
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aryadange25@gmail.com" target="_blank" style={{ marginRight: '15px' }}><img src='https://cdn.prod.website-files.com/65cb81aae9d01da14d71fff3/66a8ba985871ad1734767269_Group%201000004643.png' id='logo'/></a>
          <a href="https://www.linkedin.com/in/aarya-dange-6272b7231" target="_blank" style={{ marginRight: '15px' }}><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAfrv///8AdbcAd7gAeLioyODX5vHF2uq10OXB2OkAfLoAcbUAerkAc7b7/f7y9/tFk8Uehb9sps54rNJVmsnm8PaDs9WWvdoxi8Gfw92OudjP4O70+Ps7j8Ndnsvh7PQmh78AaLFjosxY5DW2AAAGLUlEQVR4nO2d6XaiMBhAySJIEmQXce30/R9yQGuLiCYtiSY53/035wxj7mTfvgTojjRuiiwPXCPPiiZO73WC0Z/37YZjKhh7d4J/DWOCYr5px5K3hnXBqXtuQxjlRf3QcFVy8e4UakDwcjVtGFH67sRpgtJoynDN3S6fQxhf3xtW5N3J0gqpxoaZLyX0Cs1uDSvfBDvFami49quIXiDrH8OIvzs1RuDR1XDleC//CEZXX4alf5XwAi0vhrWfZbSH12fDwoeh2jSi6A1Tf7Owy8R9Z9j6Wgt7aNsZbvxsSC+wDQq8LqRdMU2DGL87EUbBcdD4XA27itgEHvcVPaIIMp8bmq6pyYLcc0P3lkUBAADch1GCOwj1c5wgSJJtl7sw3C2bI8beSQpexcM9nV3BvRrSsuR4QiPSMvFnQCRYNPbrOW18yUaSraYE+5XI5N1p0wIpHvh1tD6sETwT7BTdz0WRPRPsCqrr2zpMPKqDV1xfrUsmW9Ehjm8LiEomiNDW6T6Dh3LDlcuNDZM0MxfWDmciWaoYnhzORC5rSC+4u6KlVki7YursVIqu5XY9S2d7fbVqiFDo7P4OkXb3F1Jnmxqs0Bv27L03XDk7cMM77/Mwltv1nJxtaWirZhg521uIp9P7H9w9ssKYmmHl7JhGsTF1efqkNmxzd9DWb8WoGDq9UkMUWtOds31FDyPyGeKHy1nYdRifMsHW6SzsSCQzKJeXML54vty2d7cr/Ibhu63DgaAXh6pY8nCKUQceZGHQ3wVrpgWX/uwC481EZUwr9xuZH1hyHDmeSo9uLJ4RON/u9l96YXvw4krtGIo5O1RVlnPs6V2p4Hwp3MW77AAAAAAAWEYfZwbjpAdjQqjwanzBKE4OZRuHdZru07QOo8X2GHDiyxiR8k0zNdfeR9sPk6GBBJHxp8/Gezkiydt6Qu+6mNB+JIYmM6JcSoinfln62e1hOJZk0iMD4aeZCRtZyH4ZTa2XUtlnwy1HlhyUdoDqwsSk+wWGVCgeakHodNC//GzekCtuw15YaF/8Mm3IVM8KXKlzzRvOhg1F/qQBfcBR73alWUOqeDTwFr23PIwakuNfBBFa61Q0afhXQb1XIAwaUoVT8o846mtuzBmKzd8FEdK352XMEJO95K88Rd8tD2OG/xRPBT5C2+a6KcO4nCeI0EFTOTVluFO7BfCEk6ZyaspQA5oiz1hsWOvp9y021JSJNhvqqYk2G+ppTq021HLs02pDLUd3rTZERw1tjd2GOoqp3YY6giLabajjbqflhuX8ivgyw3oXL5fx7pdLbxoq4ksMw22WJLjfsMEJqRa/mBpruNv5AsPlRzLcOxOEl8qOGnpE44Zhju/GXhQrfx7MHriZNtxObyclqksA869cGTb8fFSPnkfF+WF+Y2rW8PNxU4i3Sv/C/LAjRg2bZ+2EStARhBazuwuThuHTMRfLVQznd4gmDSV33rDK1vD8C7oGDZey3lolE+dfnDNoKN16ULksP39QY85Q/r8vFDpFmw3lPRkTbhsqnONSuGhtsWGoMGZW+HGLDVWiFChURIsNVZbk2cFlQ6X70fLL8hYbKk1duXQqbK+hWuAlLF22sddQ7Qq4vLuw11AtZfJxm72GkVLK5MHGLDZUmvUQ6dFMMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMNRtSLehhNNUWqWfLZSiPdBW9usaQvD072k850+fKYazkP66w08RAwAAuIMXz/k+huVB5rlhFmiKGG0roggazU+aWAZtgnj2wNVqcBzoCHFqMTwNZPG23IZtUKAUJsZZaNsZ7n0upnzfGep6YcBGRIF6Q33PmVgHr8+GqPS1JtI+ylRvuPLlDcwRjK6+DFHkZznl58gvZ0O09nE5h6zRjyGq/KuK1wfBvgxR5pvi96N8V0NU+VVQyfeTbt+GaG3iEdM3wfga3RuiiPpSUikdxM8aGKJVaea93RcjeDl8DmxoeH5v1/Hen1Fe3IbpuzVEaN9uOKaCuefJ+jfZ+aZNR0Zjw440bopMw9MfLybPiiYe63X8B12BcdmLsGMEAAAAAElFTkSuQmCC' id='logo'></img></a>
          <a href="https://github.com/AaryaDange" target="_blank"><img src='data:image/png;base64,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' id='logo'></img></a>
          
        </div>
        <div className="info-card">
          <img src="Suraj_KH.jpg" alt="Suraj Patil" />
          <h4>Suraj Balaram Patil</h4>
          <h4>( Full Stack Developer )</h4>
          
          <p className='para'>I have expertise in full-stack web java development, and MERN stack development. I am knowledgeable in various programming languages, frameworks, and technologies and strive to create high-quality.
</p>
    
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Surajpatil6088@gmail.com" target="_blank" style={{ marginRight: '15px' }}><img src='https://cdn.prod.website-files.com/65cb81aae9d01da14d71fff3/66a8ba985871ad1734767269_Group%201000004643.png' id='logo'/></a>
          <a href="https://www.linkedin.com/in/suraj-patil6088/" target="_blank" style={{ marginRight: '15px' }}><img src='data:image/png;base64,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' id='logo'></img></a>
          <a href="https://github.com/SURAJPATIL6088" target="_blank"><img src='data:image/png;base64,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' id='logo'></img></a>
          
        </div>
        <div className="info-card">
          <img src="nikhil.jpg" alt="Nikhil Jadhav" />
          <h4>Nikhil Anil Jadhav</h4>
          <h4>( Frontend )</h4>
          
          <p className='para'>Designed and developed user interface (UI) to ensure a smooth, interactive experience. 
Used HTML, CSS, JavaScript, and front-end frameworks (React, Bootstrap) for UI development.
</p>
    
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilaniljadhav777@gmail.com" target="_blank" style={{ marginRight: '15px' }}><img src='https://cdn.prod.website-files.com/65cb81aae9d01da14d71fff3/66a8ba985871ad1734767269_Group%201000004643.png' id='logo'/></a>
          <a href="https://www.linkedin.com/in/nikhil-jadhav-153a5519" target="_blank" style={{ marginRight: '15px' }}><img src='data:image/png;base64,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' id='logo'></img></a>
          <a href="https://github.com/79056nikhil" target="_blank"><img src='data:image/png;base64,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' id='logo'></img></a>
          
        </div>
      </div>
    <br/><br/><br/>
      <section className="mission-section">
        <Card className="mission-card">
          <Card.Body>
            <h2 className="text-center mb-3" id='h2'>Our Mission</h2>
            <>
              <p id='cardp'>
              Our mission is to make learning more accessible, interactive, and effective through smart exam technology.
We aim to create an environment where individuals can test, track, and enhance their knowledge with ease.
By combining innovation with education, we empower learners to grow confidently at their own pace.</p>
            </>
          </Card.Body>
        </Card>
      </section>
    </Container>


    <style>{`
    #logo{
      height:30px;
      width:30px;
      border: 1px solid #ddd;
      border-radius: 4px;
      // padding: 5px;
      
    }
      .card-section {
         margin-left:5%;
         margin-right:5%;
          display: flex;
          justify-content: space-between;
          gap: 90px;
          // width:90%;
          margin-top: 50px;
        }

        .info-card {
          text-align:center;
          flex: 1;
          border: 1px solid #333;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          
        }
          .info-card a{
            text-decoration:none;
          }

        .info-card:hover {
          border-color:rgb(159, 80, 76);
        }

        .info-card img {
          width: 40%;
          height: 130px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        .info-card h3 {
          margin-bottom: 10px;
          color: rgb(226, 55, 89);
        }
          .info-card h4 {
          margin-bottom: 10px;
          color: rgb(226, 55, 89);
        }

        .info-card p {
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .card-section {
            flex-direction: column;
          }

          .info-card {
            width: 100%;
          }
        }
      `}</style></div>
  );
};

export default About;