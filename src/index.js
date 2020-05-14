import './scss/main.scss';
import {
  showSearchInput,
  userSearch
} from "./components/Search";

import { charactersHandler, characterInfoUi, init} from './components/DomUi'


document.addEventListener('DOMContentLoaded', init)



// display characters
charactersHandler()
//header search animation 
showSearchInput()
//showing additional info of characters
characterInfoUi()
//search func
userSearch()


