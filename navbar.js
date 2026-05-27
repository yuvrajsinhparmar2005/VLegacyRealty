// navbar.js
class TopNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-primary/80 backdrop-blur-md border-b border-outline-variant/10 shadow-sm h-20">
            <div class="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
                <div class="flex items-center gap-4">
                    <img alt="V Legacy Logo" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ1Gk9aw_rKcCKGB-RMjkHBltyGHvese9VrBkYNlr0LHvwairMjs7NxlgQtGKJoOjEZQXph8t0hSezg2ZZ-MkHt52dltY7SuWMCpHUoRIbHtJc8btaivCX8X_Q3YeHdhwK4JbHb-LhsBKwC97NcGQZJ2HqUL3VV0l9HTNtVWRMCOjYr8Fugc3DBZA3AYvc4N_doFVDOy2i-CuQChhbhxBHxlhjrBaLKzEYO4z5sOw8avM8ZM7CPXDPbPajhqz1Nqz0lrsQdJ1XI8s"/>
                    <span class="font-headline-md text-headline-md text-primary dark:text-on-primary tracking-tight">V Legacy</span>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a class="font-button text-button text-secondary border-b border-secondary pb-1" href="#">Portfolio</a>
                    <a class="font-button text-button text-primary dark:text-on-primary transition-colors duration-300 hover:text-secondary" href="#">Legacy</a>
                    <a class="font-button text-button text-primary dark:text-on-primary transition-colors duration-300 hover:text-secondary" href="#">Curated Services</a>
                    <a class="font-button text-button text-primary dark:text-on-primary transition-colors duration-300 hover:text-secondary" href="#">Insights</a>
                    <a class="font-button text-button text-primary dark:text-on-primary transition-colors duration-300 hover:text-secondary" href="#">Contact</a>
                </div>
                <button class="bg-primary text-on-primary px-6 py-3 font-button text-button hover:bg-secondary transition-all duration-300 transform active:scale-95">
                    Enquire Now
                </button>
            </div>
        </nav>
        `;
    }
}

customElements.define('top-navbar', TopNavbar);