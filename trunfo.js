var cardMathDef = {
  image: "image/mathdef.png",
  name: " Matheus Observador",
  attack: "0, pois ele observa",
  defense: "90, pois ele tudo vê",
  magic: "0, apenas um observador"
  }
var cardMathAttack = {
  image:"image/mathattack.png",
  name:"Matheus Putaço",
  attack:"90, pois ele ta puto carai",
  defense:"0, ele só quer bater em geral",
  magic:"50, o negocio é socão"
  }
var cardGabriel = {
  image: "image/gabriel.jpg",
  name: "Gabriel Pinho",
  attack:"100000, Gabriel Pinho é implacavel",
  defense:"100000, Achas que pode me ferir?",
  magic:"100000, O proprio Bruxão",
} 

var cardPinhoGent = {
  image: "image/pinhogentle.png",
  name:"Pinho Gentleman",
  attack:"0, Concede a vitoria ao oponente",
  defense:"0, Deixa o oponente ganhar",
  magic:"0, Cordialmente oferece a vitoria"
}

var cardPinhoAttack = {
  image: "image/pinhoattack.png",
  name: "Pinho SaiaJeans",
  attack:"50, um iniciante na arte do duelo",
  defense:"20, mó magrelo",
  magic:"30, solta no maximo um peidinho"
}

var cardGuizoPokas = {
  image: "image/guizopokas.png",
  name: "Guizo Pokas Ideia",
  attack:"0, ele fica imovel",
  defense:"0, menino fragil",
  magic:"100, te mata com o olhar"
}
var cardGuizoReza = {
  image: "image/guizoreza.png",
  name: "Avemaria cheia de Guizo",
  attack:"0, pois ele pede para ganhar",
  defense:"0, ele só quer ganhar",
  magic:"0, deixa ele ganhar mano"
}
var cardPinho
var numberCardPlayer
var cards = [cardMathDef, cardMathAttack, cardGabriel, cardPinhoGent, cardPinhoAttack, cardGuizoPokas, cardGuizoReza]

function randomCard(){
  var numberCardPinho = parseInt(Math.random() * 7)
  
  cardPinho = cards[numberCardPinho]
  
  var numberCardPlayer = parseInt(Math.random() * 7)
  while (numberCardPlayer == numberCardPinho){
  numberCardPlayer = parseInt(Math.random() * 7)}

  cardPlayer = cards[numberCardPlayer]

function imageCards(){
  document.getElementById("my__card").style.backgroundImage = `url(${cardPinho.image})`
  document.getElementById("your__card").style.backgroundImage = `url(${cardPlayer.image})`
}
imageCards()

function statsCardPlayer(){
  var statsCardPlayer = document.getElementById("your--stats")
  for (var stat in cardPlayer)
  var n = `<p> ${cardPlayer.name} </p>`
  var a = `<br> ${cardPlayer.attack} </br>`
  var d = `<br> ${cardPlayer.defense} </br>`
  var m = `<br> ${cardPlayer.magic} </br>`

  statsCardPlayer.innerHTML = n + a + d + m 
}
statsCardPlayer()

function statsCardPinho(){
  var statsCardPinho = document.getElementById("my--stats")
  for (var stat2 in cardPinho)
  var n2 = `<p> ${cardPinho.name} </p>`
  var a2 = `<br> ${cardPinho.attack} </br>`
  var d2 = `<br> ${cardPinho.defense} </br>`
  var m2 = `<br> ${cardPinho.magic} </br>`
  statsCardPinho.innerHTML = n2 + a2 + d2 + m2 
}

statsCardPinho()
}
