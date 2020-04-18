import React,{Component} from "react";

class Content extends Component{
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
            <div>
                <span></span>
            </div>
        );
    }
}