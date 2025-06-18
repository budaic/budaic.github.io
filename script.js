// Multi-page website with dynamic sidebar loading

document.addEventListener('DOMContentLoaded', function() {
    // Load sidebar content dynamically
    function loadSidebar() {
        const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
        if (sidebarPlaceholder) {
            fetch('sidebar.html')
                .then(response => response.text())
                .then(data => {
                    sidebarPlaceholder.innerHTML = data;
                    // After loading sidebar, highlight current page
                    highlightCurrentPage();
                    // Initialize mobile navigation
                    initMobileNavigation();
                })
                .catch(error => {
                    console.error('Error loading sidebar:', error);
                    // Fallback: create basic sidebar if fetch fails
                    createFallbackSidebar();
                });
        }
    }

    // Fallback sidebar creation if fetch fails
    function createFallbackSidebar() {
        const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
        if (sidebarPlaceholder) {
            sidebarPlaceholder.innerHTML = `
                <div class="sidebar-header">
                <h1><a href="index.html">Csanád Budai</a></h1>
                <p class="subtitle">Mechatronics Engineering Student, Researcher and Developer</p>
                </div>

                <ul class="nav-links">
                    <li><a href="index.html">About</a></li>
                    <li><a href="cv.html">CV</a></li>
                    <li><a href="research.html">Research</a></li>
                    <li><a href="olympiad.html">Olympiads</a></li>
                    <li><a href="teaching.html">Teaching</a></li>
                    <li><a href="pictures.html">Pictures</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>

            `;
            highlightCurrentPage();
            initMobileNavigation();
        }
    }

    // Mobile navigation toggle functionality
    function initMobileNavigation() {
        const sidebar = document.querySelector('.sidebar');
        
        if (window.innerWidth <= 768) {
            // Add mobile menu toggle button
            let toggleButton = document.querySelector('.mobile-menu-toggle');
            if (!toggleButton) {
                toggleButton = document.createElement('button');
                toggleButton.innerHTML = '☰ Menu';
                toggleButton.className = 'mobile-menu-toggle';
                toggleButton.style.cssText = `
                    display: block;
                    position: fixed;
                    top: 10px;
                    left: 10px;
                    z-index: 1000;
                    background: #333;
                    color: white;
                    border: none;
                    padding: 8px 12px;
                    border-radius: 3px;
                    font-family: Consolas, monaco, monospace;
                    font-size: 12px;
                    cursor: pointer;
                `;
                
                document.body.appendChild(toggleButton);
                
                // Toggle sidebar visibility on mobile
                toggleButton.addEventListener('click', function() {
                    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
                        sidebar.style.display = 'block';
                        sidebar.style.position = 'fixed';
                        sidebar.style.zIndex = '999';
                        sidebar.style.backgroundColor = '#f8f8f8';
                        sidebar.style.boxShadow = '2px 0 5px rgba(0,0,0,0.1)';
                        toggleButton.innerHTML = '✕ Close';
                    } else {
                        sidebar.style.display = 'none';
                        toggleButton.innerHTML = '☰ Menu';
                    }
                });
                
                // Close sidebar when clicking on main content on mobile
                const mainContent = document.querySelector('.main-content');
                if (mainContent) {
                    mainContent.addEventListener('click', function() {
                        if (window.innerWidth <= 768) {
                            sidebar.style.display = 'none';
                            toggleButton.innerHTML = '☰ Menu';
                        }
                    });
                }
            }
        }
    }

    // Handle window resize
    function handleResize() {
        const sidebar = document.querySelector('.sidebar');
        const toggleButton = document.querySelector('.mobile-menu-toggle');
        
        if (window.innerWidth > 768) {
            // Desktop view - show sidebar, remove toggle button
            if (sidebar) {
                sidebar.style.display = 'block';
                sidebar.style.position = 'fixed';
                sidebar.style.zIndex = '100';
                sidebar.style.boxShadow = 'none';
            }
            if (toggleButton) {
                toggleButton.remove();
            }
        } else {
            // Mobile view - hide sidebar initially, add toggle button if not exists
            if (sidebar) {
                sidebar.style.display = 'none';
            }
            if (!toggleButton) {
                initMobileNavigation();
            }
        }
    }

    // Smooth scrolling for anchor links within the same page
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
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

    // Highlight current page in navigation
    function highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage === 'index.html' && linkPage === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Image loading error handling with img/ folder support
    function handleImageErrors() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', function() {
                console.log('Image failed to load:', this.src);
                // Try alternative path if original fails
                if (!this.src.includes('img/')) {
                    const filename = this.src.split('/').pop();
                    this.src = 'img/' + filename;
                } else {
                    this.style.display = 'none';
                }
            });
        });
    }


    // Initialize all functionality
    loadSidebar(); // Load sidebar first
    initSmoothScrolling();
    handleImageErrors();

    // Handle window resize
    window.addEventListener('resize', handleResize);

    // Initial resize check (after sidebar loads)
    setTimeout(handleResize, 100);

    console.log('Multi-page website with dynamic sidebar loaded successfully!');
});

