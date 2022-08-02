const Arrow = document.getElementById('Arrow');
function toggleMenu(){
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active')
}
Arrow.addEventListener('click', toggleMenu);
// ------ switch -------- //
const cancel = document.getElementById('cancel');
function toggleMenu(){
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active')
}
cancel.addEventListener('click', toggleMenu);