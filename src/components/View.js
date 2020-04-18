import React,{Component} from "react";
import style from '../assets/view.scss';
import GalleryComponent from "./GalleryComponent";

class View extends Component{
    constructor(props) {
        super(props);
        this.state={
            toggle:true
        }
    }

    toggle(status){
        this.setState({toggle:status})
    }

    render() {
        return (
            <div className={style.view}>
                <GalleryComponent
                    data={this.props.data}
                    />

            </div>
        );
    }
}

export default View;