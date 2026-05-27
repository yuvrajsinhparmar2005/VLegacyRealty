// intro-loader.js
class IntroLoader extends HTMLElement {
    constructor() {
        super();
        this.userName = "";
    }

    connectedCallback() {
        const savedName = localStorage.getItem('v_legacy_username');
        const savedTheme = localStorage.getItem('v_legacy_theme');
        const currentFilename = window.location.pathname.split("/").pop();

        if (savedName && savedTheme) {
            if (savedTheme === 'dark' && currentFilename !== 'index-dark.html') {
                window.location.href = 'index-dark.html';
                return;
            } else if (savedTheme === 'light' && currentFilename !== 'index.html' && currentFilename !== '') {
                window.location.href = 'index.html';
                return;
            }
            this.remove();
            return;
        }

        this.innerHTML = `
        <style>
            /* Globally force custom cursor mechanics across the entire document during intro initialization */
            html, body, #intro-screen, #intro-screen *, input[type="text"]#user-name-input {
                cursor: none !important;
            }
            /* Clean up any residual text selection outlines */
            #user-name-input:focus {
                outline: none !important;
                border-color: #e9c176 !important;
            }
        </style>

        <div id="intro-screen" class="fixed inset-0 z-[9999] bg-[#0d141d] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out px-4 select-none">
            
            <div id="custom-cursor" class="pointer-events-none fixed top-0 left-0 w-3 h-3 bg-[#e9c176] rounded-full z-[10000] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out will-change-transform"></div>
            <div id="custom-cursor-ring" class="pointer-events-none fixed top-0 left-0 w-8 h-8 border border-[#e9c176]/40 rounded-full z-[10000] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out will-change-transform"></div>

            <div id="step-name" class="text-center transform translate-y-4 transition-all duration-700 ease-out flex flex-col items-center w-full max-w-sm">
                <img alt="V Legacy Logo" class="h-50 md:h-64 w-auto object-contain mb-4" src="./assets/img/VLegacyLogo.png"/>
                <h2 class="font-headline-md text-3xl text-[#f2ca50] tracking-widest uppercase mb-12" style="font-family: 'Libre Caslon Text', serif;">V Legacy Estates</h2>
                
                <label for="user-name-input" class="text-gray-400 font-light tracking-widest text-sm uppercase mb-6 cursor-hover" style="font-family: 'Manrope', sans-serif;">
                    What can we call you?
                </label>
                
                <div class="w-full relative mb-4">
                    <input type="text" id="user-name-input" autocomplete="off" 
                        class="w-full bg-transparent text-center text-xl text-white font-light tracking-wide py-2 px-4 border-b border-[#775a19] transition-colors duration-500 placeholder-transparent"
                        style="font-family: 'Manrope', sans-serif; box-shadow: none !important;" />
                    <span class="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#e9c176] transition-all duration-700 ease-out transform -translate-x-1/2 input-accent-line"></span>
                </div>
                
                <p class="text-xs text-[#e9c176]/50 tracking-widest uppercase opacity-0 transition-opacity duration-500" id="input-hint">
                    Press Enter to Continue
                </p>
            </div>

            <div id="step-theme" class="hidden text-center opacity-0 transform translate-y-4 transition-all duration-700 ease-out flex flex-col items-center w-full max-w-md">
                <span class="text-[#e9c176] font-light tracking-[0.2em] text-sm uppercase mb-2" id="welcome-greeting" style="font-family: 'Manrope', sans-serif;"></span>
                <h3 class="font-headline-md text-2xl text-white tracking-wide mb-12" style="font-family: 'Libre Caslon Text', serif;">Select Your Experience Style</h3>
                
                <div class="flex gap-8 w-full justify-center">
                    <button id="theme-light-btn" class="cursor-hover group flex flex-col items-center gap-4 p-6 border border-outline-variant/20 hover:border-[#e9c176] bg-white/5 transition-all duration-500 w-40">
                        <span class="material-symbols-outlined text-gray-400 group-hover:text-[#e9c176] text-4xl transition-colors duration-300">light_mode</span>
                        <span class="text-white text-xs tracking-widest font-semibold group-hover:text-[#e9c176] transition-colors duration-300">LIGHT HERITAGE</span>
                    </button>

                    <button id="theme-dark-btn" class="cursor-hover group flex flex-col items-center gap-4 p-6 border border-outline-variant/20 hover:border-[#f2ca50] bg-white/5 transition-all duration-500 w-40">
                        <span class="material-symbols-outlined text-gray-400 group-hover:text-[#f2ca50] text-4xl transition-colors duration-300">dark_mode</span>
                        <span class="text-white text-xs tracking-widest font-semibold group-hover:text-[#f2ca50] transition-colors duration-300">DARK OBSIDIAN</span>
                    </button>
                </div>
            </div>

        </div>
        `;

        this.setupCursorEngine();
        this.setupNameStep();
    }

    setupCursorEngine() {
        const dot = this.querySelector('#custom-cursor');
        const ring = this.querySelector('#custom-cursor-ring');

        if (!dot || !ring) return;

        const moveCursor = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            dot.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
            ring.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
        };

        window.addEventListener('mousemove', moveCursor);
        this._moveCursorRef = moveCursor;

        const applyHoverEffect = () => {
            ring.classList.remove('w-8', 'h-8', 'border-[#e9c176]/40');
            ring.classList.add('w-14', 'h-14', 'border-[#e9c176]', 'bg-[#e9c176]/10');
            dot.classList.add('scale-50');
        };

        const removeHoverEffect = () => {
            ring.classList.remove('w-14', 'h-14', 'border-[#e9c176]', 'bg-[#e9c176]/10');
            ring.classList.add('w-8', 'h-8', 'border-[#e9c176]/40');
            dot.classList.remove('scale-50');
        };

        this.addEventListener('mouseenter', (e) => {
            if (e.target.closest('#user-name-input, .cursor-hover')) {
                applyHoverEffect();
            }
        }, true);

        this.addEventListener('mouseleave', (e) => {
            if (e.target.closest('#user-name-input, .cursor-hover')) {
                removeHoverEffect();
            }
        }, true);
    }

    setupNameStep() {
        const nameStep = this.querySelector('#step-name');
        const input = this.querySelector('#user-name-input');
        const hint = this.querySelector('#input-hint');
        const accentLine = this.querySelector('.input-accent-line');

        setTimeout(() => {
            if (nameStep) {
                nameStep.classList.remove('translate-y-4');
                nameStep.classList.add('translate-y-0');
            }
        }, 50);

        input.addEventListener('focus', () => accentLine.style.width = '100%');
        input.addEventListener('blur', () => { if (!input.value.trim()) accentLine.style.width = '0%'; });

        input.addEventListener('input', () => {
            if (input.value.trim().length > 0) {
                hint.classList.remove('opacity-0');
                hint.classList.add('opacity-100');
            } else {
                hint.classList.remove('opacity-100');
                hint.classList.add('opacity-0');
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const name = input.value.trim();
                if (name) {
                    this.userName = name;
                    this.transitionToThemeStep();
                }
            }
        });
    }

    transitionToThemeStep() {
        const nameStep = this.querySelector('#step-name');
        const themeStep = this.querySelector('#step-theme');
        const greeting = this.querySelector('#welcome-greeting');

        document.activeElement.blur();
        nameStep.classList.add('opacity-0', '-translate-y-4');
        
        setTimeout(() => {
            nameStep.classList.add('hidden');
            greeting.innerText = `Welcome, ${this.userName}`;
            themeStep.classList.remove('hidden');
            
            setTimeout(() => {
                themeStep.classList.remove('opacity-0', 'translate-y-4');
                themeStep.classList.add('opacity-100', 'translate-y-0');
                this.setupThemeStep();
            }, 50);
        }, 700);
    }

    setupThemeStep() {
        const lightBtn = this.querySelector('#theme-light-btn');
        const darkBtn = this.querySelector('#theme-dark-btn');

        lightBtn.addEventListener('click', () => this.completeSelection('light'));
        darkBtn.addEventListener('click', () => this.completeSelection('dark'));
    }

    completeSelection(selectedTheme) {
        const screen = this.querySelector('#intro-screen');

        localStorage.setItem('v_legacy_username', this.userName);
        localStorage.setItem('v_legacy_theme', selectedTheme);

        screen.classList.add('opacity-0', 'pointer-events-none');
        
        setTimeout(() => {
            if (this._moveCursorRef) {
                window.removeEventListener('mousemove', this._moveCursorRef);
            }
            
            if (selectedTheme === 'dark') {
                window.location.href = 'index-dark.html';
            } else {
                window.location.href = 'index.html';
            }
        }, 1000);
    }
}

customElements.define('intro-loader', IntroLoader);
