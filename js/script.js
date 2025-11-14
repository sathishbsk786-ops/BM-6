document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) setTimeout(() => preloader.style.display = "none", 1200);

  // Scroll-to-top
  const scrollTopBtn = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) scrollTopBtn.style.display = "block";
    else scrollTopBtn.style.display = "none";
  });
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Fade-in sections
  const fadeSections = document.querySelectorAll(".fade-section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
  }, { threshold: 0.2 });
  fadeSections.forEach(sec => observer.observe(sec));
});
