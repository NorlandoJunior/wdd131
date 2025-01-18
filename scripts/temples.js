document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = document.lastModified;

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    hamburger.textContent = nav.classList.contains('hidden') ? '☰' : '✖';
});
