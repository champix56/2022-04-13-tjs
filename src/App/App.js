import React from "react";
import Button from "./components/Button/Button";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    //init de LA valeur etatique 
    this.state={counter:0,message:'hello'};
  }
  componentDidMount(){
    //console.log('le composant est chargé et operationnel');
  }
  componentDidUpdate(prevProps,prevState){
    //console.log('les valeurs state apres changements prev->actual',prevState,this.state );
    //console.log('les valeurs props apres changements prev->actual',prevProps,this.props );
  }
  render() {
    return (
      <div className="App">
        counter = {this.state.counter}
        <hr />
        <Button
          onButtonClicked={(unParam) => {
            this.setState({counter:this.state.counter+1});
            //console.log(this.state.counter);
          }}
          bgColor="tomato"
        >
          <img src="/img/ok_check.png" />
          <div style={{ display: "inline" }}>Mon text</div>
        </Button>
      </div>
    );
  }
}

export default App;
