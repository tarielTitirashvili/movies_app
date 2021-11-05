import {
  SET_IMAGES_FOR_MOVIE,
} from '../constants'
const initState = {
 backDrops: [],
 posters: [],
 logos: [],
}
export default function showPicturesReducer(state = initState, action) {
  switch (action.type) {
    case SET_IMAGES_FOR_MOVIE:
      return{
        ...state,
        backDrops: action.backDrops,
        posters: action.posters,
        logos: action.logos
      }
    
    default:
      return state
  }
}