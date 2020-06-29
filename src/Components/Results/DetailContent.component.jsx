import React from 'react'
//import {Link} from 'react-router-dom'
const detailContent=(props)=>{
    return(
<div >
{props.data.length?(
   <a href='#' onKeyDown={props.onKeyDown} onClick={(e)=>e.preventDefault()}>{props.data}</a>):null}
</div>    
) 
}
export default detailContent