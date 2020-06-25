const checkbox = document.getElementById('checkbox');
const { body } = document;

checkbox.addEventListener('change', e => {
    e.preventDefault;
    body.classList.toggle('dark-theme');
})