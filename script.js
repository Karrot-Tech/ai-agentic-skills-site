// ============================================
// Agentic Skills Showcase - JavaScript
// ============================================

// ============================================
// Theme Management
// ============================================
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.applyTheme();
        this.initToggle();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
    }

    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }

    initToggle() {
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    }
}

// ============================================
// Card Manager - Handles card expansion/collapse
// ============================================
class CardManager {
    constructor() {
        this.activeCard = null;
        this.cards = document.querySelectorAll('.skill-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            // View Demo button
            const viewBtn = card.querySelector('.btn-view-demo');
            if (viewBtn) {
                viewBtn.addEventListener('click', () => this.expandCard(card));
            }

            // Close button
            const closeBtn = card.querySelector('.btn-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.collapseCard(card));
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeCard) {
                this.collapseCard(this.activeCard);
            }
        });
    }

    expandCard(card) {
        // Collapse any currently expanded card
        if (this.activeCard && this.activeCard !== card) {
            this.collapseCard(this.activeCard);
        }

        card.classList.add('expanded');
        this.activeCard = card;

        // Initialize step navigation for this card
        const stepNav = new StepNavigator(card);

        // Scroll card into view
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    collapseCard(card) {
        card.classList.remove('expanded');
        if (this.activeCard === card) {
            this.activeCard = null;
        }

        // Scroll back into view
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}

// ============================================
// Step Navigator - Handles GIF reel navigation
// ============================================
class StepNavigator {
    constructor(card) {
        this.card = card;
        this.currentStep = 1;
        this.totalSteps = this.getTotalSteps();
        this.init();
    }

    getTotalSteps() {
        const dots = this.card.querySelectorAll('.dot');
        return dots.length;
    }

    init() {
        // Progress dots
        const dots = this.card.querySelectorAll('.dot');
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const step = parseInt(dot.getAttribute('data-step'));
                this.goToStep(step);
            });
        });

        // Navigation buttons
        const prevBtn = this.card.querySelector('.btn-prev');
        const nextBtn = this.card.querySelector('.btn-next');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousStep());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextStep());
        }

        // Timeline items
        const timelineItems = this.card.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            item.addEventListener('click', () => {
                const step = parseInt(item.getAttribute('data-step'));
                this.goToStep(step);
            });
        });

        // Keyboard navigation
        this.keyboardHandler = (e) => {
            if (!this.card.classList.contains('expanded')) return;

            if (e.key === 'ArrowLeft') {
                this.previousStep();
            } else if (e.key === 'ArrowRight') {
                this.nextStep();
            }
        };
        document.addEventListener('keydown', this.keyboardHandler);

        // Initialize to step 1
        this.goToStep(1);
    }

    goToStep(step) {
        if (step < 1 || step > this.totalSteps) return;

        this.currentStep = step;
        this.updateUI();
    }

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.goToStep(this.currentStep + 1);
        }
    }

    previousStep() {
        if (this.currentStep > 1) {
            this.goToStep(this.currentStep - 1);
        }
    }

    updateUI() {
        // Update progress dots
        const dots = this.card.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index + 1 === this.currentStep) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Update step info
        const stepInfos = this.card.querySelectorAll('.step-info');
        stepInfos.forEach((info, index) => {
            if (index + 1 === this.currentStep) {
                info.classList.add('active');
            } else {
                info.classList.remove('active');
            }
        });

        // Update step counter
        const counter = this.card.querySelector('.step-counter');
        if (counter) {
            counter.textContent = `${this.currentStep} / ${this.totalSteps}`;
        }

        // Update navigation buttons
        const prevBtn = this.card.querySelector('.btn-prev');
        const nextBtn = this.card.querySelector('.btn-next');

        if (prevBtn) {
            prevBtn.disabled = this.currentStep === 1;
        }

        if (nextBtn) {
            nextBtn.disabled = this.currentStep === this.totalSteps;
        }

        // Update timeline
        const timelineItems = this.card.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            if (index + 1 === this.currentStep) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }

            // Update status checkmarks for completed steps
            const status = item.querySelector('.timeline-status');
            if (status) {
                if (index + 1 < this.currentStep) {
                    status.textContent = '✓';
                } else if (index + 1 === this.currentStep) {
                    status.textContent = '→';
                } else {
                    status.textContent = '';
                }
            }
        });

        // Update GIF (if you have actual GIFs)
        const gifs = this.card.querySelectorAll('.step-gif');
        gifs.forEach((gif, index) => {
            if (index + 1 === this.currentStep) {
                gif.classList.add('active');
            } else {
                gif.classList.remove('active');
            }
        });
    }

    destroy() {
        document.removeEventListener('keydown', this.keyboardHandler);
    }
}

// ============================================
// Filter Manager - Handles category filtering
// ============================================
class FilterManager {
    constructor() {
        this.activeFilter = 'all';
        this.cards = document.querySelectorAll('.skill-card');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.init();
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.setFilter(filter);
            });
        });
    }

    setFilter(filter) {
        this.activeFilter = filter;

        // Update button states
        this.filterBtns.forEach(btn => {
            if (btn.getAttribute('data-filter') === filter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Filter cards
        this.cards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                card.style.display = '';
                // Fade in animation
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.3s, transform 0.3s';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// ============================================
// Copy Prompt Functionality
// ============================================
class PromptCopier {
    constructor() {
        this.init();
    }

    init() {
        const copyBtns = document.querySelectorAll('.btn-copy-prompt');
        copyBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const promptBox = btn.closest('.prompt-box');
                const promptText = promptBox.querySelector('.prompt-text');

                if (promptText) {
                    this.copyToClipboard(promptText.textContent, btn);
                }
            });
        });
    }

    async copyToClipboard(text, btn) {
        try {
            await navigator.clipboard.writeText(text);
            this.showCopiedFeedback(btn);
        } catch (err) {
            // Fallback for older browsers
            this.fallbackCopy(text, btn);
        }
    }

    fallbackCopy(text, btn) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand('copy');
            this.showCopiedFeedback(btn);
        } catch (err) {
            console.error('Failed to copy text:', err);
        }

        document.body.removeChild(textarea);
    }

    showCopiedFeedback(btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        `;
        btn.style.background = 'var(--success)';
        btn.style.borderColor = 'var(--success)';

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.style.borderColor = '';
        }, 2000);
    }
}

// ============================================
// Smooth Scroll for Anchors
// ============================================
function initSmoothScroll() {
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
}

// ============================================
// Lazy Loading for GIFs (if you add them)
// ============================================
class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            this.images.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
        }
    }
}

// ============================================
// Analytics / URL State Management (Optional)
// ============================================
class URLStateManager {
    constructor() {
        this.init();
    }

    init() {
        // Check URL for deep links (e.g., #prompt-id)
        const hash = window.location.hash;
        if (hash) {
            const promptId = hash.substring(1);
            const card = document.querySelector(`[data-prompt-id="${promptId}"]`);
            if (card) {
                setTimeout(() => {
                    const viewBtn = card.querySelector('.btn-view-demo');
                    if (viewBtn) {
                        viewBtn.click();
                    }
                }, 500);
            }
        }
    }

    setPromptURL(promptId) {
        history.pushState(null, null, `#${promptId}`);
    }

    clearPromptURL() {
        history.pushState(null, null, window.location.pathname);
    }
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    const themeManager = new ThemeManager();
    const cardManager = new CardManager();
    const filterManager = new FilterManager();
    const promptCopier = new PromptCopier();
    const lazyLoader = new LazyLoader();
    const urlStateManager = new URLStateManager();

    // Init smooth scroll
    initSmoothScroll();

    // Add fade-in animation to cards on load
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    console.log('🚀 Agentic Skills Showcase initialized!');
});

// ============================================
// Service Worker Registration (Optional - for PWA)
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment if you want to add a service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}
