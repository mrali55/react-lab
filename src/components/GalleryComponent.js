import React,{Component} from "react";
import style from '../assets/gallery.scss';

class GalleryComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            status:0
        }
    }

    toggle(move){
        let current=this.state.status;
        move==='next' ? current++ : current--;
        if (current > 2){
            current=0;
        }
        if (current<0){
            current=2;
        }
        this.setState({status:current})
    }

    getImgClass(){
        let status=this.state.status;
        let imgClass=[];
        if(status===0){
            imgClass[0]=style.active;
            imgClass[1]=style.right;
            imgClass[2]=style.left;
        }
        if(status===1){
            imgClass[1]=style.active;
            imgClass[2]=style.right;
            imgClass[0]=style.left;
        }
        if(status===2){
            imgClass[2]=style.active;
            imgClass[0]=style.right;
            imgClass[1]=style.left;
        }
        return imgClass;
    }

    render() {
        console.log('g props: ',this.props.data);
        let imgClass=this.getImgClass();
        return (
            <div className={style.main}>
                <div className={style.imgView}>
                    <div className={style.imageContainer +' '+ imgClass[0]}><img  src={this.props.data[4].largeImageURL}/></div>
                    <div className={style.imageContainer +' '+ imgClass[1]}><img  src={this.props.data[3].largeImageURL}/></div>
                    <div className={style.imageContainer +' '+ imgClass[2]}><img  src={this.props.data[2].largeImageURL}/></div>


                </div>

                <button onClick={()=>this.toggle('next')}>next</button>
                <button onClick={()=>this.toggle('prev')}>prev</button>


            </div>
        );
    }
}

export default GalleryComponent;