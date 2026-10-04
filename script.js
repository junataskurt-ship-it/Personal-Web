document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contact-form");

    if (!form) {
        console.log("Contact form not found.");
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const popup = document.createElement("div");

        popup.innerHTML = `
            <div class="popup-box">
                <div class="popup-check">✓</div>

                <div class="popup-text">
                    <h3>MESSAGE DELIVERED</h3>
                    <p>Your message has been received successfully.</p>
                </div>

                <button class="popup-close">&times;</button>
            </div>
        `;

        document.body.appendChild(popup);

        form.reset();

        const closeButton = popup.querySelector(".popup-close");

        closeButton.addEventListener("click", function () {
            popup.remove();
        });

        setTimeout(function () {
            popup.remove();
        }, 4000);

    });

}); 


