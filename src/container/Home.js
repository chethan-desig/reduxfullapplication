import React,{Component,Fragment} from 'react';
import {connect } from 'react-redux';
import {latestNews,articleNews} from '../action';
import {bindActionCreators} from 'redux';
import LatestDispaly from '../component/Home/LatestDisplay';
import Articledispaly from '../component/Home/ArticleDisplay';


class Home extends Component{
    componentDidMount(){
        this.props.latestNews()
        this.props.articleNews()
    }
    render(){
        return(
            <Fragment>
           <LatestDispaly ldata={this.props.datalist.latestData}/>
           <Articledispaly adata={this.props.datalist.articleData}/>
           </Fragment>
        )
    }


}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.artist
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);