// navbar.js
class TopNavbar extends HTMLElement {
    connectedCallback() {
        const renderNavbar = () => {
            const isDark = document.documentElement.classList.contains('dark');

            this.innerHTML = `
            <nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-background/80 backdrop-blur-md border-b border-outline-variant/10 shadow-sm h-20">
                <div class="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
                    
                    <div class="flex items-center gap-4">
                        <img alt="V Legacy Logo" class="h-12 w-auto object-contain" src="./assets/img/VLegacyLogo.png"/>
                        <span class="font-headline-md text-headline-md text-primary dark:text-[#f2ca50] tracking-tight">V Legacy</span>
                    </div>
                    
                    <div class="hidden md:flex items-center space-x-8">
                        <a class="nav-link font-button text-button text-primary dark:text-[#dce3f0] transition-colors duration-300 hover:text-secondary dark:hover:text-[#f2ca50] pb-1" href="index.html">Home</a>
                        <a class="nav-link font-button text-button text-primary dark:text-[#dce3f0] transition-colors duration-300 hover:text-secondary dark:hover:text-[#f2ca50] pb-1" href="about-us.html">About Us</a>
                        <a class="nav-link font-button text-button text-primary dark:text-[#dce3f0] transition-colors duration-300 hover:text-secondary dark:hover:text-[#f2ca50] pb-1" href="our-Legacy.html">Collections</a>
                        <a class="nav-link font-button text-button text-primary dark:text-[#dce3f0] transition-colors duration-300 hover:text-secondary dark:hover:text-[#f2ca50] pb-1" href="contact-us.html">Contact Us</a>
                    </div>
                    
                   
                </div>
            </nav>
            `;

            // Run the active link engine immediately after injection
            this.setActiveLink();
        };

        if (document.readyState === 'complete') {
            renderNavbar();
        } else {
            window.addEventListener('load', renderNavbar);
        }
    }

    setActiveLink() {
        // Extract the exact active file name from the URL path (defaults to index.html if root)
        const currentFilename = window.location.pathname.split("/").pop() || "index.html";
        const links = this.querySelectorAll('.nav-link');

        links.forEach(link => {
            const linkDestination = link.getAttribute('href');
            
            if (currentFilename === linkDestination) {
                // Remove generic light/dark unselected text colors
                link.classList.remove('text-primary', 'dark:text-[#dce3f0]');
                
                // Inject the active signature gold theme style rules and border track line
                link.classList.add(
                    'text-secondary', 
                    'dark:text-[#f2ca50]', 
                    'border-b', 
                    'border-secondary', 
                    'dark:border-[#f2ca50]'
                );
            }
        });
    }
}

customElements.define('top-navbar', TopNavbar);