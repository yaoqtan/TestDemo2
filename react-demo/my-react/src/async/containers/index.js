/*
*  COPYRIGHT.GT. ALL RIGHTS RESERVED.
*/

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectReddit,fetchPostsIfNeeded,invalidateReddit} from "../actions";
import Picker from '../components/Picker';
import Posts from '../components/Posts';

class Async extends Component {
    componentDidMount(){

        const { dispatch,selectedReddit} = this.props;

        dispatch(fetchPostsIfNeeded(selectedReddit))
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.selectedReddit !== this.props.selectedReddit){
            const {dispatch,selectedReddit}=nextProps;
            dispatch(fetchPostsIfNeeded(selectedReddit))
            console.log(this.props)
        }
    }
    handleChange = nextPeddit =>{
        this.props.dispatch(selectReddit(nextPeddit))
    };
    handleRefreshClick = e =>{
        e.preventDefault();
        const {dispatch,selectedReddit} = this.props;
        dispatch(invalidateReddit(selectedReddit));
        dispatch(fetchPostsIfNeeded(selectedReddit))
    };



    render(){
        const { selectedReddit,posts,isFetching,lastUpdated } =this.props;
        const isEmpty = posts.length===0;
        return(
            <div>
                <Picker value={selectedReddit}
                        onChange={this.handleChange}
                        options={['reactjs','frontend']}
                />
                <p>
                    {lastUpdated &&<span>
                        Last updated at {new Date(lastUpdated).toLocaleDateString()}.{' '}
                    </span>
                    }
                    {!isFetching && <button onClick={this.handleRefreshClick}>
                        Refresh
                    </button> }
                </p>
                {isEmpty ? (isFetching ?<h2>Loading...</h2>:<h2>Empty.</h2> ):<div style={{opacity:isFetching ? 0.5:1}}>
                    <Posts posts={posts}/>
                </div> }
            </div>
        )
    }
}

Async.propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state =>{
    const {selectedReddit,postsByReddit} = state;
    const {
        isFetching,
        lastUpdated,
        items:posts
    } = postsByReddit[selectedReddit] ||{
        isFetching:true,
        items:[]
    };
    return{
        selectedReddit,
        posts,
        isFetching,
        lastUpdated
    }
};
export default connect(mapStateToProps)(Async);