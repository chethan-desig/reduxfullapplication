import React from 'react';
import {Link} from 'react-router-dom';

const LatestDispaly =(props)=>{
    const newsrender = ({ldata})=>{
        if(ldata){
            return ldata.map((item)=>{
                const myimage={
                    background:`url('/images/covers/${item.cover}.jpg')`
                }
                return(
                    <Link to= {`details/${item.id}`} className="artist_item" style={myimage} key={item.id}>                                
                    <div>{item.name}</div>
                </Link>
                   
                )
                
            })
        }else{
            return(
                <img src={'/images/loader1.gif'}/>
            )
        }
    }
    return(
        <div className="artist_list">
            {newsrender(props)}
        </div>
    )
}
export default LatestDispaly;
