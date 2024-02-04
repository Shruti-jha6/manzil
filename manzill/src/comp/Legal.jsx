import React from 'react'

const Legal = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Legal Advice for Startups</h1>
      <p style={styles.paragraph}>
        Starting a new venture? It's crucial to navigate the legal landscape to ensure your startup's success.
        Our team of experienced legal professionals is here to provide you with valuable advice and guidance.
      </p>
      <h2 style={styles.subHeading}>Key Legal Considerations:</h2>
      <ul style={styles.list}>
        <li>Entity Formation</li>
        <li>Intellectual Property Protection</li>
        <li>Contracts and Agreements</li>
        <li>Compliance and Regulations</li>
        <li>Funding and Investment</li>
      </ul>
      <p style={styles.paragraph}>
        Whether you're dealing with incorporation, trademarks, contracts, or other legal matters,
        we're here to help you make informed decisions and navigate the complexities of the startup legal landscape.
      </p>
    </div>
  )
}

const styles = {
    container: {
      width: '80%',
      margin: 'auto',
      padding: '20px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '28px',
      color: '#333',
      marginBottom: '20px',
    },
    subHeading: {
      fontSize: '24px',
      color: '#555',
      marginTop: '20px',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '16px',
      color: '#666',
      marginBottom: '15px',
    },
    list: {
      listStyleType: 'none',
      padding: '0',
      fontSize: '18px',
      color: '#777',
      margin: '0',
    },
  };

export default Legal
