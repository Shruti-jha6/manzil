import React from 'react'
//import GitHubIcon from '@mui/icons-material/GitHub';
//import git from '../img/Git.png';
const Card = (props) => {
  return (
    
        <div className='card'>
            <img src={props.src} alt="github" className='card-img'></img>
            <div className='card-info'>
                
                <h3 className='card-title'>{props.user}</h3>
                <a href={props.link} target="">
                    <button className="see-but"> See {props.site} </button>
                </a>
            </div>
        </div>
      
    
  )
}

export default Card
