const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const popup = document.createElement("div");
        popup.className = "message-popup";

        popup.innerHTML = `
            <div class="popup-icon">✓</div>
            <div>
                <strong>MESSAGE DELIVERED</strong>
                <p>Your message has been received successfully.</p>
            </div>
        `;

        document.body.appendChild(popup);

        contactForm.reset();

        setTimeout(() => {
            popup.classList.add("hide");

            setTimeout(() => {
                popup.remove();
            }, 400);
        }, 3000);
    });
}