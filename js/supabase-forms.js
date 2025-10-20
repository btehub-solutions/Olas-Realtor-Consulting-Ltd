/**
 * Supabase Forms Integration
 * Handles contact form and newsletter submissions
 */

// Contact Form Handler
async function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Get form data
    const formData = {
        name: form.querySelector('#name')?.value || form.querySelector('[name="name"]')?.value,
        email: form.querySelector('#email')?.value || form.querySelector('[name="email"]')?.value,
        phone: form.querySelector('#phone')?.value || form.querySelector('[name="phone"]')?.value,
        subject: form.querySelector('#subject')?.value || form.querySelector('[name="subject"]')?.value,
        message: form.querySelector('#message')?.value || form.querySelector('[name="message"]')?.value,
        submitted_at: new Date().toISOString()
    };
    
    // Disable submit button
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
        const client = window.getSupabaseClient();
        
        if (!client) {
            throw new Error('Supabase client not initialized');
        }
        
        // Insert data into contact_submissions table
        const { data, error } = await client
            .from('contact_submissions')
            .insert([formData]);
        
        if (error) throw error;
        
        // Success message
        showNotification('Thank you! Your message has been sent successfully.', 'success');
        form.reset();
        
    } catch (error) {
        console.error('Error submitting form:', error);
        showNotification('Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
}

// Newsletter Form Handler
async function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    const emailInput = form.querySelector('input[type="email"]');
    
    const email = emailInput.value;
    
    // Disable submit button
    submitButton.disabled = true;
    submitButton.textContent = 'Subscribing...';
    
    try {
        const client = window.getSupabaseClient();
        
        if (!client) {
            throw new Error('Supabase client not initialized');
        }
        
        // Insert data into newsletter_subscribers table
        const { data, error } = await client
            .from('newsletter_subscribers')
            .insert([{
                email: email,
                subscribed_at: new Date().toISOString(),
                is_active: true
            }]);
        
        if (error) {
            // Check if email already exists
            if (error.code === '23505') {
                showNotification('You are already subscribed to our newsletter!', 'info');
            } else {
                throw error;
            }
        } else {
            showNotification('Thank you for subscribing to our newsletter!', 'success');
            form.reset();
        }
        
    } catch (error) {
        console.error('Error subscribing to newsletter:', error);
        showNotification('Sorry, there was an error. Please try again later.', 'error');
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
}

// Notification Helper
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Initialize form handlers when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Contact form
    const contactForm = document.querySelector('form[action*="formsubmit"]');
    if (contactForm) {
        // Remove formsubmit action and use Supabase instead
        contactForm.removeAttribute('action');
        contactForm.removeAttribute('method');
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    // Newsletter forms (there might be multiple)
    const newsletterForms = document.querySelectorAll('#newsletterForm, .newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubmit);
    });
});
