
import './App.css';
import React from 'react';
import reactDom from 'react-dom';
class Todo extends React.Component {
  constructor(props){
    super();
   this.state = {
     list:[],
     item:''
   }
    }
    handle = (e) =>{
      
      this.setState({
      item: e.target.value

      });
    }
    add =(e)=>{
      this.setState({
        list: [...this.state.list,this.state.item]
  
        });  
    }
  render(){
    return (
      <div>
            <div className="row  ">
              
                 <div className="col-md-4"></div>
                 <div className="col-md-4">
                 <h2 className=" mt-3 "> Todo List  </h2>
                     <div className="row mt-3 " >
                       
                            <div className="col-md-6">
                              
                            <input type="text" name="todo"  className="form-control" onChange={this.handle}></input>
                            </div>
                            <div className="col-md-6">
                            <button className="btn btn-success " onClick={this.add}>Add</button>
                            </div>
                     </div>
               
                
                        <div>
                      

                               
                                <table className="table mt-5">
                                <tr>
                                            <td>S.no</td>
                                            <td>Work</td>
                                          </tr>  
                        {
                                      this.state.list.map((ele,i) => {
                                        return (<>
                                         
                                               <tr>
                                                <td>{++i}</td>
                                                <td>{ele}</td>
                                              </tr>
                                            </>
                                        )
                                      })
                                    }
                             </table>       
                        </div>

                 </div>
                 <div className="col-md-4"></div>
           </div>
        
      </div>
        
   );
  }
 
}

export default Todo;
