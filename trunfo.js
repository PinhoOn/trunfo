var cardMathDef = {
  image: "https://i.imgur.com/dLqM8zB.png",
    stats:{
  name: " Matheus Observador",
  attack: "0, pois ele observa",
  defense: "90, pois ele tudo vê",
  magic: "0, apenas um observador"
    }
}

var cardMathAtack = {
  image:"https://i.imgur.com/A8sMNLB.png",
  stats:{
    name:"Matheus Putaço",
    attack:"90, pois ele ta puto carai",
    defense:"0, ele só quer bater em geral",
    magic:"50, o negocio é socão"
  }
}

var cardGabriel = {
  image: "https://i.imgur.com/jYSdOCt.png",
  stats:{
    name: "Gabriel Pinho",
    attack:"100000, Gabriel Pinho é implacavel",
    defense:"100000, Achas que pode me ferir?",
    magic:"100000, O proprio Bruxão",
  
}
}

var cardPinhoGent = {
  image: "https://i.imgur.com/YhWC8px.png",
  stats:{
    name:"Pinho Gentleman",
    attack:"0, Concede a vitoria ao oponente",
    defense:"0, Deixa o oponente ganhar",
    magic:"0, Cordialmente oferece a vitoria"
  }
}

var cardPinhoAtack = {
  image: "https://i.imgur.com/GXX4hZk.png",
  stats:{
    name: "Pinho SaiaJeans",
    attack:"50, um iniciante na arte do duelo",
    defense:"20, mó magrelo",
    magic:"30, solta no maximo um peidinho"
  }
}

var cardGuizoPokas = {
  image: "https://i.imgur.com/aVRxxRY.png",
    stats:{
    name: "Guizo Pokas Ideia",
    attack:"0, ele fica imovel",
    defense:"0, menino fragil",
    magic:"100, te mata com o olhar"
  }
}

var cardGuizoReza = {
  image: "https://i.imgur.com/66qIh7C.png",
  stats:{
    name: "Avemaria cheia de Guizo",
    attack:"0, pois ele pede para ganhar",
    defense:"0, ele só quer ganhar",
    magic:"0, deixa ele ganhar mano"
  }
}
var cardPinho
var numberCardPlayer
var cards = [cardMathDef, cardMathAtack, cardGabriel, cardPinhoGent, cardPinhoAtack, cardGuizoPokas, cardGuizoReza]

function randomCard(){
  var numberCardPinho = parseInt(Math.random() * 7)
  cardPinho = cards[numberCardPinho]
  console.log(cardPinho)
  
  var numberCardPlayer = parseInt(Math.random() * 7)
  while (numberCardPlayer == numberCardPinho){
  numberCardPlayer = parseInt(Math.random() * 7)}

  cardPlayer = cards[numberCardPlayer]

function imageCardPinho(){
  document.getElementById("my__card").style.backgroundImage = `url(${cardPinho.image})`
}
imageCardPinho()

function imageCardPlayer(){
  document.getElementById("your__card").style.backgroundImage = `url(${cardPlayer.image})`
}
imageCardPlayer()

function statsCardPlayer(){
  var statsCardPlayer = document.getElementById("your--card--stats")
  for (var stat in cardPlayer.stats)
  var p = `<p> ${cardPlayer.stats} </p>`
  statsCardPlayer.innerHTML = p
}
statsCardPlayer()

}
