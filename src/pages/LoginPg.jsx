import React from 'react';

const LoginPg = () => {
  return (
    <section style={styles.section}>
      <div style={styles.loginBox}>
        <form>
          <h2 style={styles.h2}>Login</h2>
          <div style={styles.inputBox}>
            <label style={styles.label}>Email</label>
            <span style={styles.icon}><ion-icon name="mail"></ion-icon></span>
            <input type="email" required style={styles.input} placeholder="Enter your email" />
          </div>
          <div style={styles.inputBox}>
            <label style={styles.label}>Password</label>
            <span style={styles.icon}><ion-icon name="lock-closed"></ion-icon></span>
            <input type="password" required style={styles.input} placeholder="Enter your password" />
          </div>
          <div style={styles.rememberForget}>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" style={styles.a}>Forget Password</a>
          </div>
          <button type="submit" style={styles.button}>Login</button>
          <div style={styles.registerLink}>
            <p>Don't have an account? <a href="#" style={styles.a}>Register</a></p>
          </div>
        </form>
      </div>
    </section>
  );
};

const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(https://img.freepik.com/premium-vector/e-learning-concept-banner-online-education-cute-school-boy-using-laptop-study-home-with-hand-drawn-elements-web-courses-tutorials-software-learning-flat-cartoon-illustration_255592-27.jpg?w=1380)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    animation: 'animateBg 5s linear infinite',
    backdropFilter: 'blur(25px)',
  },
  loginBox: {
    position: 'relative',
    width: '500px',
    height: '600px',
    background: "rgba(255, 255, 255, .4)",
    border: '2px solid rgba(255, 255, 255, .7)',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(25px)',
    scale: '1.1 '// Added scale
  },
  h2: {
    fontSize: '2.5em',
    color: '#fff',
    textAlign: 'center'
  },
  inputBox: {
    position: 'relative',
    width: '400px',
    margin: '30px 0',
    borderBottom: '2px solid #fff'
  },
  label: {
    fontSize: '1.2em',
    color: '#fff',
    marginBottom: '5px',
    display: 'block' // Makes the label occupy the full width
  },
  input: {
    width: '100%',
    height: '60px',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: '1.2em',
    color: '#fff',
    padding: '0 35px 0 5px'
  },
  icon: {
    position: 'absolute',
    right: '8px',
    color: '#fff',
    fontSize: '1.5em',
    lineHeight: '60px'
  },
  rememberForget: {
    margin: '-15px 0 15px',
    fontSize: '1em',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between'
  },
  a: {
    color: '#fff',
    textDecoration: 'none'
  },
  button: {
    width: '100%',
    height: '50px',
    background: '#fff',
    border: 'none',
    outline: 'none',
    borderRadius: '40px',
    cursor: 'pointer',
    fontSize: '1.2em',
    color: '#000',
    fontWeight: '500'
  },
  registerLink: {
    fontSize: '1em',
    color: 'blue',
    textAlign: 'center',
    margin: '25px 0 10px'
  }
};

export default LoginPg;
