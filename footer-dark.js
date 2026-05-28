// footer-dark.js
class DarkFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-surface-container-lowest text-on-surface w-full mt-section-padding border-t border-outline-variant/10">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-desktop py-stack-lg max-w-container-max mx-auto">
                <div class="md:col-span-4">
                    <div class="flex items-center gap-3 mb-6">
                        <img alt="V Legacy Logo" class="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHrjZiADmCGYppR1_9TNE22gf103J57MMI5mffUQTVr1qZz7XGKNSaIyjME_KZuHZ7yOdrvL7v5ZnswetGUIa_-1cnCnf_PyJaVMqdjQJq9RrQdvCk_TANZ2Em7M9E5GJjsx8kQdQv9H-hIcFTJ-9M9QABVqGgOtB-q5D0gi4eDShnyqH9_oNfZJx8dv9sPNi4mMe_JtvCh3zkVXYt_26mxQi1JkmNFHZOw4elqnU1kbtd4mtujbEBPaFxDk2aUIQka7D3_JYwYYY"/>
                        <span class="font-headline-md text-headline-md text-primary">V Legacy</span>
                    </div>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-8 max-w-sm">
                        Defining the intersection of historical heritage and contemporary architectural excellence. We curate for the extraordinary.
                    </p>
                </div>
                <div class="md:col-span-2">
                    <h4 class="font-label-caps text-label-caps text-primary mb-6">NAVIGATION</h4>
                    <ul class="space-y-4">
                        <li><a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all" href="#">Portfolio</a></li>
                        <li><a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all" href="#">Heritage</a></li>
                        <li><a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all" href="#">Services</a></li>
                        <li><a class="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all" href="#">Insights</a></li>
                    </ul>
                </div>
                <div class="md:col-span-2">
                    <h4 class="font-label-caps text-label-caps text-primary mb-6">OFFICES</h4>
                    <ul class="space-y-4 font-body-md text-body-md text-on-surface-variant">
                        <li>London, UK</li>
                        <li>New York, USA</li>
                        <li>Geneva, CH</li>
                        <li>Dubai, UAE</li>
                    </ul>
                </div>
                <div class="md:col-span-4">
                    <h4 class="font-label-caps text-label-caps text-primary mb-6">NEWSLETTER</h4>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-4">Receive curated architectural insights monthly.</p>
                    <div class="flex border-b border-outline-variant/30 py-2">
                        <input class="bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/50 w-full" placeholder="Your Email Address" type="email"/>
                        <button class="text-primary font-button text-button uppercase tracking-widest ml-4 hover:brightness-125 transition-all">Join</button>
                    </div>
                </div>
                <div class="md:col-span-12 pt-stack-md mt-stack-md border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="font-body-md text-body-md text-on-surface-variant/70">
                        © 2024 V Legacy Estates. Architectural Excellence & Heritage.
                    </p>
                    <div class="flex gap-8">
                        <a class="font-label-caps text-label-caps text-on-surface-variant/70 hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a class="font-label-caps text-label-caps text-on-surface-variant/70 hover:text-primary transition-colors" href="#">Terms of Service</a>
                        <a class="font-label-caps text-label-caps text-on-surface-variant/70 hover:text-primary transition-colors" href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-dark', DarkFooter);