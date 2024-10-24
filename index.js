var menu = document.getElementById('menu')
var sim = document.getElementById('Sim')
sim.addEventListener('click', visible)
function visible(){
    menu.style.visibility = 'visible'
}
var não = document.getElementById('Não')
não.addEventListener('mouseenter', nao)
não.addEventListener('mouseout', n)
function nao(){
    não.style.visibility = 'hidden'
    sim.style.left = '800px'
}
function n(){
    não.style.visibility = 'visible'
    sim.style.left = '600px'
}