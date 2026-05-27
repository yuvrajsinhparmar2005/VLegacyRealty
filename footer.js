// footer.js
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container w-full mt-section-padding">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-desktop py-stack-lg max-w-container-max mx-auto">
                <div class="md:col-span-4">
                    <div class="flex items-center gap-3 mb-6">
                        <img alt="V Legacy Logo" class="h-10 w-auto brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ1Gk9aw_rKcCKGB-RMjkHBltyGHvese9VrBkYNlr0LHvwairMjs7NxlgQtGKJoOjEZQXph8t0hSezg2ZZ-MkHt52dltY7SuWMCpHUoRIbHtJc8btaivCX8X_Q3YeHdhwK4JbHb-LhsBKwC97NcGQZJ2HqUL3VV0l9HTNtVWRMCOjYr8Fugc3DBZA3AYvc4N_doFVDOy2i-CuQChhbhxBHxlhjrBaLKzEYO4z5sOw8avM8ZM7CPXDPbPajhqz1Nqz0lrsQdJ1XI8s"/>
                        <span class="font-headline-md text-headline-md text-secondary">V Legacy</span>
                    </div>
                    <p class="font-body-md text-body-md text-on-primary/70 mb-8 max-w-sm">
                        Defining the intersection of historical heritage and contemporary architectural excellence. We curate for the extraordinary.
                    </p>
                </div>
                <div class="md:col-span-2">
                    <h4 class="font-label-caps text-label-caps text-secondary mb-6">NAVIGATION</h4>
                    <ul class="space-y-4">
                        <li><a class="font-body-md text-body-md text-on-primary/70 hover:text-secondary hover:underline decoration-secondary underline-offset-4 transition-all" href="#">Portfolio</a></li>
                        <li><a class="font-body-md text-body-md text-on-primary/70 hover:text-secondary hover:underline decoration-secondary underline-offset-4 transition-all" href="#">Heritage</a></li>
                        <li><a class="font-body-md text-body-md text-on-primary/70 hover:text-secondary hover:underline decoration-secondary underline-offset-4 transition-all" href="#">Services</a></li>
                        <li><a class="font-body-md text-body-md text-on-primary/70 hover:text-secondary hover:underline decoration-secondary underline-offset-4 transition-all" href="#">Insights</a></li>
                    </ul>
                </div>
                <div class="md:col-span-2">
                    <h4 class="font-label-caps text-label-caps text-secondary mb-6">OFFICES</h4>
                    <ul class="space-y-4 font-body-md text-body-md text-on-primary/70">
                        <li>London, UK</li>
                        <li>New York, USA</li>
                        <li>Geneva, CH</li>
                        <li>Dubai, UAE</li>
                    </ul>
                </div>
                <div class="md:col-span-4">
                    <h4 class="font-label-caps text-label-caps text-secondary mb-6">NEWSLETTER</h4>
                    <p class="font-body-md text-body-md text-on-primary/70 mb-4">Receive curated architectural insights monthly.</p>
                    <div class="flex border-b border-outline-variant/30 py-2">
                        <input class="bg-transparent border-none focus:ring-0 text-on-primary placeholder:text-on-primary/30 w-full" placeholder="Your Email Address" type="email"/>
                        <button class="text-secondary font-button text-button uppercase tracking-widest ml-4">Join</button>
                    </div>
                </div>
                <div class="md:col-span-12 pt-stack-md mt-stack-md border-t border-on-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="font-body-md text-body-md text-on-primary/50">
                        © 2024 V Legacy Estates. Architectural Excellence & Heritage.
                    </p>
                    <div class="flex gap-8">
                        <a class="font-label-caps text-label-caps text-on-primary/50 hover:text-secondary transition-colors" href="#">Privacy Policy</a>
                        <a class="font-label-caps text-label-caps text-on-primary/50 hover:text-secondary transition-colors" href="#">Terms of Service</a>
                        <a class="font-label-caps text-label-caps text-on-primary/50 hover:text-secondary transition-colors" href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);