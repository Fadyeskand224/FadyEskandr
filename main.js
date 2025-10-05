// Particle System Background
let particles = [];
let particleCount = 50;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('particles-canvas');
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            vx: random(-0.5, 0.5),
            vy: random(-0.5, 0.5),
            size: random(2, 4)
        });
    }
}

function draw() {
    clear();
    
    // Update and draw particles
    for (let particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
        
        // Draw particle
        fill(193, 122, 91, 100); // Copper color with transparency
        noStroke();
        ellipse(particle.x, particle.y, particle.size);
    }
    
    // Draw connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let d = dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            if (d < 100) {
                stroke(193, 122, 91, map(d, 0, 100, 50, 0));
                strokeWeight(1);
                line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSkillsChart();
    initializeProjectCarousel();
    initializeScrollAnimations();
    initializeMobileMenu();
    initializeSmoothScrolling();
});

// Skills Radar Chart
function initializeSkillsChart() {
    const chartDom = document.getElementById('skills-chart');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
    const option = {
        title: {
            text: 'Technical Skills',
            left: 'center',
            textStyle: {
                color: '#1a1d29',
                fontSize: 18,
                fontWeight: 'bold'
            }
        },
        radar: {
            indicator: [
                { name: 'Frontend', max: 100 },
                { name: 'Backend', max: 100 },
                { name: 'Databases', max: 100 },
                { name: 'Mobile Dev', max: 100 },
                { name: 'AI/ML', max: 100 },
                { name: 'DevOps', max: 100 }
            ],
            shape: 'polygon',
            splitNumber: 4,
            axisName: {
                color: '#1a1d29',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: '#e5e7eb'
                }
            },
            splitArea: {
                show: false
            }
        },
        series: [{
            name: 'Skills',
            type: 'radar',
            data: [{
                value: [85, 90, 80, 75, 70, 65],
                name: 'Current Level',
                areaStyle: {
                    color: 'rgba(193, 122, 91, 0.3)'
                },
                lineStyle: {
                    color: '#c17a5b',
                    width: 2
                },
                itemStyle: {
                    color: '#c17a5b'
                }
            }],
            animationDuration: 2000,
            animationEasing: 'cubicOut'
        }]
    };
    
    myChart.setOption(option);
    
    // Make chart responsive
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Project Carousel
function initializeProjectCarousel() {
    const carousel = document.getElementById('projects-carousel');
    if (!carousel) return;
    
    new Splide('#projects-carousel', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '2rem',
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        breakpoints: {
            768: {
                perPage: 1,
            }
        }
    }).mount();
}

// Scroll Animations
function initializeScrollAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Skill items hover animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
    
    // Card hover animations
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -8,
                boxShadow: '0 20px 40px rgba(26, 29, 41, 0.15)',
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Create mobile menu if it doesn't exist
            let mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu) {
                mobileMenu = document.createElement('div');
                mobileMenu.id = 'mobile-menu';
                mobileMenu.className = 'md:hidden bg-white border-t border-gray-200';
                mobileMenu.innerHTML = `
                    <div class="px-4 py-6 space-y-4">
                        <a href="#home" class="block text-gray-700 hover:text-copper transition-colors">Home</a>
                        <a href="projects.html" class="block text-gray-700 hover:text-copper transition-colors">Projects</a>
                        <a href="experience.html" class="block text-gray-700 hover:text-copper transition-colors">Experience</a>
                        <a href="contact.html" class="block text-gray-700 hover:text-copper transition-colors">Contact</a>
                    </div>
                `;
                nav.appendChild(mobileMenu);
            }
            
            // Toggle menu
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navigation background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});

// Add loading animation
window.addEventListener('load', function() {
    // Animate hero section
    anime({
        targets: '.typewriter',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutCubic'
    });
    
    // Animate skill items
    anime({
        targets: '.skill-item',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutCubic'
    });
});

// Contact form handling (for future contact page)
function handleContactForm(formData) {
    // This will be implemented in the contact page
    console.log('Contact form submitted:', formData);
    // Add actual form submission logic here
}

// Project filtering (for projects page)
function filterProjects(category) {
    // This will be implemented in the projects page
    console.log('Filtering projects by:', category);
}

// Timeline interaction (for experience page)
function expandTimelineItem(itemId) {
    // This will be implemented in the experience page
    console.log('Expanding timeline item:', itemId);
}

// Utility function for smooth page transitions
function navigateToPage(url) {
    anime({
        targets: 'body',
        opacity: 0,
        duration: 300,
        easing: 'easeInCubic',
        complete: function() {
            window.location.href = url;
        }
    });
}

// Add click handlers for buttons that don't have direct links
document.addEventListener('click', function(e) {
    if (e.target.textContent === 'Live Demo' || e.target.textContent === 'View Code') {
        e.preventDefault();
        // Show coming soon message
        const button = e.target;
        const originalText = button.textContent;
        button.textContent = 'Coming Soon!';
        button.style.background = '#4a9b8e';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);