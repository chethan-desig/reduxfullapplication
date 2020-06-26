import React from 'react';
import {Link} from 'react-router-dom';

const Articlesdisplay =(props)=>{
    const newsrender = ({adata})=>{
        if(adata){
            return adata.map((item)=>{
                const myimage={
                    background:`url('/images/covers/${item.cover}.jpg')`
                }
                return(
                    <Link to={`/details/${item.id}`} className="artist_item" style={myimage} key={item.id}>                                
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
        <div className="panel panel-primary">
        
        <div className="panel-heading">
            <h2>ARTICLES </h2>
        </div>
        <div className="artist_list">
            {newsrender(props)}
        </div>
    </div>
    )
}
export default Articlesdisplay;
