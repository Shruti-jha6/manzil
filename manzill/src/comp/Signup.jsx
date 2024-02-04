import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Signing up:', email, password);
  };

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <label>Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
      </label>
      <br />
      <label>Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
      </label>
      <br />
      <button onClick={handleSignUp} style={styles.button}>Sign Up</button>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '50px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SignUp;