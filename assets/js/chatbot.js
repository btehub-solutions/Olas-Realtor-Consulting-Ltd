/**
 * Olas Realtor Consulting Ltd - Chatbot
 * Intelligent chatbot with predefined responses for real estate inquiries
 */

class OlasChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.isTyping = false;
        
        // Knowledge base for responses
        this.knowledgeBase = {
            greetings: [
                "Hello! Welcome to Olas Realtor Consulting Ltd. How can I assist you today?",
                "Hi there! I'm here to help you with your real estate needs. What can I do for you?",
                "Welcome! I'm the Olas Realtor assistant. How may I help you today?"
            ],
            services: {
                keywords: ['service', 'services', 'what do you do', 'offerings', 'provide', 'offer'],
                response: "We offer comprehensive real estate services:\n\n🏠 **Property Sales** - Expert guidance in buying/selling residential & commercial properties\n🔑 **Letting & Rentals** - Professional property management and rental services\n📐 **Valuation Services** - Open market, mortgage, insurance, and taxation valuations\n🏗️ **Project Management/Construction** - From planning to execution\n📋 **Architectural Drawings** - 2D/3D floor plans, elevations, structural drawings\n📄 **Title Documentation** - C of O processing, land verification, Governor's consent\n💻 **ICT Training** - Digital skills, Microsoft Office, web design, data analysis\n\nWhich service would you like to know more about?"
            },
            properties: {
                keywords: ['property', 'properties', 'house', 'home', 'apartment', 'buy', 'purchase', 'for sale', 'available'],
                response: "We have verified properties for sale across Abeokuta, Ogun State:\n\n🏠 **Luxury 4-Bedroom Duplex** - Oluwo (₦85M) - 350sqm, 3 baths, 2 parking\n🏡 **Executive 5-Bedroom Villa** - Kobape (₦250M) - 500sqm, 4 baths, 3 parking\n🏢 **Modern 3-Bedroom Flat** - Ibara (₦65M) - 180sqm, 2 baths, 2 parking\n🏰 **Spacious 6-Bedroom Mansion** - Kuto (₦320M) - 600sqm, 5 baths, 4 parking\n🏘️ **Elegant 4-Bedroom Terrace** - Isale Igbein (₦45M) - 280sqm, 3 baths\n🏢 **Commercial Office Space** - Abiola Way (₦150M) - 450sqm, 10 parking\n\nContact us for site inspections and more details!"
            },
            rentals: {
                keywords: ['rent', 'rental', 'lease', 'letting', 'tenant', 'landlord'],
                response: "Our letting and rental services include:\n\n**For Landlords:**\n✓ Tenant sourcing and screening\n✓ Property marketing and advertising\n✓ Rent collection and management\n✓ Property maintenance coordination\n✓ Lease renewal and termination handling\n✓ Landlord-tenant dispute resolution\n\n**For Tenants:**\n✓ Quality verified rental properties\n✓ Rental agreement preparation\n✓ Professional support throughout tenancy\n\nWhich service do you need?"
            },
            training: {
                keywords: ['training', 'course', 'learn', 'education', 'mentorship', 'workshop', 'ict', 'computer'],
                response: "Our ICT Training Programs:\n\n💻 **Basic Computer Skills** - Digital literacy fundamentals\n📊 **Microsoft Office Suite** - Word, Excel, PowerPoint\n🌐 **Web Design & Development** - Website creation basics\n📱 **Digital Marketing** - Social media management\n📈 **Data Analysis & Visualization** - Excel, analytics tools\n🔒 **Cybersecurity Awareness** - Online safety training\n🏢 **Custom Corporate Training** - Tailored for organizations\n\nWe offer both online and in-person training. Interested in enrolling?"
            },
            pricing: {
                keywords: ['price', 'cost', 'fee', 'charge', 'how much', 'expensive', 'affordable', 'budget'],
                response: "Our pricing varies based on the service:\n\n**Property Sales:**\n• Residential: ₦45M - ₦320M\n• Commercial: ₦150M+\n• Land: Varies by location and size\n\n**Services:**\n• Valuation: Competitive rates\n• Project Management: Based on project scope\n• Architectural Drawings: Depends on complexity\n• Title Documentation: Varies by service type\n• ICT Training: Affordable packages available\n\nContact us for specific pricing: 08164220387 or olasarealtor@gmail.com"
            },
            location: {
                keywords: ['location', 'where', 'address', 'office', 'visit', 'abeokuta', 'find you', 'directions'],
                response: "📍 **Our Office Location:**\n\n48, Olayiwola Bankole Street\nOluwo, Abeokuta\nOgun State, Nigeria\n\n**Service Areas:**\nWe primarily serve Abeokuta and surrounding areas in Ogun State, including:\n• Oluwo\n• Kobape\n• Ibara\n• Kuto\n• Isale Igbein\n• Abiola Way\n\nWould you like to schedule a visit or need directions?"
            },
            contact: {
                keywords: ['contact', 'phone', 'email', 'call', 'reach', 'whatsapp', 'message', 'talk', 'speak'],
                response: "**Contact Olas Realtor Consulting Ltd:**\n\n📞 **Phone:**\n• 08164220387\n• 08055800325\n\n📧 **Email:**\n• olasarealtor@gmail.com\n\n💬 **WhatsApp:**\n• +234 816 422 0387\n\n🌐 **Social Media:**\n• Facebook: @olasrealtor\n• Instagram: @is_olasrealtor\n• TikTok: @is_olasrealtor\n• Twitter/X: @is_ola001\n• LinkedIn: Olas Realtor Consulting Ltd\n\nHow would you like to connect?"
            },
            hours: {
                keywords: ['hours', 'time', 'open', 'available', 'working hours', 'schedule', 'when'],
                response: "⏰ **Our Working Hours:**\n\n📅 Monday - Friday: 9:00 AM - 6:00 PM\n📅 Saturday: 10:00 AM - 4:00 PM\n📅 Sunday: Closed\n\n💬 For urgent inquiries, you can reach us on WhatsApp anytime at +234 816 422 0387!\n\nWe also offer 24/7 support for critical property matters."
            },
            about: {
                keywords: ['about', 'who are you', 'company', 'history', 'experience', 'background'],
                response: "**About Olas Realtor Consulting Ltd:**\n\nWe are a premier real estate consulting firm headquartered in Abeokuta, Ogun State, Nigeria.\n\n**Our Impact:**\n📊 15+ Years in Business\n🏠 500+ Properties Sold\n👥 1000+ Satisfied Clients\n🎓 200+ Professionals Trained\n\n**Our Vision:**\nTo be the most trusted and innovative real estate consulting firm in Nigeria.\n\n**Our Mission:**\nProviding exceptional real estate services through expert guidance, verified property listings, and comprehensive training programs.\n\n**Core Values:**\n✓ Integrity - Honesty and transparency\n✓ Excellence - Superior service delivery\n✓ Innovation - Embracing new solutions\n✓ Client-Focus - Putting clients first\n\nWould you like to know more?"
            },
            thanks: {
                keywords: ['thank', 'thanks', 'appreciate', 'grateful'],
                response: "You're very welcome! 😊 Is there anything else I can help you with today?"
            },
            goodbye: {
                keywords: ['bye', 'goodbye', 'see you', 'later', 'exit'],
                response: "Thank you for chatting with Olas Realtor! Feel free to reach out anytime. Have a great day! 🏠"
            },
            founder: {
                keywords: ['founder', 'ceo', 'owner', 'kolade', 'daramola', 'who owns', 'leadership'],
                response: "**Meet Our Founder:**\n\n👨‍💼 **Kolade Abiola Daramola**\nFounder & Chief Executive Officer\n\nKolade established Olas Realtor Consulting Ltd with a deep passion for real estate development and investment. He is committed to:\n\n✓ Delivering excellence, integrity, and value\n✓ Building long-term client relationships\n✓ Empowering clients to make informed decisions\n✓ Positioning Olas Realtor as a leading brand in Nigeria\n\nHis leadership philosophy is built on vision, discipline, and service. Under his guidance, we've served 1000+ satisfied clients and completed 500+ property transactions.\n\nWould you like to know more about our team?"
            },
            valuation: {
                keywords: ['valuation', 'appraisal', 'property value', 'assessment', 'worth'],
                response: "**Our Valuation Services:**\n\n📐 **Open Market Valuation** - Comprehensive assessment based on current market conditions\n🏦 **Mortgage & Loan Security** - Specialized valuations for lending institutions\n⚖️ **Compensation & Acquisition** - Expert valuations for government acquisitions\n🛡️ **Insurance Valuation** - Accurate assessments for insurance coverage\n📋 **Rating & Taxation** - Professional assessments for property tax purposes\n\nAll valuations are conducted by certified professionals with accurate and reliable reports.\n\nNeed a property valuation? Contact us: 08164220387"
            },
            construction: {
                keywords: ['construction', 'building', 'project management', 'build', 'contractor'],
                response: "**Project Management/Construction Services:**\n\n🏗️ **Project Planning & Scheduling** - Clear roadmaps and timelines\n📊 **Monitoring & Execution** - Regular progress tracking and updates\n⚠️ **Risk Management** - Early challenge identification and solutions\n👥 **Team Coordination** - Managing stakeholders, contractors, vendors\n💰 **Budget & Cost Control** - Maximizing value, controlling expenses\n📄 **Reporting & Documentation** - Transparent reports at every stage\n💡 **Advisory & Consultancy** - Expert guidance for smooth delivery\n\nWe ensure your construction projects are delivered on time, within budget, and to the highest standards.\n\nReady to start your project?"
            },
            architectural: {
                keywords: ['architectural', 'drawing', 'design', 'plan', 'blueprint', 'floor plan'],
                response: "**Architectural Drawing Services:**\n\nWe provide detailed and professional architectural drawings tailored to your design goals:\n\n📐 **Conceptual & Preliminary Designs**\n📏 **2D & 3D Floor Plans**\n🏛️ **Elevations & Sections**\n🏗️ **Structural & Mechanical Drawings**\n⚡ **Electrical & Plumbing Layouts**\n🌳 **Site & Landscape Plans**\n📋 **As-Built Drawings**\n\nPerfect for residential, commercial, or mixed-use projects that meet regulatory requirements.\n\nNeed architectural drawings? Let's discuss your project!"
            },
            documentation: {
                keywords: ['title', 'documentation', 'c of o', 'certificate of occupancy', 'deed', 'governor consent', 'survey'],
                response: "**Title Documentation Services:**\n\nWe handle all aspects of property title documentation:\n\n📄 **Land Title Verification** - Confirm authenticity and ownership\n🏛️ **C of O Processing** - Certificate of Occupancy assistance\n📝 **Deed of Assignment/Sublease** - Complete documentation\n✅ **Governor's Consent** - Processing and approval\n📐 **Survey Plan Assistance** - Accurate land surveying\n🔐 **Property Registration & Regularization** - Legal compliance\n\nEnsure your ownership rights are legally secured and properly registered.\n\nNeed help with property documentation?"
            },
            process: {
                keywords: ['process', 'how it works', 'steps', 'procedure', 'buying process', 'selling process'],
                response: "**Our Property Sales Process:**\n\n1️⃣ **Consultation** - We discuss your needs, budget, and preferences\n2️⃣ **Property Search** - We find properties matching your criteria\n3️⃣ **Site Inspection** - We arrange viewings of selected properties\n4️⃣ **Due Diligence** - We verify documents and property status\n5️⃣ **Negotiation** - We negotiate the best price on your behalf\n6️⃣ **Completion** - We handle all paperwork and handover\n\n✓ Professional guidance at every step\n✓ Transparent and secure transactions\n✓ Post-sale support and assistance\n\nReady to start your property journey?"
            }
        };

        this.quickReplies = [
            "View Properties",
            "Our Services",
            "Contact Us",
            "Training Programs",
            "Property Management"
        ];

        this.init();
    }

    init() {
        this.createChatbotHTML();
        this.attachEventListeners();
        this.sendWelcomeMessage();
    }

    createChatbotHTML() {
        const chatbotHTML = `
            <div class="chatbot-container">
                <button class="chatbot-toggle" id="chatbotToggle" aria-label="Toggle chatbot">
                    <i class="fas fa-comment-dots"></i>
                    <i class="fas fa-times"></i>
                    <span class="chatbot-badge" id="chatbotBadge">1</span>
                </button>
                
                <div class="chatbot-window" id="chatbotWindow">
                    <div class="chatbot-header">
                        <div class="chatbot-avatar">
                            <img src="assets/images/OLAS_UPDATED_LOGO-removebg-preview.png" alt="Olas Realtor">
                        </div>
                        <div class="chatbot-info">
                            <div class="chatbot-title">Olas Assistant</div>
                            <div class="chatbot-status">
                                <span class="status-dot"></span>
                                <span>Online</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="chatbot-messages" id="chatbotMessages">
                        <!-- Messages will be inserted here -->
                    </div>
                    
                    <div class="chatbot-input-area">
                        <input 
                            type="text" 
                            class="chatbot-input" 
                            id="chatbotInput" 
                            placeholder="Type your message..."
                            autocomplete="off"
                        >
                        <button class="chatbot-send-btn" id="chatbotSend" aria-label="Send message">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
        
        // Force fixed positioning with inline styles for mobile
        const chatbotContainer = document.querySelector('.chatbot-container');
        if (chatbotContainer) {
            chatbotContainer.style.position = 'fixed';
            chatbotContainer.style.zIndex = '10000';
        }
        
        const chatbotWindow = document.getElementById('chatbotWindow');
        if (chatbotWindow) {
            chatbotWindow.style.position = 'fixed';
            chatbotWindow.style.zIndex = '10000';
        }
    }

    attachEventListeners() {
        const toggle = document.getElementById('chatbotToggle');
        const sendBtn = document.getElementById('chatbotSend');
        const input = document.getElementById('chatbotInput');
        const header = document.querySelector('.chatbot-header');

        toggle.addEventListener('click', () => this.toggleChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Close chatbot when clicking header on mobile (close button area)
        if (header && window.innerWidth <= 768) {
            header.addEventListener('click', (e) => {
                // Only close if clicking on the right side (close button area)
                const rect = header.getBoundingClientRect();
                if (e.clientX > rect.right - 60) {
                    this.toggleChat();
                }
            });
        }
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const window = document.getElementById('chatbotWindow');
        const toggle = document.getElementById('chatbotToggle');
        const badge = document.getElementById('chatbotBadge');

        window.classList.toggle('active');
        toggle.classList.toggle('active');

        if (this.isOpen) {
            badge.style.display = 'none';
            document.getElementById('chatbotInput').focus();
        }
    }

    sendWelcomeMessage() {
        setTimeout(() => {
            const greeting = this.knowledgeBase.greetings[
                Math.floor(Math.random() * this.knowledgeBase.greetings.length)
            ];
            this.addMessage(greeting, 'bot');
            this.showQuickReplies();
        }, 500);
    }

    sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();

        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Process response after delay
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
            
            // Show relevant quick replies based on context
            if (this.shouldShowQuickReplies(message)) {
                this.showQuickReplies();
            }
        }, 1000 + Math.random() * 1000); // Random delay for natural feel
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();

        // Check for greetings
        if (/^(hi|hello|hey|good morning|good afternoon|good evening)/.test(lowerMessage)) {
            return this.knowledgeBase.greetings[
                Math.floor(Math.random() * this.knowledgeBase.greetings.length)
            ];
        }

        // Check knowledge base
        for (const [key, data] of Object.entries(this.knowledgeBase)) {
            if (key === 'greetings') continue;
            
            if (data.keywords && data.keywords.some(keyword => lowerMessage.includes(keyword))) {
                return data.response;
            }
        }

        // Default response
        return "I'd be happy to help you with that! For detailed information, please:\n\n📞 Call us: 08164220387\n📧 Email: olasarealtor@gmail.com\n💬 WhatsApp: +234 816 422 0387\n\nOr you can ask me about our services, properties, training programs, or contact information!";
    }

    shouldShowQuickReplies(message) {
        const lowerMessage = message.toLowerCase();
        return lowerMessage.includes('help') || 
               lowerMessage.includes('what') || 
               lowerMessage.includes('more') ||
               lowerMessage.includes('else');
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const time = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        const messageHTML = `
            <div class="message ${sender}">
                <div class="message-avatar">
                    ${sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>'}
                </div>
                <div class="message-content">
                    <div class="message-bubble">${this.formatMessage(text)}</div>
                    <div class="message-time">${time}</div>
                </div>
            </div>
        `;

        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();

        this.messages.push({ text, sender, time });
    }

    formatMessage(text) {
        // Convert line breaks to <br> and handle HTML formatting
        let formatted = text.replace(/\n/g, '<br>');
        
        // Remove markdown bold (**text**) and replace with HTML
        formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        
        // Remove markdown headers (##) 
        formatted = formatted.replace(/##\s*(.+?)<br>/g, '<strong>$1</strong><br>');
        
        return formatted;
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingHTML = `
            <div class="message bot" id="typingIndicator">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <div class="typing-indicator">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
        this.scrollToBottom();
        this.isTyping = true;
    }

    hideTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.remove();
        }
        this.isTyping = false;
    }

    showQuickReplies() {
        const messagesContainer = document.getElementById('chatbotMessages');
        
        // Remove existing quick replies
        const existingReplies = messagesContainer.querySelector('.quick-replies');
        if (existingReplies) {
            existingReplies.remove();
        }

        const quickRepliesHTML = `
            <div class="quick-replies">
                ${this.quickReplies.map(reply => 
                    `<button class="quick-reply-btn" onclick="chatbot.handleQuickReply('${reply}')">${reply}</button>`
                ).join('')}
            </div>
        `;

        messagesContainer.insertAdjacentHTML('beforeend', quickRepliesHTML);
        this.scrollToBottom();
    }

    handleQuickReply(reply) {
        // Remove quick replies
        const quickReplies = document.querySelector('.quick-replies');
        if (quickReplies) {
            quickReplies.remove();
        }

        // Simulate user clicking the quick reply
        document.getElementById('chatbotInput').value = reply;
        this.sendMessage();
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbotMessages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Initialize chatbot when DOM is ready
let chatbot;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        chatbot = new OlasChatbot();
    });
} else {
    chatbot = new OlasChatbot();
}
