import React, { useState, useEffect } from 'react';
import './styles/Timeline.css';

const Timeline = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/timeline.json`)
      .then(response => response.json())
      .then(data => {
        setTimelineData(data.timelineData);
      })
      .catch(error => {
        console.error('Error loading timeline data:', error);
      });
  }, []);

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
            <h3>{timelineData.find(item => item.id === selectedItem)?.event}</h3>
            <p>{timelineData.find(item => item.id === selectedItem)?.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;