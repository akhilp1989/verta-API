/* eslint-disable no-unused-vars */
import React,{Component} from 'react'

class OtherAPI extends Component{
    constructor() {
        super();
        this.data = []
        this.URL = 'https://jsonmock.hackerrank.com/api/articles?page='
        this.limit=3
    }
    componentDidMount() {  
    }
    showResults = () => {
        var page=Math.ceil(this.limit/10)
        fetch(this.URL + page)
            .then(resp => resp.json())
        .then(d=>this.prepareMessage(d.data))    
    }
    prepareMessage = (arr) => {
        var updatedResults = [...arr]
        updatedResults = updatedResults.filter(x => x.title !== null || x.story_title !== null)
        for (var i = 0; i < updatedResults.length; i++){
            if (updatedResults[i].num_comments === null) {
                updatedResults[i].num_comments=0
            }
            if (updatedResults[i].title === null) {
                updatedResults[i].title=updatedResults[i].story_title
            }
        }
        this.sortResults(updatedResults) 
        var filteredData = this.filterByLimit(updatedResults, this.limit)
        console.log(filteredData.map(x=>x.title))
        
      
    }
    sortResults = (arr) => {
        arr.sort((a, b) => {
            var keyA = a.num_comments
            var keyB = b.num_comments
            if (keyA < keyB) return 1
            if (keyB < keyA) return -1
            return 0
        })
    }
    filterByLimit=(arr, limit)=>{
       // var updatedLimit = Math.ceil(limit / 10)
        return arr.slice(0,limit)
    }
   
    render() {
        
        
        return (
            <div>
                <button onClick={this.showResults}>Show results</button>
            </div>
        )
    }
}

export default OtherAPI