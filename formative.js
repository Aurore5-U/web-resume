const scrollTop = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTop.style.display = 'flex';
  } else {
    scrollTop.style.display = 'none';
  }
});
scrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


window.addEventListener('load', () => {
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = progress + '%';
  });
});


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}
document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});
