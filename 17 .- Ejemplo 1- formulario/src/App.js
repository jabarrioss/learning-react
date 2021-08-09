import { Component } from "react";

class App extends Component{
  constructor(props){
    super(props);
    console.log("Constructor");
  }

  componentDidMount(){
    console.log("Component did mount");
  }

  render(){
    return ( <div>Hola</div> );
  }

}
export default App;
