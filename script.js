// script.js

const thumbnails = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

thumbnails.forEach((thumb) => {

  thumb.addEventListener("click", () => {

    thumbnails.forEach(item => item.classList.remove("active"));

    thumb.classList.add("active");

    const img = thumb.querySelector("img");

    mainImage.src = img.src;
  });

});

// FAQ ACCORDION

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question = item.querySelector(".faq-question");
  const icon = item.querySelector(".faq-icon");

  question.addEventListener("click", () => {

    const isActive = item.classList.contains("active");

    faqItems.forEach((faq) => {

      faq.classList.remove("active");

      faq.querySelector(".faq-icon").innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.25 11.25L9 6L3.75 11.25" stroke="#2B3990" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

    });

    if (!isActive) {

      item.classList.add("active");

      icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 6L9 11.25L14.25 6" stroke="#2B3990" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    }

  });

});



// APPLICATIONS SLIDER

const slider = document.querySelector(".applications-slider");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const scrollAmount = 380;

nextBtn.addEventListener("click", () => {

  slider.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });

});

prevBtn.addEventListener("click", () => {

  slider.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });

});

// PROCESS TABS

const processTabs = document.querySelectorAll(".process-tab");

const processTitle = document.getElementById("processTitle");
const processDescription = document.getElementById("processDescription");
const processPoints = document.getElementById("processPoints");
const processImage = document.getElementById("processImage");

const processData = [

  {
    title: "High-Grade Raw Material Selection",
    description:
      "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    points: [
      "PE100 grade material",
      "Optimal molecular weight distribution"
    ],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
  },

  {
    title: "Advanced Extrusion Technology",
    description:
      "Precision-controlled extrusion ensures uniform wall thickness and superior product consistency.",
    points: [
      "Automated temperature control",
      "High-speed extrusion line"
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
  },

  {
    title: "Efficient Cooling Process",
    description:
      "Controlled cooling systems maintain structural integrity and dimensional accuracy.",
    points: [
      "Rapid water cooling",
      "Consistent thermal stabilization"
    ],
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop"
  },

  {
    title: "Precision Pipe Sizing",
    description:
      "Advanced calibration systems ensure perfect pipe diameter and wall consistency.",
    points: [
      "Automated calibration units",
      "Precise dimensional monitoring"
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
  },

  {
    title: "Strict Quality Control",
    description:
      "Every pipe undergoes rigorous quality inspection to meet global standards.",
    points: [
      "Pressure testing",
      "Visual defect inspection"
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
  },

  {
    title: "Industrial Pipe Marking",
    description:
      "Permanent pipe identification and branding using advanced marking systems.",
    points: [
      "Laser marking technology",
      "Batch traceability"
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
  },

  {
    title: "Precision Pipe Cutting",
    description:
      "Automated cutting systems ensure smooth finishing and exact measurements.",
    points: [
      "Automated cutting blades",
      "Consistent pipe lengths"
    ],
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
  },

  {
    title: "Safe Product Packaging",
    description:
      "Finished pipes are securely packaged for safe transportation and delivery.",
    points: [
      "Protective wrapping",
      "Efficient logistics preparation"
    ],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
  }

];

// TAB CLICK

processTabs.forEach((tab, index) => {

  tab.addEventListener("click", () => {

    processTabs.forEach(item =>
      item.classList.remove("active")
    );

    tab.classList.add("active");

    const data = processData[index];

    processTitle.textContent = data.title;

    processDescription.textContent = data.description;

    processImage.src = data.image;

    processPoints.innerHTML = "";

    data.points.forEach(point => {

      const li = document.createElement("li");

      li.textContent = point;

      processPoints.appendChild(li);

    });

  });

});

// ======================================
// DATASHEET MODAL
// ======================================

const datasheetBtn =
  document.querySelector(".download-datasheet-btn");

const datasheetModal =
  document.getElementById("datasheetModal");

const modalClose =
  datasheetModal.querySelector(".modal-close");

// OPEN

datasheetBtn.addEventListener("click", () => {

  datasheetModal.classList.add("active");

});

// CLOSE BUTTON

modalClose.addEventListener("click", () => {

  datasheetModal.classList.remove("active");

});

// OUTSIDE CLICK

window.addEventListener("click", (e) => {

  if (e.target === datasheetModal) {

    datasheetModal.classList.remove("active");

  }

});