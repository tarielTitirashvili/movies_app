import { 
  getBackDropsAPI,
} from "../../API/API"
import { 
  SET_IMAGES_FOR_MOVIE, 
} from "../constants"


export const getBackDropsThunk = (id) =>{
  return(dispatch)=>{
      getBackDropsAPI(id).then((data)=>{
          dispatch(setImagesAC(data.data.backdrops, data.data.posters, data.data.logos ))
      })
  }
}
const setImagesAC = (backDrops, posters, logos)=>({type: SET_IMAGES_FOR_MOVIE, backDrops, posters, logos})