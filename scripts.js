const events = [
    // --- Day 1: Nov 20, 2025 ---
    {
        title: "Opening Keynote: The Future of AI",
        type: "Keynote",
        date: "2025-11-20T09:00:00",
        description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
        image: "https://images.unsplash.com/photo-1756908992154-c8a89f5e517f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3BlbmluZyUyMEtleW5vdGUlM0ElMjBUaGUlMjBGdXR1cmUlMjBvZiUyMEFJfGVufDB8fDB8fHww"
    },
    {
        title: "Advanced JavaScript Workshop",
        type: "Workshop",
        date: "2025-11-20T10:30:00",
        description: "A 3-hour, hands-on deep-dive into asynchronous JavaScript, Promises, and modern ES6+ features.",
        image: "https://media.istockphoto.com/id/2236866949/photo/diverse-group-of-it-professionals-presenting-coding-and-network-security-in-office-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=ekYxpjMfcZGOu3ngyvFTfFWslIN4x1cTrpGz9HBVmwo="
    },
    {
        title: "Cybersecurity in the Cloud Era",
        type: "Talk",
        date: "2025-11-20T11:00:00",
        description: "Explore the evolving landscape of cloud security threats and proactive defense strategies.",
        image: "https://media.istockphoto.com/id/1434293435/photo/blue-digital-cloud-computing-cyber-security-digital-data-network-protection-future-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=CSIAfSF2hroL-qW4ayiggOYesH69gsZFxkQy0QXLgAY="
    },
    {
        title: "Introduction to Quantum Computing",
        type: "Talk",
        date: "2025-11-20T14:00:00",
        description: "A beginner-friendly overview of quantum mechanics and its potential to revolutionize computing.",
        image: "https://media.istockphoto.com/id/1347310377/photo/quantum-computing-background-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=e_ZWdqUcjL0rVNTtgN2x299JCq7ermy0BMq1cniG-AM="
    },
    {
        title: "Networking Mixer & Welcome Reception",
        type: "Social",
        date: "2025-11-20T17:00:00",
        description: "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers.",
        image: "https://images.unsplash.com/photo-1643812409758-ff93e9fa910e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV0d29ya2luZyUyME1peGVyJTIwJTI2JTIwV2VsY29tZSUyMFJlY2VwdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
    },

    // --- Day 2: Nov 21, 2025 ---
    {
        title: "The Ethics of Machine Learning",
        type: "Talk",
        date: "2025-11-21T09:30:00",
        description: "A critical discussion on the societal impact and ethical responsibilities in ML development.",
        image: "https://media.istockphoto.com/id/2204139183/photo/ai-ethics-or-ai-law-concept-developing-ai-codes-of-ethics-compliance-regulation-standard.webp?a=1&b=1&s=612x612&w=0&k=20&c=aSq7zaHiUWHGinxP0hotAbgn2a0XBIQUFf6scZXHNnI="
    },
    {
        title: "Building Scalable Web Apps with Microservices",
        type: "Talk",
        date: "2025-11-21T10:30:00",
        description: "Learn the principles of microservices from lead engineers at a top tech company.",
        image: "https://images.unsplash.com/photo-1564798605859-a4ab4a561b2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJ1aWxkaW5nJTIwU2NhbGFibGUlMjBXZWIlMjBBcHBzJTIwd2l0aCUyME1pY3Jvc2VydmljZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Mastering React Performance",
        type: "Workshop",
        date: "2025-11-21T13:00:00",
        description: "Optimize your React applications by learning memoization, code splitting, and bundle analysis.",
        image: "https://media.istockphoto.com/id/1226991705/photo/on-stage-successful-female-executive-and-male-manager-present-new-product-show-infographics.webp?a=1&b=1&s=612x612&w=0&k=20&c=K7vuj-NrY9Fz7TSEapmByF9Jk30nlQMitndks2waYDA="
    },
    {
        title: "The Psychology of User Experience (UX)",
        type: "Talk",
        date: "2025-11-21T14:00:00",
        description: "Understand the cognitive biases and psychological principles that drive effective UX design.",
        image: "https://plus.unsplash.com/premium_photo-1733306548826-95daff988ae6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhlJTIwUHN5Y2hvbG9neSUyMG9mJTIwVXNlciUyMEV4cGVyaWVuY2UlMjAoVVgpfGVufDB8fDB8fHww"
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
];