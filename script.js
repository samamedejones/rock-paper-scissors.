const imagesButtons = document.querySelectorAll('.option-image')
const container = document.querySelector('.container')
const resultTeste = document.querySelector('.result-test')
const userResult = document.querySelector('.user-result img')
const computerResult = document.querySelector('.computer-result img')
const userPlacar = document.querySelector('.user-placar')
const computerPlacar = document.querySelector('.computer-placar')

i = 0
a = 0



const imgGame = ['sources/img/pedra.png', 'sources/img/papel.png', 'sources/img/tesoura.png']

const winner = {
  RR: 'Empate',
  RP: 'Computador',
  RS: 'Você',
  PR: 'Você',
  PP: 'Empate',
  PS: 'Computador',
  SR: 'Computador',
  SP: 'Você',
  SS: 'Empate'
}

function handleClickImage(event) {
  computerResult.src = userResult.src = imgGame[0]
  const startClass = event.currentTarget
  container.classList.add('start')
  resultTeste.textContent = "..."
  const numberComputer = Math.floor(Math.random() * imgGame.length)
  const arrayImg = Array.from(imagesButtons)
  const handles = arrayImg.indexOf(startClass)
  arrayImg[handles].style.opacity = 1
  const userValue = ['R', 'P', 'S'][handles]
  const computerValue = ['R', 'P', 'S'][numberComputer]
  const somValue = userValue + computerValue
  const resultFinal = winner[somValue]
  const textWin = userValue === computerValue ? 'Empate' : resultFinal + ' Ganhou'

  console.log(resultFinal)

  



  setTimeout(() => {
    container.classList.remove('start')


    computerResult.src = imgGame[numberComputer]
    userResult.src = imgGame[handles]
    resultTeste.textContent = textWin
  
   setTimeout(() => {
    arrayImg[handles].style.opacity = 0.5

    if(textWin === "Computador Ganhou"){
      a++
      computerPlacar.textContent = a
    } else if(textWin === "Você Ganhou") {
      i++
      userPlacar.textContent = i
    }
   
   }, 1000); 
  
  }, 1900);


}



imagesButtons.forEach(img => {
  img.addEventListener("click", handleClickImage)
})