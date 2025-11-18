// ========== Smooth Scroll for Navigation Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== Back to Top Button ==========
const backToTop = document.createElement("button");
backToTop.id = "backToTop";
backToTop.textContent = "↑";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.padding = "10px 15px";
backToTop.style.backgroundColor = "#007acc";
backToTop.style.color = "white";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.fontSize = "18px";
backToTop.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
backToTop.style.transition = "0.3s";

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ========== Hover Highlight for Symptom Boxes ==========
const symptoms = document.querySelectorAll(".symptom-box");

symptoms.forEach(symptom => {
  symptom.addEventListener("mouseenter", () => {
    symptom.style.transform = "scale(1.08)";
    symptom.style.backgroundColor = "#d6ebff";
  });

  symptom.addEventListener("mouseleave", () => {
    symptom.style.transform = "scale(1)";
    symptom.style.backgroundColor = "white";
  });
});
