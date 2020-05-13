import axios from "axios";



export const Charactors= async(pageNo=1)=>{
  const res = await axios(`https://swapi.dev/api/people/?page=${pageNo}`);
  return res.data
}
export const CharactorsInfo= async(name)=>{
  const res = await axios(`https://swapi.dev/api/people/?search=${name}`);
  return res.data.results
}


