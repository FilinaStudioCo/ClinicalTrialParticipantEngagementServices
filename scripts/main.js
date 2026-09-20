// Auto-cycling stacked credentials effect (revolving card stack mockup)
document.addEventListener("DOMContentLoaded", () => {
  const stack = document.getElementById("credentialsStack");
  const nextBtn = document.getElementById("nextCredBtn");
  const prevBtn = document.getElementById("prevCredBtn");
  if (!stack) return;

  function cycleNext() {
    const firstCard = stack.firstElementChild;
    if (!firstCard) return;
    firstCard.style.transition = "transform 0.35s ease, opacity 0.35s ease, margin-top 0.35s ease";
    firstCard.style.marginTop = `-${firstCard.offsetHeight + 14}px`;
    firstCard.style.opacity = "0";

    setTimeout(() => {
      firstCard.style.transition = "none";
      firstCard.style.marginTop = "0";
      firstCard.style.opacity = "1";
      stack.appendChild(firstCard);
    }, 350);
  }

  function cyclePrev() {
    const lastCard = stack.lastElementChild;
    if (!lastCard) return;
    lastCard.style.transition = "none";
    lastCard.style.marginTop = `-${lastCard.offsetHeight + 14}px`;
    lastCard.style.opacity = "0";
    stack.insertBefore(lastCard, stack.firstElementChild);

    requestAnimationFrame(() => {
      lastCard.style.transition = "transform 0.35s ease, opacity 0.35s ease, margin-top 0.35s ease";
      lastCard.style.marginTop = "0";
      lastCard.style.opacity = "1";
    });
  }

  let timer = setInterval(cycleNext, 3400);
  stack.addEventListener("mouseenter", () => clearInterval(timer));
  stack.addEventListener("mouseleave", () => {
    clearInterval(timer);
    timer = setInterval(cycleNext, 3400);
  });

  if (nextBtn) nextBtn.addEventListener("click", () => { clearInterval(timer); cycleNext(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { clearInterval(timer); cyclePrev(); });
});
