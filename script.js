const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.primary-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation menu')}))}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

/* Publications dropdown */
document.querySelectorAll(".publication-dropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");

  if (!toggle) return;

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = dropdown.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  dropdown.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dropdown.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
});

document.addEventListener("click", (event) => {
  document.querySelectorAll(".publication-dropdown.open").forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");

      const toggle = dropdown.querySelector(".dropdown-toggle");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});
