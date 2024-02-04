import React from 'react';
import './AboutUsPage.css';

// Array of team members
const teamMembers = [
  { name: 'John Doe', role: 'Marketing Director', image: 'https://media.licdn.com/dms/image/C4D03AQGQekraBuJxuQ/profile-displayphoto-shrink_800_800/0/1654247232474?e=2147483647&v=beta&t=-GLp3blIuoOASEsVIntmqrf4Q-r8-u9AL9MmAEwrJok' },
  { name: 'Jane Smith', role: 'SEO Specialist', image: 'https://media.licdn.com/dms/image/D4D03AQGZCGQ387Jvew/profile-displayphoto-shrink_400_400/0/1689804636851?e=2147483647&v=beta&t=EY2ag79Xxsz-FGg4Tkekex3WlWmGBAw6OGjQxMzUT9A' },
  { name: 'Michael Johnson', role: 'Content Writer', image: 'https://chartwellspeakers.b-cdn.net/wp-content/uploads/2013/11/Michael-Johnson-Speaker.jpg' },
  { name: 'Emily Wilson', role: 'Social Media Manager', image: 'https://media.licdn.com/dms/image/C4E03AQH8_Guuf6Hj_w/profile-displayphoto-shrink_800_800/0/1620671841621?e=2147483647&v=beta&t=Ic426mnsHr9Fz7dkTTT3NKK33F4wHXe_tQonwwwQS2U' },
  { name: 'David Brown', role: 'Graphic Designer', image: 'https://media.licdn.com/dms/image/D5603AQEu0ucIml8pmQ/profile-displayphoto-shrink_800_800/0/1687540855907?e=2147483647&v=beta&t=Ti1iEKJr6NcMzupYQ2GKukvhv0Ge0aQ0-WXontHGIH8' }
];

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="content">
        <h2>About Our Company</h2>
        <p>
        Welcome to our digital marketing agency, where we blend creativity, innovation, and strategy to deliver exceptional results for our clients. With a dedicated team of experts and a passion for digital marketing, we strive to make a meaningful impact in the online world.        </p>
        <h3>Our Mission</h3>
        <p>
        At our core, our mission is to empower businesses to thrive in the digital landscape. We believe in leveraging the latest technologies and trends to help our clients achieve their goals and reach their target audience effectively. Whether it's increasing brand awareness, driving website traffic, or generating leads, we're committed to delivering measurable results that drive growth and success.        </p>
        <h3>Meet Our Team</h3>
        <ul className="team-list">
          {teamMembers.map((member) => (
            <li key={member.name} className='team-list-item'>
              <img src={member.image} alt={member.name} />
              <div className="member-info">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;
