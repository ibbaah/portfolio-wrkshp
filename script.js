/**
 * ==============================================================================
 * PORTFOLIO WEBSITE JAVASCRIPT - AYSHA HIBA
 * File: script.js
 * Description: Interactive behaviors, typewriter animation, form validation,
 *              scrollspy, mobile nav handling, and beginner-friendly workshop notes.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. DYNAMIC CURRENT YEAR IN FOOTER
    // --------------------------------------------------------------------------
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --------------------------------------------------------------------------
    // 2. TYPEWRITER EFFECT IN HERO SECTION
    // Custom typewriter effect that cycles through key Data Analyst titles
    // --------------------------------------------------------------------------
    const typedElement = document.getElementById('typedRole');
    if (typedElement) {
        const roles = [
            'DATA ANALYST',
            'BI DASHBOARD DEVELOPER',
            'PYTHON & SQL SPECIALIST',
            'INSIGHTS & ML MODELER'
        ];

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 100;    // Speed in ms per character
        const deletingSpeed = 50;   // Speed in ms when backspacing
        const delayBetweenRoles = 1800; // Pause at full word

        function typeLoop() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                // Remove character
                typedElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Add character
                typedElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            // Determine next state
            if (!isDeleting && charIndex === currentRole.length) {
                // Finished typing word, wait before deleting
                isDeleting = true;
                setTimeout(typeLoop, delayBetweenRoles);
                return;
            } else if (isDeleting && charIndex === 0) {
                // Finished deleting word, move to next role
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeLoop, 400);
                return;
            }

            const timeout = isDeleting ? deletingSpeed : typingSpeed;
            setTimeout(typeLoop, timeout);
        }

        // Start typewriter
        typeLoop();
    }

    // --------------------------------------------------------------------------
    // 3. NAVBAR BACKGROUND SCROLL EFFECT
    // Adds a darker frosted backdrop when scrolled down > 50px
    // --------------------------------------------------------------------------
    const navbar = document.getElementById('mainNavbar');
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        // Navbar shadow / glassmorphism
        if (navbar) {
            if (scrollPos > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Back to top button visibility
        if (backToTopBtn) {
            if (scrollPos > 400) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        }
    });

    // --------------------------------------------------------------------------
    // 4. AUTO-CLOSE MOBILE NAVIGATION MENU ON CLICK
    // Closes the Bootstrap hamburger dropdown when any nav link is clicked
    // --------------------------------------------------------------------------
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn');
    const navbarCollapse = document.getElementById('navbarResponsive');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // --------------------------------------------------------------------------
    // 5. ANIMATED SKILL PROGRESS BARS ON SCROLL
    // Triggers smooth width growth when the #skills section enters view
    // --------------------------------------------------------------------------
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // Store original widths and set to 0 initially for animation
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width || bar.getAttribute('aria-valuenow') + '%';
        bar.dataset.targetWidth = targetWidth;
        bar.style.width = '0%';
    });

    const skillsSection = document.getElementById('skills');
    if (skillsSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate progress bars to target width
                    progressBars.forEach(bar => {
                        bar.style.width = bar.dataset.targetWidth;
                    });
                    // Unobserve once animated
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        observer.observe(skillsSection);
    } else {
        // Fallback for older browsers
        progressBars.forEach(bar => {
            bar.style.width = bar.dataset.targetWidth;
        });
    }

    // --------------------------------------------------------------------------
    // 6. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION SIMULATION
    // Demonstrates input validation and client feedback handling
    // --------------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();

            const nameInput = document.getElementById('contactName');
            const emailInput = document.getElementById('contactEmail');
            const subjectInput = document.getElementById('contactSubject');
            const messageInput = document.getElementById('contactMessage');

            // Simple email regex validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let isValid = true;

            // Reset prior validation feedback
            [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
                if (field) {
                    field.classList.remove('is-invalid', 'is-valid');
                }
            });

            // Validate Name
            if (!nameInput.value.trim()) {
                nameInput.classList.add('is-invalid');
                isValid = false;
            } else {
                nameInput.classList.add('is-valid');
            }

            // Validate Email
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add('is-invalid');
                isValid = false;
            } else {
                emailInput.classList.add('is-valid');
            }

            // Validate Subject
            if (!subjectInput.value.trim()) {
                subjectInput.classList.add('is-invalid');
                isValid = false;
            } else {
                subjectInput.classList.add('is-valid');
            }

            // Validate Message
            if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
                messageInput.classList.add('is-invalid');
                isValid = false;
            } else {
                messageInput.classList.add('is-valid');
            }

            // If invalid, stop execution
            if (!isValid) {
                return;
            }

            // Simulate sending message with visual spinner
            const btnText = submitBtn.querySelector('.btn-text');
            const spinner = submitBtn.querySelector('.spinner-border');

            submitBtn.disabled = true;
            if (btnText) btnText.classList.add('opacity-50');
            if (spinner) spinner.classList.remove('d-none');

            setTimeout(() => {
                // Restore button state
                submitBtn.disabled = false;
                if (btnText) btnText.classList.remove('opacity-50');
                if (spinner) spinner.classList.add('d-none');

                // Display success message
                if (formAlert) {
                    formAlert.className = 'alert alert-success d-flex align-items-center mb-4';
                    formAlert.innerHTML = `
                        <i class="fa-solid fa-circle-check fs-4 me-2"></i>
                        <div>
                            <strong>Thank you, ${escapeHtml(nameInput.value.trim())}!</strong>
                            <p class="mb-0 small">Your message was simulated successfully. Check the README to connect this form to real email services like Formspree or EmailJS.</p>
                        </div>
                    `;
                    formAlert.classList.remove('d-none');
                }

                // Reset form fields
                contactForm.reset();
                [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
                    field.classList.remove('is-valid', 'is-invalid');
                });

                // Scroll slightly to let user view the alert
                formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 1200);
        });
    }

    // Helper utility to prevent XSS in simulated notification
    function escapeHtml(str) {
        return str.replace(/[&<>"']/g, function(m) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[m];
        });
    }
});
