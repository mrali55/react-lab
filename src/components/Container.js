import React,{Component} from "react";
import View from "./View";

class Container extends Component{


    render() {
        return (
            <div>
                <View
                    data={this.props.data}
                />
            </div>
        );
    }
}

export default Container;