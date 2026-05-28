// Navbar-dark.js
class DarkNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 shadow-lg h-20">
            <div class="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
                <div class="flex items-center gap-4">
                    <img alt="V Legacy Logo" class="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHrjZiADmCGYppR1_9TNE22gf103J57MMI5mffUQTVr1qZz7XGKNSaIyjME_KZuHZ7yOdrvL7v5ZnswetGUIa_-1cnCnf_PyJaVMqdjQJq9RrQdvCk_TANZ2Em7M9E5GJjsx8kQdQv9H-hIcFTJ-9M9QABVqGgOtB-q5D0gi4eDShnyqH9_oNfZJx8dv9sPNi4mMe_JtvCh3zkVXYt_26mxQi1JkmNFHZOw4elqnU1kbtd4mtujbEBPaFxDk2aUIQka7D3_JYwYYY"/>
                    <span class="font-headline-md text-headline-md text-primary tracking-tight">V Legacy</span>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a class="font-button text-button text-primary border-b border-primary pb-1" href="#">Portfolio</a>
                    <a class="font-button text-button text-on-surface transition-colors duration-300 hover:text-primary" href="#">Legacy</a>
                    <a class="font-button text-button text-on-surface transition-colors duration-300 hover:text-primary" href="#">Curated Services</a>
                    <a class="font-button text-button text-on-surface transition-colors duration-300 hover:text-primary" href="#">Insights</a>
                    <a class="font-button text-button text-on-surface transition-colors duration-300 hover:text-primary" href="#">Contact</a>
                </div>
                <button class="bg-primary text-on-primary px-6 py-3 font-button text-button hover:bg-primary-container transition-all duration-300 transform active:scale-95">
                    Enquire Now
                </button>
            </div>
        </nav>
        `;
    }
}

customElements.define('navbar-dark', DarkNavbar);