const events = [
    // --- Day 1: Nov 20, 2025 ---
    {
        title: "Opening Keynote: The Future of AI",
        type: "Keynote",
        date: "2025-11-20T09:00:00",
        description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
        image: "images/keynote.jpg"
    },
    {
        title: "Advanced JavaScript Workshop",
        type: "Workshop",
        date: "2025-11-20T10:30:00",
        description: "A 3-hour, hands-on deep-dive into asynchronous JavaScript, Promises, and modern ES6+ features.",
        image: "images/workshop-js.jpg"
    },
    {
        title: "Cybersecurity in the Cloud Era",
        type: "Talk",
        date: "2025-11-20T11:00:00",
        description: "Explore the evolving landscape of cloud security threats and proactive defense strategies.",
        image: "images/cybersecurity.jpg"
    },
    {
        title: "Introduction to Quantum Computing",
        type: "Talk",
        date: "2025-11-20T14:00:00",
        description: "A beginner-friendly overview of quantum mechanics and its potential to revolutionize computing.",
        image: "images/quantum.jpg"
    },
    {
        title: "Networking Mixer & Welcome Reception",
        type: "Social",
        date: "2025-11-20T17:00:00",
        description: "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers.",
        image: "images/mixer.jpg"
    },

    // --- Day 2: Nov 21, 2025 ---
    {
        title: "The Ethics of Machine Learning",
        type: "Talk",
        date: "2025-11-21T09:30:00",
        description: "A critical discussion on the societal impact and ethical responsibilities in ML development.",
        image: "images/ethics.jpg"
    },
    {
        title: "Building Scalable Web Apps with Microservices",
        type: "Talk",
        date: "2025-11-21T10:30:00",
        description: "Learn the principles of microservices from lead engineers at a top tech company.",
        image: "images/scalable.jpg"
    },
    {
        title: "Mastering React Performance",
        type: "Workshop",
        date: "2025-11-21T13:00:00",
        description: "Optimize your React applications by learning memoization, code splitting, and bundle analysis.",
        image: "images/react.jpg"
    },
    {
        title: "The Psychology of User Experience (UX)",
        type: "Talk",
        date: "2025-11-21T14:00:00",
        description: "Understand the cognitive biases and psychological principles that drive effective UX design.",
        image: "images/psychology-ux.jpg"
    },
    {
        title: "Panel: The Future of Remote Work in Tech",
        type: "Panel",
        date: "2025-11-21T16:00:00",
        description: "Industry leaders discuss the challenges, tools, and culture of building successful remote-first teams.",
        image: "images/panel-remote.jpg"
    },

    // --- Day 3: Nov 22, 2025 ---
    {
        title: "UI/UX Design Fundamentals for Developers",
        type: "Workshop",
        date: "2025-11-22T09:00:00",
        description: "A practical workshop on visual hierarchy, color theory, and typography that every developer should know.",
        image: "images/ui-ux.jpg"
    },
    {
        title: "From Monolith to Serverless",
        type: "Talk",
        date: "2025-11-22T10:00:00",
        description: "A case study on migrating a large-scale legacy application to a modern serverless architecture.",
        image: "images/serverless.jpg"
    },
    {
        title: "State of Web Assembly in 2025",
        type: "Talk",
        date: "2025-11-22T11:30:00",
        description: "Discover how WebAssembly is enabling near-native performance for web applications.",
        image: "images/webassembly.jpg"
    },
    {
        title: "Data Visualization with D3.js",
        type: "Workshop",
        date: "2025-11-22T13:30:00",
        description: "Learn to create stunning, interactive data visualizations for the web from scratch.",
        image: "images/d3.jpg"
    },
    {
        title: "Closing Panel: Ask Me Anything with Speakers",
        type: "Panel",
        date: "2025-11-22T16:00:00",
        description: "An open Q&A session with a panel of the conference's top speakers. No topic is off-limits!",
        image: "images/panel-ama.jpg"
    },

    // --- Bonus / Past Events for testing ---
    {
        title: "Pre-Conference Hackathon",
        type: "Social",
        date: "2025-11-19T09:00:00",
        description: "A 24-hour coding challenge with prizes for the most innovative projects. Kicks off before the main event.",
        image: "images/hackathon.jpg"
    },
    {
        title: "API Design Best Practices",
        type: "Talk",
        date: "2025-11-21T15:00:00",
        description: "Learn how to design, document, and maintain clean, consistent, and easy-to-use RESTful APIs.",
        image: "images/api.jpg"
    },
    {
        title: "DevOps Culture and Tooling",
        type: "Talk",
        date: "2025-11-20T15:30:00",
        description: "An introduction to the principles of DevOps and the tools that enable continuous integration and deployment.",
        image: "images/devops.jpg"
    },
    {
        title: "Mobile-First Design in Practice",
        type: "Workshop",
        date: "2025-11-20T13:00:00",
        description: "A hands-on session focusing on practical techniques for designing and building mobile-first responsive websites.",
        image: "images/mobile-first.jpg"
    },
    {
        title: "Closing Ceremony & Awards",
        type: "Social",
        date: "2025-11-22T17:30:00",
        description: "Join us as we celebrate the best of the conference and announce the hackathon winners.",
        image: "images/awards.jpg"
    }

        // --- Image Data URLs updated for new tracks ---
        const QUANTUM_IMAGE = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjNDFhNGZhIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iNCIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjQ1IiBjeT0iNyIgcj0iNCIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjQ1IiBjeT0iMjMiIHI9IjQiIGZpbGw9IiNmZmYiLz48bGluZSB4MT0iMTkiIHkxPSIxNSIgeDI9IjQxIiB5Mj0iNyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMTkiIHkxPSIxNSIgeDI9IjQxIiB5Mj0iMjMiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+";
        const NEUROTECH_IMAGE = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZjA1MjU1Ii8+PHBhdGggZD0iTTEwIDE1QzEwIDUgNTAgNSA1MCAxNlM1MCAyNSA1MCAyNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjE1IiByPSI0IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTMwIDE1TDMwIDEwTDM1IDEwTTY1IDE1TDM5IDE1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==";
        const FUTURE_MOBILITY_IMAGE = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMGU5YmFhIi8+PHBhdGggZD0iTTIgMTVMNSA1TDE1IDVMNDUgMjVINTggMjUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTQgMTlINDZWMjRINDEwVjE5WiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
        const AI_ETHICS_IMAGE = "data:image:svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjYTMwZTE1Ii8+PHBhdGggZD0iTTMwIDEwVjIwTTIwIDE1SDQ0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAxMCBMIDMwIDIwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMTUiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHJlY3QgeD0iMTAiIHk9IjUiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgcng9IjUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PC9zdmc+";
        const SOCIAL_IMAGE = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMTdhNjZiIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iNiIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjQ1IiBjeT0iMTUiIHI9IjYiIGZpbGw9IiNmZmYiLz48bGluZSB4MT0iMjEiIHkxPSIxNSIgeDI9IjM5IiB5Mj0iMTUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+";

        
        // Mock Data for the SPA (Updated Content)
        const events = [
            { id: 1, title: "Keynote: The Quantum Leap Forward", time: "9:00 AM - 10:00 AM", speaker: "Dr. Alistair Chen", track: "Quantum Computing", color: "bg-blue-600 dark:bg-blue-800", image: QUANTUM_IMAGE },
            { id: 2, title: "Workshop: Building with Neurotech APIs", time: "10:30 AM - 12:00 PM", speaker: "Sasha Varma", track: "Bio & Neurotech", color: "bg-red-600 dark:bg-red-800", image: NEUROTECH_IMAGE },
            { id: 3, title: "Future Founders Mixer & VR Demos", time: "12:00 PM - 1:30 PM", speaker: "Summit Organizers", track: "Social & Future", color: "bg-green-700 dark:bg-green-900", image: SOCIAL_IMAGE },
            { id: 4, title: "Panel: AI Ethics & AGI Governance", time: "1:30 PM - 2:30 PM", speaker: "The Oversight Board", track: "Regulation & Policy", color: "bg-purple-600 dark:bg-purple-800", image: AI_ETHICS_IMAGE },
            { id: 5, title: "Breakout: Autonomous Vehicle Stacks", time: "3:00 PM - 4:00 PM", speaker: "Kira Dubois", track: "Future Mobility", color: "bg-cyan-600 dark:bg-cyan-800", image: FUTURE_MOBILITY_IMAGE },
            { id: 6, title: "Closing: Roadmap to Mars Colonization", time: "4:00 PM - 5:00 PM", speaker: "Elon Tusk", track: "Quantum Computing", color: "bg-blue-600 dark:bg-blue-800", image: QUANTUM_IMAGE }
        ];

        /**
         * Generates the HTML string for a single event card with the new appearance.
         * @param {object} event - The event data object.
         * @returns {string} HTML string for the event card.
         */
        function createEventCard(event) {
            // Updated Card Appearance Classes and uses CSS variables for base background/text
            return `
                <article class="event-card rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden relative border border-gray-200 dark:border-gray-700 transform hover:-translate-y-1" style="background-color: var(--bg-secondary); color: var(--text-primary);">
                    
                    <img src="${event.image}" alt="${event.title} icon" class="w-full h-40 object-cover" 
                                onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMuZ29yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgOWgxME03IDEzaDEwTTcgMTdoMTBNMTIgMi41TDcgNC45VjcuM0wxMiA5LjdMMTcgNy4zVjQuOUwxMiAyLjVabTcgNy41VjE4LjVIMTBWMTYuNUM3IDE2LjUgNiAxOC41IDYgMTguNVYyMi41SDE4VjE4LjVDMTggMTguNSA3IDE2LjUgNyAxNi41WiIgc3Ryb2tlPSIjOTdhM2FmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=='">
                    
                    <div class="absolute top-3 right-3 ${event.color} px-4 py-1 text-white text-xs font-bold rounded-full shadow-lg z-10 uppercase tracking-wider">
                        ${event.track}
                    </div>
                    
                    <div class="p-6">
                        <p class="text-sm font-semibold mb-2" style="color: var(--color-accent);">${event.time}</p>
                        <h3 class="font-extrabold mb-4 leading-snug">
                            ${event.title}
                        </h3>
                        
                        <div class="flex items-center text-md mt-2" style="color: var(--text-secondary);">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="color: var(--color-accent);"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            <span>${event.speaker}</span>
                        </div>
                        
                        <button onclick="showDetails(${event.id})" 
                            class="mt-6 w-full py-3 bg-accent-cyan text-white rounded-lg font-bold shadow-md hover:bg-cyan-600 transition duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50">
                            Explore Session
                        </button>
                    </div>
                </article>
            `;
        }

        // Rest of the functions (renderEvents, handleSearch, setupDarkMode, showDetails) remain the same
        
        function renderEvents(eventsToRender) {
            const container = document.getElementById('event-container');
            const notFoundMessage = document.getElementById('not-found-message');
            if (!container) return console.error('Event container not found.');
            container.innerHTML = ''; 
            if (eventsToRender.length === 0) {
                notFoundMessage.classList.remove('hidden');
            } else {
                notFoundMessage.classList.add('hidden');
            }
            eventsToRender.forEach(event => {
                const cardHtml = createEventCard(event);
                const tempDiv = document.createElement('div');
                try {
                    tempDiv.innerHTML = cardHtml.trim();
                    const cardElement = tempDiv.firstChild;
                    if (cardElement) {
                        container.appendChild(cardElement);
                    } else {
                        console.error('Failed to parse card HTML for event:', event.title);
                    }
                } catch (e) {
                    console.error('HTML parsing error:', e);
                }
            });
        }

        function handleSearch() {
            const searchInput = document.getElementById('event-search');
            const query = (searchInput?.value || '').toLowerCase().trim();

            const filteredEvents = events.filter(event => {
                const titleMatch = event.title.toLowerCase().includes(query);
                const speakerMatch = event.speaker.toLowerCase().includes(query);
                const trackMatch = event.track.toLowerCase().includes(query);
                return titleMatch || speakerMatch || trackMatch;
            });
            renderEvents(filteredEvents);
        }
        
        function setupDarkMode() {
            const htmlElement = document.documentElement;
            const toggleButton = document.getElementById('theme-toggle');
            const sunIcon = document.getElementById('sun-icon');
            const moonIcon = document.getElementById('moon-icon');

            if (!toggleButton || !sunIcon || !moonIcon) return;

            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            let currentTheme = 'light';
            
            if (localStorage.getItem('theme') === 'dark' || (localStorage.getItem('theme') === null && prefersDark)) {
                 currentTheme = 'dark';
            } else if (localStorage.getItem('theme') === 'light') {
                currentTheme = 'light';
            }

            const applyTheme = (theme) => {
                if (theme === 'dark') {
                    htmlElement.classList.add('dark');
                    sunIcon.classList.remove('hidden');
                    moonIcon.classList.add('hidden');
                    localStorage.setItem('theme', 'dark');
                } else {
                    htmlElement.classList.remove('dark');
                    sunIcon.classList.add('hidden');
                    moonIcon.classList.remove('hidden');
                    localStorage.setItem('theme', 'light');
                }
            };

            applyTheme(currentTheme);

            toggleButton.addEventListener('click', () => {
                const newTheme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
                applyTheme(newTheme);
            });
        }

        function showDetails(eventId) {
            const event = events.find(e => e.id === eventId);
            if (!event) return;

            const messageBox = document.createElement('div');
            messageBox.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300 opacity-0 backdrop-blur-sm';
            messageBox.setAttribute('role', 'dialog');
            messageBox.setAttribute('aria-modal', 'true');
            
            messageBox.innerHTML = `
                <div class="bg-secondary p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-transform duration-300 scale-95 border-t-8 border-accent-cyan" style="background-color: var(--bg-secondary);">
                    <h4 class="text-3xl font-extrabold mb-4" style="color: var(--color-accent);">${event.title}</h4>
                    <p class="text-lg font-medium mb-2" style="color: var(--text-secondary);">${event.time}</p>
                    <p class="text-md mb-4" style="color: var(--text-secondary);">Speaker: <span class="font-semibold">${event.speaker}</span></p>
                    <div class="${event.color} inline-block px-3 py-1 rounded-full text-white font-semibold text-sm mb-6">${event.track}</div>
                    <p class="leading-relaxed" style="color: var(--text-primary);">This session will dive deep into the practical applications and theoretical underpinnings of ${event.title.toLowerCase()}. This high-level summary ensures the core concepts are covered effectively.</p>
                    <button onclick="this.closest('.fixed').remove()" 
                        class="mt-8 w-full py-3 bg-accent-cyan text-white rounded-lg font-bold hover:bg-cyan-600 transition duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50">
                        Close
                    </button>
                </div>
            `;
            document.body.appendChild(messageBox);
            
            setTimeout(() => {
                messageBox.classList.remove('opacity-0');
                messageBox.querySelector('div').classList.remove('scale-95');
            }, 10);
        }

        document.addEventListener('DOMContentLoaded', () => {
            try {
                setupDarkMode();
                renderEvents(events);
            } catch (error) {
                console.error("Initialization error:", error);
            }
        });

];