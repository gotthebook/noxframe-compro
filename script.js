/**
 * Mobile Menu Management
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', toggleMobileMenu);

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden');
}

/**
 * Smooth Scroll Navigation
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
}

function handleSmoothScroll(event) {
    const href = this.getAttribute('href');
    
    if (href === '#') return;

    event.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Email Service Setup
 */
function initEmailService() {
    // Email service disabled for now; add it back later when ready.
}

/**
 * Contact Form Handler
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(event) {
    event.preventDefault();

    const formData = getFormData(this);

    if (!validateFormData(formData)) {
        return;
    }

    submitForm(this, formData);
}

function getFormData(form) {
    return {
        name: form.querySelector('input[placeholder="Full Name"]')?.value.trim() || '',
        email: form.querySelector('input[placeholder="Email Address"]')?.value.trim() || '',
        message: form.querySelector('textarea')?.value.trim() || ''
    };
}

function validateFormData(data) {
    if (!data.name || !data.email || !data.message) {
        alert('Please fill out all fields');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return false;
    }

    return true;
}

function submitForm(form, formData) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    const originalOpacity = submitBtn.style.opacity;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    if (typeof emailjs === 'undefined' || typeof emailjs.send !== 'function') {
        completeFormSubmission(submitBtn, originalText, originalOpacity);
        form.reset();
        return;
    }

    emailjs.send(
        'gmail',  // Service ID
        'contact_form',  // Template ID
        {
            to_email: 'noxframe.studio@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        }
    )
    .then(() => {
        completeFormSubmission(submitBtn, originalText, originalOpacity);
        form.reset();
    })
    .catch((error) => {
        console.error('Email send failed:', error);
        submitBtn.textContent = 'Failed to send';
        submitBtn.style.opacity = '0.7';
        setTimeout(() => {
            resetFormButton(submitBtn, originalText, originalOpacity);
        }, 3000);
    });
}

function completeFormSubmission(btn, originalText, originalOpacity) {
    btn.textContent = 'Message Sent!';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        resetFormButton(btn, originalText, originalOpacity);
    }, 3000);
}

function resetFormButton(btn, originalText, originalOpacity) {
    btn.textContent = originalText;
    btn.style.opacity = originalOpacity || '1';
    btn.disabled = false;
}

/**
 * Active Navigation Highlight
 */
function initActiveNavigation() {
    window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const currentSection = getCurrentSection(sections);

    navLinks.forEach(link => highlightNavLink(link, currentSection));
}

function getCurrentSection(sections) {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    return current;
}

function highlightNavLink(link, currentSection) {
    const href = link.getAttribute('href').slice(1);
    const isActive = href === currentSection;

    link.classList.toggle('text-brand-accent', isActive);
    link.classList.toggle('text-gray-400', !isActive);
}

/**
 * Navigation Scroll Effect
 */
function initNavScroll() {
    handleNavScroll();
    window.addEventListener('scroll', handleNavScroll, { passive: true });
}

function handleNavScroll() {
    const nav = document.querySelector('nav');

    if (!nav) return;

    nav.classList.toggle('scrolled', window.scrollY > 50);
}

/**
 * Portfolio Carousel Navigation
 */
function initCarouselNavigation() {
    const prevBtn = document.getElementById('prev-work');
    const nextBtn = document.getElementById('next-work');

    if (!prevBtn || !nextBtn) return;

    prevBtn.addEventListener('click', () => console.log('Previous project'));
    nextBtn.addEventListener('click', () => console.log('Next project'));
}

/**
 * Intersection Observer for Animations
 */
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    document.querySelectorAll('section').forEach(el => observer.observe(el));
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.observer?.unobserve(entry.target);
        }
    });
}

/**
 * Initialize All Features
 */
function initializeWebsite() {
    initEmailService();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    initActiveNavigation();
    initNavScroll();
    initCarouselNavigation();
    initIntersectionObserver();
    setupScrollPadding();

    console.log('✓ Noxframe website initialized successfully!');
}

function setupScrollPadding() {
    document.documentElement.style.scrollPaddingTop = '80px';
    document.body.style.opacity = '1';
}

/**
 * Start Application
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}


