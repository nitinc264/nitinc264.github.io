// Application Data from Resume
const skillsData = [
    {
        name: "Python",
        category: "Programming Languages",
        proficiency: 90,
        experience: "2+ years",
        description: "Core language for AI/ML projects, data analysis, and web backends.",
        icon: "fab fa-python"
    },
    {
        name: "HTML/CSS",
        // Suggestion: Category could be "Web Development" for more accuracy, but current is acceptable.
        category: "Programming Languages", 
        proficiency: 85,
        experience: "2+ years",
        description: "Building responsive and modern user interfaces for web applications.",
        icon: "fab fa-html5"
    },
    {
        name: "MySQL",
        // The category "Database" is good. You could also use "Databases" (plural).
        category: "Databases", 
        proficiency: 80,
        experience: "1+ year",
        description: "Managing and querying relational databases for applications.",
        icon: "fas fa-database"
    },
    {
        // Suggestion: Changed "C Programming" to just "C" for conciseness.
        name: "C", 
        category: "Programming Languages",
        proficiency: 78,
        experience: "2+ years",
        description: "Fundamental programming for systems and performance-critical tasks.",
        icon: "fas fa-code" 
    },
    {
        name: "Machine Learning",
        category: "AI/ML & Data Science",
        proficiency: 90,
        experience: "2+ years",
        description: "Developing models for prediction, classification, and real-time analysis.",
        icon: "fas fa-brain"
    },
    {
        name: "Data Science",
        category: "AI/ML & Data Science",
        proficiency: 88,
        experience: "2+ years",
        description: "Extracting insights from data using statistical analysis and visualization.",
        icon: "fas fa-chart-line"
    },
    {
        name: "Artificial Intelligence",
        category: "AI/ML & Data Science",
        proficiency: 85,
        experience: "2+ years",
        description: "Building intelligent systems for tasks like computer vision and natural language processing.",
        icon: "fas fa-robot"
    },
    {
        name: "Microsoft Power BI",
        // CHANGED: Moved from "Development & Tools" to a more relevant category.
        category: "AI/ML & Data Science",
        proficiency: 80,
        experience: "1+ years",
        description: "Creating interactive dashboards and business intelligence reports.",
        icon: "fas fa-chart-bar"
    },
    {
        name: "Git & GitHub",
        category: "Development & Tools",
        proficiency: 85,
        experience: "2+ years",
        description: "Version control and collaborative development workflows for team projects.",
        icon: "fab fa-git-alt"
    },

];
const projectsData = [
    {
        id: 1,
        title: "CredX AI - Career Trajectory Engine",
        shortDescription: "A smart job-matching engine using Google Gemini for deep profile analysis.",
        image: "/api/placeholder/400/250",
        technologies: ["Python", "Flask", "Google Gemini API", "HTML", "JavaScript"],
        detailedDescription: "Developed a smart job-matching engine using Google Gemini API for complex profile building, resume parsing, and semantic matching that goes beyond simple keyword filtering. Engineered a lightweight full-stack application to prioritize user-defined needs and generate personalized 'Match Stories' using LLMs to explain role compatibility.",
        keyFeatures: [
            "Complex profile building with Gemini API",
            "Advanced semantic matching",
            "Lightweight Python/Flask backend",
            "Personalized 'Match Stories' via LLMs",
            "User-defined preference sliders"
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/nitinc264/CredX-AI",
        status: "Completed"
    },
    {
        id: 2,
        title: "AI-Based Real-Time Sign Language Translator",
        shortDescription: "A real-time AI system that translates sign language into text using computer vision.",
        image: "/api/placeholder/400/250",
        technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
        detailedDescription: "Developed a real-time AI system that translates American Sign Language (ASL) into text. The system uses OpenCV for video input and MediaPipe for high-fidelity hand and gesture tracking to enable accurate translation and correct for mirrored camera angles. Built and optimized a custom gesture recognition pipeline for low-latency performance.",
        keyFeatures: [
            "Real-time video processing with OpenCV",
            "High-fidelity hand tracking with MediaPipe",
            "ASL alphabet classification",
            "Mirrored-camera correction logic",
            "Optimized for low-latency performance"
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/nitinc264/AI-Based-Real-Time-Sign-Language-Translator-Convert-sign-language-into-text-or-speech.",
        status: "Completed"
    },
    {
        id: 3,
        title: "Flood Prediction Model",
        shortDescription: "A model using XGBoost to predict floods with 98.2% accuracy.",
        image: "/api/placeholder/400/250",
        technologies: ["Python", "XGBoost", "scikit-learn", "Data Science"],
        detailedDescription: "Developed a high-accuracy flood prediction model using XGBoost on static environmental data, achieving 98.2% accuracy with an AUC of 0.98. Conducted feature importance analysis and generated key visualizations like ROC curves, risk probability maps, and geospatial heatmaps to support environmental risk assessment.",
        keyFeatures: [
            "98.2% prediction accuracy",
            "XGBoost model implementation",
            "Feature importance analysis",
            "ROC curve and risk probability visuals",
            "Geospatial heatmap generation"
        ],
        liveUrl: "#",
        githubUrl: "https://github.com/nitinc264/Flood-prediction-Model",
        status: "Completed"
    }
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const typingText = document.getElementById('typingText');
const skillsGrid = document.getElementById('skillsGrid');
const projectsGrid = document.getElementById('projectsGrid');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Theme Management
class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-color-scheme', theme);
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
        localStorage.setItem('theme', theme);
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => this.toggleMobileMenu());
        }
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                this.handleNavClick(e);
                this.closeMobileMenu();
            });
        });
        window.addEventListener('scroll', () => this.updateActiveSection());
        document.addEventListener('click', (e) => {
            if (navMenu && hamburger && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        if (navMenu && hamburger) {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        }
    }

    closeMobileMenu() {
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    handleNavClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    updateActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
}

// Typing Animation
class TypingAnimation {
    constructor(element, texts, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.texts = texts;
        this.typeSpeed = typeSpeed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        if (this.element) {
            this.type();
        }
    }

    type() {
        if (!this.element) return;
        const currentText = this.texts[this.textIndex];
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        let typeSpeedCurrent = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeedCurrent = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
        }
        setTimeout(() => this.type(), typeSpeedCurrent);
    }
}

// Skills Management
class SkillsManager {
    constructor() {
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        if (skillsGrid) {
            this.renderSkills();
            this.initializeFilters();
        }
    }

    renderSkills() {
        const filteredSkills = this.currentFilter === 'all' 
            ? skillsData 
            : skillsData.filter(skill => skill.category === this.currentFilter);
        skillsGrid.innerHTML = filteredSkills.map(skill => `
            <div class="skill-card fade-in" data-category="${skill.category}" tabindex="0">
                <div class="skill-card-inner">
                    <div class="skill-card-front">
                        <i class="${skill.icon} skill-icon"></i>
                        <h3 class="skill-name">${skill.name}</h3>
                        <p class="skill-category">${skill.category}</p>
                    </div>
                    <div class="skill-card-back">
                        <i class="${skill.icon} skill-icon"></i>
                        <div class="skill-details">
                            <div class="skill-proficiency">Proficiency: ${skill.proficiency}%</div>
                            <div class="skill-experience">Experience: ${skill.experience}</div>
                            <div class="skill-description">${skill.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('click', () => card.classList.toggle('flipped'));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.classList.toggle('flipped');
                }
            });
        });
        this.observeSkillCards();
    }

    observeSkillCards() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), index * 100);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.skill-card.fade-in').forEach(el => observer.observe(el));
    }

    initializeFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.getAttribute('data-filter');
                this.renderSkills();
            });
        });
    }
}

// Projects Management
class ProjectsManager {
    constructor() {
        this.init();
    }

    init() {
        if (projectsGrid) {
            this.renderProjects();
        }
    }

    renderProjects() {
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card fade-in" data-project-id="${project.id}" tabindex="0">
                <div class="project-image"><i class="fas fa-laptop-code"></i></div>
                <div class="project-content">
                    <div class="project-status ${project.status.toLowerCase().replace(' ', '-')}">${project.status}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-short-desc">${project.shortDescription}</p>
                    <div class="project-tech">${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}</div>
                </div>
            </div>
        `).join('');
        document.querySelectorAll('.project-card').forEach(card => {
            const projectId = parseInt(card.getAttribute('data-project-id'));
            card.addEventListener('click', () => this.showProjectModal(projectId));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.showProjectModal(projectId);
                }
            });
        });
    }

    showProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;
        const modal = document.createElement('div');
        modal.className = 'project-expanded';
        modal.innerHTML = `
            <div class="project-modal">
                <div class="project-modal-header">
                    <h2>${project.title}</h2>
                    <button class="project-modal-close" aria-label="Close modal"><i class="fas fa-times"></i></button>
                </div>
                <div class="project-modal-body">
                    <p><strong>Status:</strong> <span class="project-status ${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span></p>
                    <p>${project.detailedDescription}</p>
                    <div class="project-tech" style="margin: var(--space-20) 0;">
                        <h4>Technologies Used:</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: var(--space-8); margin-top: var(--space-12);">${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}</div>
                    </div>
                    <div class="project-features">
                        <h4>Key Features:</h4>
                        <ul>${project.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}</ul>
                    </div>
                    <div class="project-links" style="display: flex; gap: var(--space-16); margin-top: var(--space-24);">
                        <a href="${project.githubUrl}" class="btn btn--primary" target="_blank"><i class="fab fa-github"></i> View on GitHub</a>
                        <a href="mailto:nitinchauhan94500@gmail.com?subject=Inquiry about ${encodeURIComponent(project.title)}" class="btn btn--outline"><i class="fas fa-envelope"></i> Inquire</a>
                    </div>
                </div>
            </div>`;
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => modal.classList.add('active'));
        const closeBtn = modal.querySelector('.project-modal-close');
        closeBtn.addEventListener('click', () => this.closeProjectModal(modal));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeProjectModal(modal);
        });
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                this.closeProjectModal(modal);
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
        closeBtn.focus();
    }

    closeProjectModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            if (modal.parentNode) modal.parentNode.removeChild(modal);
        }, 300);
    }
}

// Contact Form Management
class ContactFormManager {
    constructor() {
        this.init();
    }

    init() {
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<div class="loading"></div> Sending...';
        submitBtn.disabled = true;
        try {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
            this.showStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } catch (error) {
            this.showStatus('Failed to send message. Please try again or contact me directly at nitinchauhan94500@gmail.com', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    showStatus(message, type) {
        if (formStatus) {
            formStatus.textContent = message;
            formStatus.className = `form-status ${type}`;
            formStatus.style.display = 'block';
            if (type === 'success') {
                setTimeout(() => formStatus.style.display = 'none', 5000);
            }
        }
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }
    init() {
        const elements = document.querySelectorAll('.achievement-card, .timeline-item, .project-card, .personal-card, .about-content');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('fade-in', 'visible'), index * 50);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
        elements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new NavigationManager();
    new SkillsManager();
    new ProjectsManager();
    new ContactFormManager();
    new ScrollAnimations();
    const roles = ["Aspiring AI/ML Engineer", "GSSOC'25 Contributor", "18x Hackathon Finalist", "Campus Ambassador @Unstop"];
    if (typingText) {
        new TypingAnimation(typingText, roles);
    }
});