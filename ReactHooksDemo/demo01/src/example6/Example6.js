import React from 'react'
import Buttons from './buttons'
import ShowArea from './showArea'
import {Color} from './color'

function Example6(){
    return(
        <div>
            <div>Example6</div>
            <Color>
                <ShowArea/>
                <Buttons/>
            </Color>
            
        </div>
    )
}

export default Example6