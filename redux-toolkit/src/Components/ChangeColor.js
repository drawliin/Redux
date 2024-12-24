import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {changeColor} from '../features/theme'

export default function ChangeColor() {

    const dispatch = useDispatch();
    const [color, setColor] = useState('');
    
    return (
        <div>
            <input type='text' onChange={(e) => {setColor(e.target.value)}}/>
            <button onClick={() => dispatch(changeColor(color))}>Change Color</button>
        </div>
    )
}
