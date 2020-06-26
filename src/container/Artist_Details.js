import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import {selectedNews,clearNews } from '../action';
import Albums from './Albums';
import LikeCounter from './LikeCounter';


class NewsDetails extends Component{
    componentDidMount(){
        this.props.dispatch(selectedNews(this.props.match.params.id))
    }

    renderNews = ({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <div>
                    <div className="tags">
                        <span>
                            <i className="fa fa-eye">
                                {data.views}
                            </i>
                        </span>
                        <span>
                            <i className="fa fa-thumbs-up">
                                {data.likes[0]}
                            </i>
                        </span>
                        <span>
                            <i className="fa fa-thumbs-down">
                                {data.likes[1]}
                            </i>
                        </span>
                    </div>
                    <div className="artist_bio">
                    <div className="artist_image">
                    <span style={{background:`url('/images/covers/${data.cover}.jpg')`}}></span> 
                        <h3>{data.name}</h3>
                        <div className="bio_text">
                            {data.bio}

                           

                        </div>
                        <Albums albumdata={data.albums}/>

                    </div>
                    
                        <div>
                            <LikeCounter
                            artistId={data.id}
                            likes={data.likes[0]}
                            dislikes={data.likes[1]}/>
                        </div>
                    </div>
                </div>
                )
            })
        }
    }
    render(){
        return(
            <div className="news_container">
                {this.renderNews(this.props.details)}
            </div>
        )
    }

    componentWillUnmount(){
        this.props.dispatch(clearNews())
    }
}


function mapStateToProps(state){
    return{
        details:state.artist
    }
}

NewsDetails.protoTypes ={
    dispatch:PropsTypes.func
}


export default connect(mapStateToProps)(NewsDetails);