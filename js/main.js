document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const yearElement = document.getElementById("current-year")
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }

  // Mobile menu toggle
  const menuToggle = document.querySelector(".header__menu-toggle")
  const mobileMenu = document.querySelector(".header__mobile-menu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active")
      mobileMenu.classList.toggle("active")
    })
  }

  // Contact form validation and submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Basic form validation
      const requiredFields = contactForm.querySelectorAll("[required]")
      let isValid = true

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false
          field.classList.add("error")
        } else {
          field.classList.remove("error")
        }
      })

      // Email validation
      const emailField = contactForm.querySelector("#email")
      if (emailField && emailField.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(emailField.value)) {
          isValid = false
          emailField.classList.add("error")
        }
      }

      if (isValid) {
        // Form submission logic would go here
        // For demo purposes, we'll just show an alert
        alert("Thank you for your message! We will get back to you soon.")
        contactForm.reset()
      } else {
        alert("Please fill in all required fields correctly.")
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href !== "#") {
        e.preventDefault()

        const targetElement = document.querySelector(href)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for header height
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Add animation classes on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animated")
      }
    })
  }

  // Run once on page load
  animateOnScroll()

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll)
})
