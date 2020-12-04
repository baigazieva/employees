import React, {Component} from  'react';
import Lists from './components/Lists';
import './components/employee.css'
import Search from './search/Search'
import './search/search.css'
class App extends Component{
  constructor(){
    super();
    this.state ={
      employee:[],
      loading: false,
      search: ''
    }
  }
  getData =()=> {
    this.setState({loading:true})
    fetch('https://raw.githubusercontent.com/maratgaip/json/master/people.json')
    
    .then(json=>json.json()) 
    .then(employee=>this.setState({employee, loading:false}))
      
  }
  componentDidMount(){
    this.getData();
  }
getSearch =(e)=>{
  this.setState({search:e.target.value})
  console.log('this',e.target.value)
}

  render(){
      
    const {employee, loading,search} = this.state
    const filteredData = employee.filter(employees =>{
     const fName = employees.first_name.toLowerCase().includes(search.toLowerCase())
     const lName = employees.first_name.toLowerCase().includes(search.toLowerCase())
     return fName || lName
    })
    const loader = <div className="lds-dual-ring"></div>
    
    const content = loading ? loader : <Lists employee={filteredData}/>
    if(!loading && !filteredData.length){
      return <div className="not-found">Data not Found</div>
    }
    return (
      <div className="container">
            <Search value={search} getSearch={this.getSearch}/>
            <div className="lds-dual-ring "></div>
    {content}
     </div>
    )
  }
}
export default App;
