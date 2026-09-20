// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    primaryNav.classList.toggle("open");
  });
}

// Scroll reveal observer
const reveals = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}

// Year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Universal smooth continuous auto-scrolling helper for revolving stacks
function createRevolvingStack(stackId, prevBtnId, nextBtnId, interval = 2800) {
  const stack = document.getElementById(stackId);
  const nextBtn = document.getElementById(nextBtnId);
  const prevBtn = document.getElementById(prevBtnId);
  if (!stack) return;

  function cycleNext() {
    const firstCard = stack.firstElementChild;
    if (!firstCard || stack.children.length < 2) return;
    
    const cardHeight = firstCard.offsetHeight;
    const gap = 14;
    const shift = cardHeight + gap;

    firstCard.style.transition = "transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.55s ease, margin-top 0.55s cubic-bezier(0.25, 1, 0.5, 1)";
    firstCard.style.marginTop = `-${shift}px`;
    firstCard.style.opacity = "0.2";
    firstCard.style.transform = "scale(0.96)";

    setTimeout(() => {
      firstCard.style.transition = "none";
      firstCard.style.marginTop = "0";
      firstCard.style.opacity = "1";
      firstCard.style.transform = "scale(1)";
      stack.appendChild(firstCard);
    }, 550);
  }

  function cyclePrev() {
    const lastCard = stack.lastElementChild;
    if (!lastCard || stack.children.length < 2) return;

    const cardHeight = lastCard.offsetHeight;
    const gap = 14;
    const shift = cardHeight + gap;

    lastCard.style.transition = "none";
    lastCard.style.marginTop = `-${shift}px`;
    lastCard.style.opacity = "0.2";
    lastCard.style.transform = "scale(0.96)";
    stack.insertBefore(lastCard, stack.firstElementChild);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        lastCard.style.transition = "transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.55s ease, margin-top 0.55s cubic-bezier(0.25, 1, 0.5, 1)";
        lastCard.style.marginTop = "0";
        lastCard.style.opacity = "1";
        lastCard.style.transform = "scale(1)";
      });
    });
  }

  let timer = setInterval(cycleNext, interval);

  stack.addEventListener("mouseenter", () => clearInterval(timer));
  stack.addEventListener("mouseleave", () => {
    clearInterval(timer);
    timer = setInterval(cycleNext, interval);
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      clearInterval(timer);
      cycleNext();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      clearInterval(timer);
      cyclePrev();
    });
  }
}

function initAllStacks() {
  createRevolvingStack("credentialsStack", "prevCredBtn", "nextCredBtn", 2600);
  createRevolvingStack("engagementStack", "prevEngBtn", "nextEngBtn", 3200);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAllStacks);
} else {
  initAllStacks();
}
