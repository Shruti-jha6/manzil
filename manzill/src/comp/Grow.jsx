import React from 'react'

const Grow = () => {
    const courses = [
        { title: 'Advanced React Development', category: 'Tech Stack', link: 'https://example.com/react-course' },
        { title: 'Effective Leadership Strategies', category: 'Leadership', link: 'https://example.com/leadership-course' },
        { title: 'Mastering Communication Skills', category: 'Communication', link: 'https://example.com/communication-course' },
        { title: 'Effective Leadership Strategies', category: 'Leadership', link: 'https://example.com/leadership-course' },
        { title: 'Effective Leadership Strategies', category: 'Leadership', link: 'https://example.com/leadership-course' },
        { title: 'Mastering Communication Skills', category: 'Communication', link: 'https://example.com/communication-course' },
      ];
    
      return (
        <div style={styles.container}>
          <h2 style={styles.heading}>Grow Your Skills</h2>
          <div style={styles.coursesContainer}>
            {courses.map((course, index) => (
              <div key={index} style={styles.courseCard}>
                <h3>{course.title}</h3>
                <p>{course.category}</p>
                <a href={course.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      );
}
const styles = {
    container: {
      width: '80%',
      margin: 'auto',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
    },
    heading: {
      fontSize: '28px',
      color: '#333',
      marginBottom: '20px',
    },
    coursesContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    courseCard: {
      width: '30%',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      margin: '10px',
      textAlign: 'left',
      backgroundColor: '#fff',
    },
    link: {
      display: 'block',
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      borderRadius: '4px',
      textAlign: 'center',
      textDecoration: 'none',
      marginTop: '10px',
    },
  };

export default Grow
