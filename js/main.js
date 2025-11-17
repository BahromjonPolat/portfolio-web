// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Render Skills
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');

    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `<h3>${skill.name}</h3>`;
        skillsContainer.appendChild(skillCard);
    });
}

// Render Experience
function renderExperience() {
    const experienceContainer = document.getElementById('experience-container');

    experience.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item';
        expItem.innerHTML = `
            <div class="experience-card">
                <h3>${exp.jobTitle}</h3>
                <p class="company">${exp.companyName}</p>
                <p class="working-type">${exp.workingType} • ${exp.startDate} - ${exp.endDate}</p>
                <p>${exp.description}</p>
            </div>
        `;
        experienceContainer.appendChild(expItem);
    });
}

// Render Education
function renderEducation() {
    const educationContainer = document.getElementById('education-container');

    education.forEach(edu => {
        const eduCard = document.createElement('div');
        eduCard.className = 'education-card';
        eduCard.innerHTML = `
            <h3>${edu.title}</h3>
            <p class="school">${edu.school}</p>
            <p class="date">${edu.startDate} - ${edu.endDate}</p>
        `;
        educationContainer.appendChild(eduCard);
    });
}

// Handle image loading errors
function handleImageError(img) {
    // Hide the image
    img.classList.add('hidden');
    // Add no-image class to parent to show placeholder
    const deviceScreen = img.closest('.device-screen');
    if (deviceScreen) {
        deviceScreen.classList.add('no-image');
    }
}

// Render Projects
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const platformBadges = project.platforms.map(platform => {
            // Get icon based on platform
            let iconPath = '';
            switch (platform.platform.toLowerCase()) {
                case 'android':
                    iconPath = 'icons/play_store.svg';
                    break;
                case 'ios':
                    iconPath = 'icons/app_store.svg';
                    break;
                case 'windows':
                    iconPath = 'icons/windows.svg';
                    break;
                case 'macos':
                    iconPath = 'icons/apple.svg';
                    break;
                case 'web':
                case 'linux':
                default:
                    iconPath = '';
            }

            let platformName = platform.platform;
            switch (platformName.toLowerCase()) {
                case 'windows':
                    platformName = 'Windows';
                    break;
                case 'android':
                    platformName = 'Play Store';
                    break;
                case 'web':
                    platformName = 'Web';
                    break;
                case 'linux':
                    platformName = 'Linux';
                    break;
                case 'ios':
                    platformName = 'App Store';
                    break;
                case 'macos':
                    platformName = 'MacOS';
                    break;
            }


            // Generate rating stars
            const rating = platform.rating || 0;
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

            let starsHTML = '';
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<span class="star full">★</span>';
            }
            if (hasHalfStar) {
                starsHTML += '<span class="star half">★</span>';
            }
            for (let i = 0; i < emptyStars; i++) {
                starsHTML += '<span class="star empty">★</span>';
            }

            const badgeContent = `
                <div class="platform-info">
                    ${iconPath ? `<img src="${iconPath}" alt="${platform.platform}" class="platform-icon">` : ''}
                    <span class="platform-name">${platformName}</span>
                </div>
                <div class="platform-rating">
                    <div class="stars">${starsHTML}</div>
                    <span class="rating-value">${rating.toFixed(1)}</span>
                </div>
            `;

            if (platform.link) {
                return `<a href="${platform.link}" target="_blank" rel="noopener noreferrer" class="platform-badge">${badgeContent}</a>`;
            } else {
                return `<div class="platform-badge">${badgeContent}</div>`;
            }
        }).join('');

        // Determine if mobile or desktop platform
        const isMobile = project.platforms.some(p =>
            ['ios', 'android'].includes(p.platform)
        );

        // Create device frames based on platform
        let devicesHTML = '';
        if (isMobile) {
            // Mobile devices - two iPhone frames
            devicesHTML = `
                <div class="project-devices">
                    <div class="device-frame iphone-secondary">
                        <div class="device-screen">
                            <img src="${project.secondaryScreenshot}" alt="${project.title} secondary" loading="lazy" onerror="handleImageError(this)">
                        </div>
                    </div>
                    <div class="device-frame iphone">
                        <div class="device-screen">
                            <img src="${project.primaryScreenshot}" alt="${project.title}" loading="lazy" onerror="handleImageError(this)">
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Desktop devices - single laptop frame
            devicesHTML = `
                <div class="project-devices desktop">
                    <div class="device-frame laptop">
                        <div class="device-screen">
                            <img src="${project.primaryScreenshot}" alt="${project.title}" loading="lazy" onerror="handleImageError(this)">
                        </div>
                    </div>
                </div>
            `;
        }

        projectCard.innerHTML = `
            ${devicesHTML}
            <div class="project-content">
                <div class="project-header">
                    <img src="${project.logo}" alt="${project.title} logo" class="project-logo" onerror="this.style.display='none'">
                    <h3>${project.title}</h3>
                </div>
                <p>${project.description}</p>
                <div class="project-platforms">${platformBadges}</div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
function setupAnimations() {
    const animatedElements = document.querySelectorAll('.skill-card, .experience-item, .education-card, .project-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderExperience();
    renderEducation();
    renderProjects();

    // Small delay to ensure elements are rendered
    setTimeout(setupAnimations, 100);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        navbar.style.padding = '1rem 0';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.borderBottom = 'none';
        navbar.style.padding = '2.5rem 0';
    }
});
