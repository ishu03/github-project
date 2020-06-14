import React from 'react'
import spinner from '../images/loader3.gif'

const Spinner = ()=>{

    return(
        <div>
            <img 
                src={spinner}
                style= {{ width:"200px", margin : 'auto', display : 'block'}}
                alt="loading..."
                />
        </div>
    )
}

export default Spinner;