function ola(){
    alert('Olá.')
}
function olapessoa(nome){
    alert(nome + ' seja bem vindo!')
}
//função captura de elemento
function saudacao(){
    const nome= document.getElementById('nome').value //pega um elemento pelo id
    alert('Olá ' + nome)
}
function mouseSobre(){
    alert('O mouse está em cima')

}
function mouseFora(){
    alert(' O mouse saiu!')
}
function textoModificado(){
    alert('Texto foi alterado')
}
const user= document.getElementById('user')
function emFoco(){
    user.style.border='3px solid green'
    user.style.background=' grey '
}
function semFoco(){
    user.style.border='1px solid black'
    user.style.background='white'

}