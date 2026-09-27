/* ============================================================
   TILENEST CERAMICS - SIMPLE JAVASCRIPT
   This file handles only small interactive features.
   No framework or build step is required.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const menuButton = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("#main-nav");

  if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  // Automatic copyright year
  const yearElement = document.querySelector("#year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Simple enquiry form.
  // This version does not need a server:
  // it opens the visitor's email app with the enquiry details.
  const quoteForm = document.querySelector("#quoteForm");
  const formMessage = document.querySelector("#formMessage");

  if (quoteForm) {
    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const phone = document.querySelector("#phone").value.trim();
      const requirement = document.querySelector("#requirement").value;
      const message = document.querySelector("#message").value.trim();

      // EDIT THIS EMAIL ADDRESS
      const businessEmail = "hello@yourtilesbusiness.com";

      const subject = encodeURIComponent(
        `New Tiles Enquiry - ${requirement}`
      );

      const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Requirement: ${requirement}\n` +
        `Details: ${message || "Not provided"}`
      );

      window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;

      if (formMessage) {
        formMessage.textContent =
          "Opening your email app to send the enquiry...";
      }
    });
  }
});
