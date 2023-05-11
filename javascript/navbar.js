const navbar = document.getElementById('navbar');
const navbarHeight = parseInt(getComputedStyle(navbar).height);

window.addEventListener('scroll', () => {
  if (window.scrollY >= navbarHeight) {
    navbar.classList.add('sticky');
    navbar.classList.remove('slide_up');
    return;
  }
  navbar.classList.remove('sticky');
  navbar.classList.add('slide_up');
});
