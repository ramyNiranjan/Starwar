
import { Charactors, CharactorsInfo} from './Characters-fetch';


export const pagination = document.querySelector('.pagination')
export const starCharacters = document.querySelector('.star-character')
const body = document.querySelector('body')
const headingContainer = document.querySelector('.heading__container')



export function init() {
  Charactors().then(data => updateDom(data.results))
  creatingPaginationList()

}

export async function charactersHandler(){
  
  pagination.addEventListener('click',(e)=>{
    if(e.target.className=='pagination__item'){
      starCharacters.innerHTML=''
      Charactors(e.target.innerHTML).then(data => { updateDom(data.results)}).catch(console.log)

    }

  })
}

export function updateDom(data){
  starCharacters.innerHTML = ''
  data.forEach(item=>{
    let template=`
       <div class="star-character__card">
            <h3 class="star-character__card-name">${item.name}</h3>
            </div>
            
    `
    starCharacters.innerHTML += template
  })
}


export function characterInfoUi(){
  starCharacters.addEventListener('click',(e)=>{
    if (e.target.classList.contains("star-character__card-name") || e.target.classList.contains("star-character__card")){
      starCharacters.classList.toggle('active')
      pagination.classList.toggle('active')
      CharactorsInfo(e.target.innerText).then(data=>{
        creatingPopup(data[0])
         const popUp = document.querySelector('.star-character__card-popup')
         headingContainer.classList.toggle('active')
        popUpClose(popUp)
   
      })
      
    }
  })
}

function creatingPopup(data){
  //removing used popup in dom before adding new when user click
  if(starCharacters.nextElementSibling){
    if(starCharacters.nextElementSibling.classList.contains('active')){
      starCharacters.nextElementSibling.remove()
    }
  }
  const template=`
  <div class="star-character__card-popup">
  <h3 class="star-character__card-popup-title">${data.name}</h3>
  <div class="star-character__card-popup-close">
    X
    </div>
    <div class="star-character__card-popup-content">
    <span>Birth Year :&nbsp;${data.birth_year} </span>
    <span>Gender :&nbsp;${data.gender} </span>
    <span>Skin Color :&nbsp;${data.skin_color} </span>
    <span>Height :&nbsp;${data.height} </span>
    <span>Mass :&nbsp;${data.mass} </span>
    </div>
    </div> 
    `
  starCharacters.insertAdjacentHTML('afterend', template);
    
}


 export function popUpClose(popUp){
  popUp.addEventListener('click',()=>{
    starCharacters.classList.toggle('active')
    pagination.classList.toggle('active')
    popUp.classList.toggle('active')
    headingContainer.classList.toggle('active')
  })
}





export function creatingPaginationList(){
  for (let i = 1; i <=9; i++) {
    let li =document.createElement('li')
    li.classList.add('pagination__item');
    li.textContent=i
  pagination.appendChild(li)
    
  }
}


