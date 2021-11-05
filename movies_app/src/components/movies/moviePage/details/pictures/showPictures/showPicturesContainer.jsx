import React, { useEffect } from 'react'
import ShowPictures from './showPictures'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { getBackDropsThunk } from '../../../../../../redux/action/showPicturesAction'

export function ShowPicturesContainer(props) {
  const {id,type} = useParams()
  function checkType(type) {
    if(type === 'posters'){
      return <ShowPictures pictures = {props.posters} />
    }else if(type === 'logos'){
      return <ShowPictures pictures = {props.logos} />
    }else if(type === 'backdrops'){
      return <ShowPictures pictures = {props.backDrops} />
    }
  }
  useEffect(()=>{
    props.getBackDropsThunk(id)
  },[id, type] )

  return (
    <div>
      {checkType(type)}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    logos: state.pictures.logos,
    posters: state.pictures.posters,
    backDrops: state.pictures.backDrops,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBackDropsThunk(id){
      dispatch(getBackDropsThunk(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPicturesContainer)