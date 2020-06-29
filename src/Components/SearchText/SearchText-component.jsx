import React ,{Component} from 'react'
//import axios from 'axios';
import {withRouter} from 'react-router';
import LoadingSpinner from '../Spinner/LoadSpinner'
import ResultOutputClass from '../Results/ResultOuputClass.component'
import './searchText.styles.css';

class SearchText extends Component{
constructor(props){
    super(props);
    this.state={
        loading:false,
        resultData:[],
        filteredData:[],
        count:10,
        randomDelay:false,
        selectedPost:''
     }
}

componentDidMount(){
    console.log('Inside componentDidMount-',this.state)
    // window.onpopstate=this.props.history.goBack()    
}
getFetchURL(){
  return  new URL('http://vertauiinterview3zcck5-env.c3jmih47du.us-east-1.elasticbeanstalk.com/search?');
}
fetchResults = (e)=>{
    if(e.target.value.length>0){
        this.setState({loading:true})
        var url=this.getFetchURL()
        var params={
            prefix:e.target.value,
            count:this.state.count,
            randomDelay:this.state.randomDelay
            };
        url.search=new URLSearchParams(params).toString();
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>this.updateResults(data.results))
    }
    }
   
updateResults=(data)=>{
    this.setState({
        loading:false,
        resultData:data,
        filteredData:data
    })
}
setCount=(e)=>{
    let count=e.target.value;
    let newResultData=[...this.state.resultData];
    //console.log('new Data-',newResultData);
    let arr=newResultData.splice(0,count)
   // console.log(arr)
    this.setState({filteredData:arr,count:count});
}

   render(){
       
        return(
            <div>
            <div className='search-container'>
            <h1 className='header'> Welcome to the Search File App</h1>
            <div className='inputText'>
            <input className='inputBox'  type='text' ref={this.inputText}
            name='inputText' tabIndex='-1' onChange={this.fetchResults}/>
            </div>
             </div>
                    <div>
                        <label className='label'>Filter for number of results</label>
                        <br></br>
                    <select className='selectValues'defaultValue="10" onChange={(event)=>{this.setCount(event)}}>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="10" >10</option>
                    </select>
                    </div>
                    
                   
                    
             {this.state.loading?<LoadingSpinner/>:
            <ResultOutputClass data={this.state.filteredData} />}
            </div>
        )
    }
}
  

export default withRouter(SearchText)