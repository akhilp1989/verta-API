import React,{Component} from 'react'


import './ResultTable.styles.css'
//import ReactDOM from 'react-dom'
import DetailContent from './DetailContent.component'


class ResultOutputClass extends Component {
    
    constructor(){
        super();
        this.state={
            selectedPost:'',
            arrowKeyValue:0 ,
            url:'' ,
            detailHTML:''   
        }
        this.onClick=this.onClick.bind(this)
        this.onKeyPressed=this.onKeyPressed.bind(this)
        this.onKeyDown=this.onKeyDown.bind(this)
       
    }
    getUrl=()=>{
        return 'http://vertauiinterview3zcck5-env.c3jmih47du.us-east-1.elasticbeanstalk.com/static/'
    }
       
               onClick=(e)=>{
            e.preventDefault();  
        this.setState({selectedPost:e.target.innerText})
       }

       onKeyPressed=(e)=>{
           e.preventDefault()
         // console.log(e.target.innerText)
           let arrowDown=this.state.arrowKeyValue
          if(e.which===40){
            this.setState({arrowKeyValue:arrowDown+1})
          }
          else if(e.which===38){
            this.setState({arrowKeyValue:arrowDown-1})
          }
          else if(e.which ===13 || e.keyCode===13){
              this.setState({url:this.props.data[this.state.arrowKeyValue]})
    
            //this.showContent(this.props.data[this.state.arrowKeyValue])
          }
       }
    //    showContent=(data)=>{
    //     const url='http://vertauiinterview3zcck5-env.c3jmih47du.us-east-1.elasticbeanstalk.com/static/'
    //     let urlToFetch=url+data;
    //     let contentText=''
    //     fetch(`template/${urlToFetch}`)
    //     .then(resp=>resp.text())
    //     .then(content=>)
    //     .catch(err=>console.log(err));  
    // }

       onKeyDown=(e)=>{
           //console.log('Inside onKeyDown-',e.which);
           if(e.which===13){
            window.open(this.getUrl()+this.state.url,'_self');
            }
       }

    render()
{
   
    const {data}=this.props
    return(
        <div className='outerMostDiv'>
         {data.length>0?
           <h2>Results ...</h2>
        :null}    
        {data.map((d,index)=>
          (
            <ul className='listNode result-container'  key={index}   >
                  <li className={` listItems  ${index===this.state.arrowKeyValue ?'active':''} `} 
                  tabIndex='0'
                  onKeyDown=
                  {this.onKeyPressed}
                  onClick={this.onClick} >{d}</li>
            </ul>)
        )}
        <DetailContent data={this.state.url}   onKeyDown={this.onKeyDown}/>
        </div>
      )
}
}
export default ResultOutputClass

