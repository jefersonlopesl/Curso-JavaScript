function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <12) {
  //Bom dia :) 
  img.src ='imagem/manha.jpg'
  document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    img.src = 'imagem/tarde.jpg'
    //boa tarde
    document.body.style.background = '#b9846f'
} else {
    img.src = 'imagem/noite.jpg'
    //boa noite
    document.body.style.background = '515154'
}

}
