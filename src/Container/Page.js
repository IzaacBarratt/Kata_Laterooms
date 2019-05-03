import React,{Compoent} from 'react'

import FilterBox from '../Component/FilterBox'
import AccomContainer from './AccomContainer'


const Page = (props) => {

    function itemSelected(id) {
        alert('Item ' + id + ' was selected')
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FilterBox/>
            <AccomContainer onClick={itemSelected}/>
        </div>
    )

}

export default Page;