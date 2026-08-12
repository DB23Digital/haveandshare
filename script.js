/* JavaScript for Have and Share Modern Redesign */

/* --- 0. VanX External Tracking (loads on every page via this shared script) --- */
(function loadExternalTracking() {
    const tracking = document.createElement('script');
    tracking.src = 'https://book.haveandshare.net/js/external-tracking.js';
    tracking.setAttribute('data-tracking-id', 'tk_d149b88c4abc46658269a0560e41151b');
    document.body.appendChild(tracking);
})();

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile Menu Toggle --- */
    const mobileToggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');

    function toggleMenu() {
        if (!nav) return;
        const isOpen = nav.classList.contains('active');

        if (isOpen) {
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
            if (overlay) overlay.classList.remove('show');
            if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');

            const icon = mobileToggle ? mobileToggle.querySelector('i') : null;
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        } else {
            nav.classList.add('active');
            document.body.classList.add('no-scroll');
            if (overlay) overlay.classList.add('show');
            if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');

            const icon = mobileToggle ? mobileToggle.querySelector('i') : null;
            if (icon) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        }
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMenu);
    }
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }

    /* --- 2. Close Menu on Link Click (Mobile) --- */
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav && nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    /* --- 3. Sticky Header on Scroll --- */
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- 4. Intersection Observer for Reveal Animations --- */
    // Only run animations if prefers-reduced-motion is false
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!prefersReducedMotion.matches) {

        const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealOnScroll.observe(el);
        });
    } else {
        // If reduced motion is preferred, immediately show all elements without transition
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }

    /* --- 4.5. Animated Counters --- */
    if (!prefersReducedMotion.matches) {
        const counters = document.querySelectorAll('.counter');
        const counterOptions = {
            threshold: 0.5,
            rootMargin: "0px"
        };

        const counterOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counterElement = entry.target;
                    const target = +counterElement.getAttribute('data-target');
                    const duration = 2000; // Duration in ms
                    const increment = target / (duration / 16); // Frame increment ~60fps

                    let currentCount = 0;

                    const updateCounter = () => {
                        currentCount += increment;
                        if (currentCount < target) {
                            counterElement.innerText = Math.ceil(currentCount).toLocaleString();
                            requestAnimationFrame(updateCounter);
                        } else {
                            counterElement.innerText = target.toLocaleString();
                        }
                    };

                    updateCounter();
                    observer.unobserve(counterElement);
                }
            });
        }, counterOptions);

        counters.forEach(counter => {
            counterOnScroll.observe(counter);
        });
    } else {
        document.querySelectorAll('.counter').forEach(counter => {
            const target = +counter.getAttribute('data-target');
            counter.innerText = target.toLocaleString();
        });
    }

    /* --- 5. Theme Toggle Logic --- */
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');

    // Check local storage for theme
    const currentTheme = localStorage.getItem('theme') || 'original';
    if (currentTheme !== 'original') {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
    updateToggleIcons(currentTheme);
    updateLogo(currentTheme);

    function updateLogo(theme) {
        const logoImg = document.querySelector('.logo-img');
        if (!logoImg) return;

        if (theme === 'light') {
            logoImg.src = 'assets/images/Logo_gold_black.png';
        } else {
            // Default dark theme (Deep Forest) - use white logo for visibility
            logoImg.src = 'assets/images/haveandshare-white-logo.jpg';
        }
    }

    function updateToggleIcons(theme) {
        themeToggleBtns.forEach(btn => {
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-sun', 'fa-moon', 'fa-palette');
                
                if (theme === 'light') {
                    icon.classList.add('fa-moon');
                    btn.setAttribute('aria-label', 'Switch to Dark Mode');
                    btn.setAttribute('title', 'Switch to Dark Mode');
                } else {
                    icon.classList.add('fa-sun');
                    btn.setAttribute('aria-label', 'Switch to Light Mode');
                    btn.setAttribute('title', 'Switch to Light Mode');
                }
            }
        });
    }

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let theme = document.documentElement.getAttribute('data-theme') || 'original';
            let newTheme = theme === 'original' ? 'light' : 'original';

            if (newTheme === 'original') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'original');
            } else {
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
            }
            updateToggleIcons(newTheme);
            updateLogo(newTheme);
        });
    });

    /* --- 6. Lead intent tracking for GA4/GTM --- */
    function getIntent(pathname, href) {
        const source = `${pathname} ${href}`.toLowerCase();
        if (source.includes('team') || source.includes('corporate') || source.includes('facilitation') || source.includes('reality-check')) return 'corporate';
        if (source.includes('mbit')) return 'mBIT';
        if (source.includes('positive-intelligence') || source.includes('pq')) return 'PQ';
        if (source.includes('burnout')) return 'burnout';
        if (source.includes('imposter')) return 'imposter';
        return 'individual';
    }

    function getCtaLocation(link) {
        if (link.closest('.header')) return 'header';
        if (link.closest('.hero')) return 'hero';
        if (link.closest('.article-cta')) return 'mid_article';
        if (link.closest('.footer')) return 'footer';
        if (link.closest('.contact-card, .local-proof')) return 'contact_card';
        return 'body';
    }

    function sendLeadEvent(eventName, link) {
        if (typeof window.gtag !== 'function') return;
        window.gtag('event', eventName, {
            page_path: window.location.pathname,
            cta_location: getCtaLocation(link),
            intent: getIntent(window.location.pathname, link.href)
        });
    }

    function trackLeadClick(event) {
        const link = event.target.closest('a[href]');
        if (!link) return;
        const href = link.href;
        if (href.includes('wa.me/27828025941')) sendLeadEvent('whatsapp_click', link);
        if (href.includes('tidycal.com/claudinahafenscher')) sendLeadEvent('tidycal_click', link);
        if (href.startsWith('tel:+27828025941')) sendLeadEvent('phone_click', link);
        if (href.startsWith('mailto:claudina@haveandshare.co.za')) sendLeadEvent('email_click', link);
        if (link.closest('.article-cta')) sendLeadEvent('blog_cta_click', link);
        if (link.closest('.service-card, .hero, .cta')) sendLeadEvent('service_cta_click', link);
    }

    document.addEventListener('click', trackLeadClick);

});

