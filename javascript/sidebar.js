const sidebar = document.getElementById('sidebar');
const openSidebarBtn = document.getElementById('open-sidebar-btn');

openSidebarBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});
