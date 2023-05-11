const body = document.querySelector('body');
const pageOverlay = document.getElementById('page-overlay');
const sidebar = document.getElementById('sidebar');
const openSidebarBtn = document.getElementById('open-sidebar-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');

openSidebarBtn.addEventListener('click', () => {
  body.style.overflowY = 'hidden';
  pageOverlay.classList.add('active');
  sidebar.classList.add('active');
});

closeSidebarBtn.addEventListener('click', () => {
  body.style.overflowY = 'auto';
  pageOverlay.classList.remove('active');
  sidebar.classList.remove('active');
});

// closes the sidebar when you click a link
window.addEventListener('scroll', () => {
  body.style.overflowY = 'auto';
  pageOverlay.classList.remove('active');
  sidebar.classList.remove('active');
});
