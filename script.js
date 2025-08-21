// Typing animation
const textElement = document.querySelector("h1 span");
const text = textElement.textContent;
textElement.textContent = "";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 200);
    }
}
typeWriter();

// Smooth scrolling (for any anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Scroll reveal animations
const revealElements = document.querySelectorAll(".container, .container1");
window.addEventListener("scroll", () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "all 10s ease-out";
        }
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark Mode Toggle
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "🌙";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "30px";
darkModeBtn.style.left = "30px";
darkModeBtn.style.background = "linear-gradient(#1230AE, #6C48C5)";
darkModeBtn.style.border = "none";
darkModeBtn.style.color = "white";
darkModeBtn.style.padding = "10px";
darkModeBtn.style.borderRadius = "50%";
darkModeBtn.style.cursor = "pointer";
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const items = document.querySelectorAll('.carousel-item');
let index = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

// Update carousel position
function updateCarousel() {
    track.style.transform = `translateX(-${index * (items[0].offsetWidth + 20)}px)`;
}

// Next button
nextBtn.addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

// Prev button
prevBtn.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});

// Auto-scroll
let autoScroll = setInterval(() => {
    index = (index + 1) % items.length;
    updateCarousel();
}, 3000);

// Drag / Swipe start
function dragStart(e) {
    clearInterval(autoScroll);
    isDragging = true;
    startX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    track.style.transition = "none";
}

// Drag / Swipe move
function dragMove(e) {
    if (!isDragging) return;
    currentX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    const diff = currentX - startX;
    track.style.transform = `translateX(${diff - index * (items[0].offsetWidth + 20)}px)`;
}

// Drag / Swipe end
function dragEnd() {
    isDragging = false;
    track.style.transition = "transform 0.5s ease-in-out";
    const diff = currentX - startX;
    if (diff > 50) {
        index = (index - 1 + items.length) % items.length;
    } else if (diff < -50) {
        index = (index + 1) % items.length;
    }
    updateCarousel();
    autoScroll = setInterval(() => {
        index = (index + 1) % items.length;
        updateCarousel();
    }, 3000);
}

// Mouse events
track.addEventListener("mousedown", dragStart);
track.addEventListener("mousemove", dragMove);
track.addEventListener("mouseup", dragEnd);
track.addEventListener("mouseleave", dragEnd);

// Touch events
track.addEventListener("touchstart", dragStart);
track.addEventListener("touchmove", dragMove);
track.addEventListener("touchend", dragEnd);
