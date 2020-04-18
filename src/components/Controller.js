import React,{Component} from "react";
import axios from 'axios';
import Container from './Container';
const defaultSearch="stars";
import {memo} from '../helpers/memoFunction';

class Controller extends Component{
    constructor(props) {
        super(props);
        this.state={
            data:[]
        };
        this.getImgMemo=memo(this.getImg);
    }

    getImg(text){
        return axios.get(`https://pixabay.com/api/?key=16060319-ef1e9806c3a52fb5cb769d29b&q=${text}&image_type=photo`).then((response)=>response.data.hits);
    }

    fetchImgs(text){
        this.getImgMemo(text || defaultSearch).then(res => this.setState({data:[...this.state.data,...res]}));
        //console.log('memo: ', this.getImgMemo('a'));
    }

    toggle(status){
        this.setState({toggle:status})
    }

    componentDidMount() {
        this.fetchImgs();
    }

    render() {
        console.log('state: ',this.state);
        return (
            <div>
                {this.state.data.length &&
                    <Container
                        data={this.state.data}
                    />
                }
            </div>
        );
    }
}

export default Controller;
