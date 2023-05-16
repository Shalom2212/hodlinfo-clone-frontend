function Cards(props){
    return(
        <>
            <br/>
                <tr  style={{backgroundColor: '#f8f9fa'}}  >
                <th className='p-3' scope="row" style={{borderRadius: '1rem 0 0 1rem'}} >{props.count}</th>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >{props.item.name}</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >{props.item.last}</td>
                <td className='p-3' style={{color:'#0c0f48', fontWeight:'600'}} >{props.item.buy}/{props.item.sell}</td>
                <td className='p-3'  style={{color:'#da5757', fontWeight:'600'}} >{props.item.volume}</td>
                <td className='p-3' style={{color:'#5dc7c2', fontWeight:'600', borderRadius: '0rem 1rem 1rem 0rem'}} >{props.item.base_unit}</td>
            </tr>
        </>
    )
}

export default Cards;