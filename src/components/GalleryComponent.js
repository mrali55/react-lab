import React,{Component} from "react";
import style from '../assets/gallery.scss';

class GalleryComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            status:0,
            currentSet:0
        }
    }

    toggle(move){
        let {status, currentSet} = this.state;
        move==='next' ? status++ : status--;
        console.log('currentSet*: ',currentSet );

        if (status > 2){
            status=0;
            currentSet++;
        }
        if (status<0){
            status=2;
            currentSet--;
        }
        console.log('currentSet**: ',currentSet );

        this.setState({status,currentSet});
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
        console.log('state: ',this.state );

        let imgClass=this.getImgClass();
        let {currentSet} = this.state;
        let {data} = this.props;
        console.log('currentSet: ',currentSet );
        console.log('data: ',data );


        return (
            <div className={style.main}>
                <div className={style.imgView}>
                    <div className={style.imageContainer +' '+ imgClass[0]}><img  src={data[currentSet].largeImageURL}/></div>
                    <div className={style.imageContainer +' '+ imgClass[1]}><img  src={data[currentSet+1].largeImageURL}/></div>
                    <div className={style.imageContainer +' '+ imgClass[2]}><img  src={data[currentSet+2].largeImageURL}/></div>


                </div>

                <button onClick={()=>this.toggle('next')}>next</button>
                <button onClick={()=>this.toggle('prev')}>prev</button>


            </div>
        );
    }
}

export default GalleryComponent;