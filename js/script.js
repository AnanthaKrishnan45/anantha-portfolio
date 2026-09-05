(function () {
  "use strict";

  /* ---------- Sticky nav background on scroll ---------- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (window.scrollY > 40) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    menu.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Hero: single staggered reveal on load ---------- */
  var heroReveals = document.querySelectorAll(".hero [data-reveal]");
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  heroReveals.forEach(function (el, i) {
    if (!prefersReducedMotion) {
      el.style.setProperty("--d", (0.15 + i * 0.12) + "s");
    }
  });

  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      heroReveals.forEach(function (el) {
        el.classList.add("is-visible");
      });
    });
  });

  /* ---------- Scroll-triggered reveal for the rest of the page ---------- */
  var revealTargets = document.querySelectorAll("[data-reveal]:not(.hero [data-reveal])");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Active nav link based on section in view ---------- */
  var sections = document.querySelectorAll("main > section[id], main[id]");
  var navLinks = document.querySelectorAll(".nav__link");

  if ("IntersectionObserver" in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute("id");
            navLinks.forEach(function (link) {
              var isMatch = link.getAttribute("href") === "#" + id;
              link.style.color = isMatch ? "var(--ink)" : "";
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }
})();
