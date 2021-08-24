import React, {useState} from 'react'
import "./components-styles/Note.css"
import EditIcon from '@material-ui/icons/Edit';
import StarRateIcon from '@material-ui/icons/StarRate';
import {connect} from 'react-redux'

function Note({dispatch, title, story, date, favorite = false}) {
  const colorGenerator = () => {
    const colors = ["#FFC972", "#FF9B76", "#E4EE90", "#B692FD", "#00D4FE"];
    let randomIndex = Math.floor(Math.random() * 5);
    return colors[randomIndex];
  }

  const [isStarred, setIsStarred] = useState(favorite)

  return (
    <div className="note p-4 rounded-2xl transform hover:scale-110 duration-200 ease-out" style={{backgroundColor: colorGenerator(), position: "relative"}}
      onClick={()=> dispatch({
        type: "READ_STORY",
        title,
        story,
        show: true
      })}
    >
      <h1 className="font-semibold mb-2">
         {title}
      </h1>
      <p>{story}
      </p>
     <span className="edit"><EditIcon /></span> 
     <span className="favorite" onClick={()=> setIsStarred(!isStarred)}>
       <StarRateIcon style={{
         color: `${isStarred ? "#FFD100" : "#fff"}`
       }} />
     </span>
     <div className="pt-2 flex justify-start font-semibold text-sm"> {date}</div>
    </div>
  )
}

export default connect((state)=> ({...state}))(Note)
