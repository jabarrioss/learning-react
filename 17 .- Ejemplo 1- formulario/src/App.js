import { Component } from "react";

class App extends Component{
  constructor(props){
    super(props);
    console.log("Constructor");

    this.state = {
      name: ""
    };
  }

  componentDidMount(){
    console.log("Component did mount");
  }


  componentDidUpdate(){
    console.log("Component did update");
    console.log(this.state.name);
  }

  shouldComponentUpdate(){
    // This method returns a boolean to know if the component should update, duh
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(prevProps, prevState);
  }

  render(){
    return ( <div>
      {/* 
        Here we use destructuring to extract the
        value prop from the event object
        event.target.value = {target: { value }}
       */}

       {/* Also since we are using a class component for this example we use the this.setState method to update the current state of the component */}
       {/* Note from the teacher: this way of updating components is only recommended when you are perfoming just 1 action in the event handler */}
      <input type="text" value={this.state.name} onChange={({target : { value }}) => this.setState({name:value})} />
    </div> );
  }

}
export default App;
