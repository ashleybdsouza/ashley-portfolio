import React, { useState } from 'react';
import './styles/Timeline.css';

const Timeline = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const timelineData = [
    { id: 1, year: 2009, event: 'Bachelor of Engineering from Mumbai University', details: 'Graduated with a degree in Computer Engineering. Learned fundamental principles of software development and computer science.' },
    { id: 2, year: 2011, event: 'Software Engineering Internship at Sun Valley Tech', details: 'Gained hands-on experience in software development. Worked on various projects involving web technologies and database management.' },
    { id: 3, year: 2012, event: 'MS in Computer Science From SUNY Buffalo', details: 'Pursued advanced studies in computer science, focusing on areas such as artificial intelligence, data structures, and algorithms.' },
    { id: 4, year: 2012, event: 'Software Engineer at Royal Cyber Inc', details: 'Started professional career as a software engineer. Worked on enterprise-level applications and improved coding skills.' },
    { id: 5, year: 2013, event: 'Software Engineer at Stratigent LLC', details: 'Specialized in data analytics and web tracking solutions. Developed expertise in handling large datasets and creating insightful reports.' },
    { id: 6, year: 2014, event: 'Software Engineer at General Motors', details: 'Contributed to automotive software systems. Gained experience in working with complex, large-scale projects in a corporate environment.' },
    { id: 7, year: 2015, event: 'Software Engineer at Ernst and Young', details: 'Worked on financial software solutions. Developed skills in creating secure and compliant applications for the finance sector.' },
    { id: 8, year: 2017, event: 'Technical Program Manager at Amazon', details: 'Transitioned to a leadership role. Managed large-scale technical projects and coordinated cross-functional teams to deliver innovative solutions.' },
    { id: 9, year: 2023, event: 'Program Manager at Crowdstrike', details: 'Currently leading cybersecurity initiatives. Combining technical expertise with project management skills to drive cutting-edge security solutions.' },
  ];

  return (
    <section id="timeline" className="section timeline">
      <h2>Timeline</h2>
      <div className="timeline-container">
        <div className="timeline">
          <div className="timeline-line"></div>
          {timelineData.map((data) => (
            <div 
              key={data.id} 
              className={`timeline-item ${selectedItem === data.id ? 'active' : ''}`}
              onClick={() => setSelectedItem(selectedItem === data.id ? null : data.id)}
            >
              <div className="timeline-content">
                {selectedItem === data.id && (
                  <div className="event-callout">
                    {data.event}
                  </div>
                )}
                <div className="point"></div>
                <span className="year">{data.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedItem && (
        <div className="event-details-container">
          <div className="event-details">
            <h3>{timelineData.find(item => item.id === selectedItem).event}</h3>
            <p>{timelineData.find(item => item.id === selectedItem).details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;