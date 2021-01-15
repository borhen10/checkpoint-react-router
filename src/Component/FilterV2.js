import React from 'react';
import { Rate } from 'antd';
import 'antd/dist/antd.css';

export const FilterV2 = ({ratevalue, setratevalue, searching}) => {
    const ratingSetValueHandler = (nextValue) => {
        setratevalue(nextValue);
    }
    return (
        <div className='header'>
                <input type='text' 
                onChange={e =>searching(e.target.value)}
                placeholder='Anime Search ...'></input>
            <br></br>
            <Rate style={{fontSize : 30}}
                value={ratevalue}
                onChange={ratingSetValueHandler}
                allowClear={false}/>
        </div>
    )
}