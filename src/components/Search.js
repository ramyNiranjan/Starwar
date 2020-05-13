
import { CharactorsInfo} from './Characters-fetch'
import { updateDom, pagination} from './DomUi'

const search = document.querySelector(".heading__search");
const searchInput = document.querySelector(".heading__search-input");
const searchInputClose = document.querySelector(".heading__search-close");
const searchIcon = document.querySelector(".heading__search");
const error = document.querySelector(".error");

const searchTitle = document.querySelector('.search-results__title')


function showSearchInput(){
  search.addEventListener('click',()=>{
    searchInput.style.transform = "translate(0vw)";
    searchIcon.style.display='none'
    searchInputClose.style.display='block'
  })
  searchInputClose.addEventListener('click',()=>{
    searchIcon.style.display = "block";
    searchInput.style.transform = "translate(100vw)";
    searchInputClose.style.display = "none";
    searchInput.value=''
    
    //when nothing find & user click input, then showing characters again
    CharactorsInfo('').then(data => {
      updateDom(data)
      searchTitle.style.display = 'none'
      pagination.style.display = 'flex'
      error.style.display = 'none'
    })
    
  })
  
}

function userSearch(){
  searchInput.addEventListener('input',(e)=>{
    searchTitle.style.display='block'
    pagination.style.display='none'
    error.style.display = 'none'
        if (e.target.value.trim().length==0){
          searchTitle.style.display = 'none'
          pagination.style.display = 'flex'
          error.style.display = 'none'
        }
      CharactorsInfo(e.target.value).then(data=>{
        if(data.length==0){
          error.style.display='flex'
        }
        updateDom(data)
      })
  })
}

export { showSearchInput,userSearch};