import React, { useEffect, useState } from 'react';

const BlogPg = () => {
  const imageLinks = [
    "https://include.sg/wp-content/uploads/2021/06/why1.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvvgpJEjxSE5S0qWDNTTTPxC2sA6OOZRvyQ&s",
    "https://neetable.com/img/blog/blog-inner/the-role-of-future-education/the-role-of-future-education.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT01qxX4BQIVh8JDzykWUL2LRQJL_L_9oeKpA&s",
    "https://tuavance.com/wp-content/uploads/2020/11/blog-42.jpg",
  ];

  const blogData = [
    { title: "Creative Learning in Education", text: "Explore innovative methods to enhance learning outcomes." },
    { title: "The Future of Education Technology", text: "Discover how technology is reshaping the educational landscape." },
    { title: "Engaging Students with Active Learning", text: "Learn techniques to involve students more actively in their education." },
    { title: "Building a Growth Mindset in Students", text: "Understand the importance of cultivating a growth mindset." },
    { title: "Inclusive Education for All", text: "Learn about strategies to make education accessible to everyone." },
    { title: "Project-Based Learning", text: "Explore the benefits of hands-on learning through projects." },
    { title: "Understanding Learning Styles", text: "Discover how different learning styles affect student engagement." },
    { title: "The Role of Educators in Modern Classrooms", text: "Understand the evolving role of teachers in today's education." },
    { title: "Assessing Student Performance Effectively", text: "Learn about effective assessment methods." },
    { title: "Mental Health in Education", text: "Explore the importance of mental health awareness in schools." },
    { title: "Global Education Trends", text: "Stay updated with the latest trends in global education." },
    { title: "The Importance of Lifelong Learning", text: "Understand why lifelong learning is crucial for personal growth." },
    { title: "Gamification in Education", text: "Explore how gamification can enhance the learning experience." },
    { title: "Creating Engaging Learning Environments", text: "Learn how to create spaces that promote learning." },
    { title: "The Impact of AI on Education", text: "Discover how AI is influencing the future of learning." },
    { title: "Educational Leadership and Management", text: "Understand the principles of effective educational leadership." },
  ];

  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      const triggerBottom = window.innerHeight * 0.8;

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add('show');
        } else {
          card.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  const handleClose = () => {
    setExpandedCardIndex(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <h1 style={styles.siteTitle}>Featured Courses</h1>
        <p style={styles.lead}>Your one-stop platform for quality education and learning resources</p>
      </div>

      <section style={styles.featuredSection}>
        <div style={styles.cardContainer}>
          {blogData.map((blog, index) => (
            <div
              className={`card ${expandedCardIndex === index ? 'expanded' : ''}`}
              key={index}
              style={{
                ...styles.card,
                ...(expandedCardIndex === index ? styles.expandedCard : {})
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="row" style={styles.cardRow}>
                <div className="col-md-5 wrapthumbnail" style={styles.thumbnailContainer}>
                  <a href="post.html">
                    <div
                      className="thumbnail"
                      style={{
                        backgroundImage: `url(${imageLinks[index % imageLinks.length]})`, // Use image from the array
                        ...styles.thumbnail
                      }}
                    ></div>
                  </a>
                </div>
                <div className="col-md-7" style={styles.cardBlock}>
                  <h2 style={styles.cardTitle}><a href="post.html">{blog.title}</a></h2>
                  <h4 style={styles.cardText}>{blog.text}</h4>
                  {expandedCardIndex === index && (
                    <>
                      <button style={styles.closeButton} onClick={handleClose}>✖</button>
                      <div style={styles.expandedContent}>
                        <p>This is the expanded content for {blog.title}.</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card {
          animation: fadeIn 0.5s ease forwards;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .card.expanded {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(2.5);
          z-index: 1000;
          width: 80%;
          height: auto;
          background-color: white;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Add box-shadow to the expanded card */
        }

        .card.expanded .thumbnail {
          height: 300px;
        }

        .card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    marginTop: '56px',
  },
  titleContainer: {
    textAlign: 'center',
    margin: '20px 0',
  },
  siteTitle: {
    fontSize: '36px',
    margin: '0',
  },
  lead: {
    fontSize: '18px',
    color: '#777',
  },
  featuredSection: {
    padding: '20px',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Default shadow for all cards
    width: '100%',
    transition: 'transform 0.3s ease', // Smooth transition for size increase
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'column',
  },
  thumbnailContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  thumbnail: {
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  cardBlock: {
    padding: '5px',
  },
  cardTitle: {
    fontSize: '18px',
    margin: '10px 0',
  },
  cardText: {
    fontSize: '14px',
    color: '#555',
  },
  expandedCard: {
    transform: 'scale(2.5)', // Increase size by 2.5x
    position: 'fixed', // Keep the card above other content
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%) scale(2.5)', // Adjust scaling
    zIndex: 10, // Ensure the card is above other elements
    width: '80%',
    height: 'auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Shadow for the expanded card
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  expandedContent: {
    marginTop: '20px',
  },
};

export default BlogPg;
