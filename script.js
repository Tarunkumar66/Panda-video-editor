document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Scroll to top button
  const scrollTopBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
  });
  
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Animate elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.offer-item, .section-title, .mentor-content, .mentor-image, .course-card');
    
    elements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        setTimeout(() => {
          element.classList.add('animate-fade-in');
        }, index * 100);
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('nav ul');
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
      this.querySelector('i').classList.toggle('fa-times');
    });
  }

  // Video player simulation for course card
  const courseCard = document.querySelector('.course-card');
  if (courseCard) {
    courseCard.addEventListener('click', function(e) {
      if (!e.target.closest('.enroll-button')) {
        const thumbnail = this.querySelector('.course-thumbnail');
        const img = thumbnail.querySelector('img');
        const playButton = thumbnail.querySelector('.play-button');
        
        // Simulate video play
        img.style.opacity = '0.7';
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
        playButton.style.opacity = '1';
        playButton.style.backgroundColor = 'var(--primary)';
        
        // Reset after 3 seconds (simulation)
        setTimeout(() => {
          img.style.opacity = '1';
          playButton.innerHTML = '<i class="fas fa-play"></i>';
          playButton.style.opacity = '0';
        }, 3000);
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Scroll to top button
  const scrollTopBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
  });

  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Animate elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.offer-item, .section-title, .mentor-content, .mentor-image, .course-card');

    elements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        // Ensure animate.css classes are added for elements that need them
        // For elements already using animate.css like hero, this isn't strictly needed here.
        // This is primarily for elements you want to animate on scroll that don't have initial animate.css classes.
        // For offer-item, we already added `animate-fade-in` in CSS.
        if (!element.classList.contains('animate-fade-in')) {
            setTimeout(() => {
                element.classList.add('animate-fade-in');
            }, index * 100); // Stagger the animation
        }
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('nav ul');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active'); // Toggle 'active' class
      this.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
      });
    });
  }

  // Video player simulation for course card
  const courseCard = document.querySelector('.course-card');
  if (courseCard) {
    courseCard.addEventListener('click', function(e) {
      if (!e.target.closest('.enroll-button')) {
        const thumbnail = this.querySelector('.course-thumbnail');
        const img = thumbnail.querySelector('img');
        const playButton = thumbnail.querySelector('.play-button');

        // Simulate video play
        img.style.opacity = '0.7';
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
        playButton.style.opacity = '1';
        playButton.style.backgroundColor = 'var(--primary)';

        // Reset after 3 seconds (simulation)
        setTimeout(() => {
          img.style.opacity = '1';
          playButton.innerHTML = '<i class="fas fa-play"></i>';
          playButton.style.opacity = '0';
        }, 3000);
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});