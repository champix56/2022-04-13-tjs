import React, { Component } from "react";
import FlexHLayout from "./components/layout/FlexHLayout/FlexHLayout";
import FlexWLayout from "./components/layout/FlexWLayout/FlexWLayout";
import Navbar from "./components/ui/Navbar/Navbar";
import "./App.css";
import MemeViewer from "./components/ui/MemeViewer/MemeViewer";
import MemeForm from "./components/functionnal/MemeForm/MemeForm";
import {store} from './store/store'
class App extends Component {
  constructor() {
    super();
    this.state = {
      current: {
        titre: "title",
        imageId: 0,
        text: "React is fun",
        x: 20,
        y: 20,
        fontSize: 20,
        fontWeight: 900,
        italic: true,
        underline: true,
        color: "#ACBE0F",
      },
      images: [],
    };
  }
  componentDidMount(){
    this.setState({images:store.getState().ressources.images})
    store.subscribe(()=>{
      this.setState({images:store.getState().ressources.images})
    })
  }
  render() {
    console.log(store)
    return (
      <div className="App" style={{ height: "95vh" }}>
        <FlexHLayout>
          <Navbar />
          <FlexWLayout>
            <MemeViewer
              meme={this.state.current}
              image={this.state.images.find((img) => {
                return img.id === this.state.current.imageId;
              })}
            />
            <MemeForm
              meme={this.state.current}
              images={this.state.images}
              onFormValuesChanged={(newMeme) => {
                this.setState({ current: newMeme });
              }}
            />
          </FlexWLayout>
          <div className="footer" style={{ textAlign: "center" }}>
            Copyright &copy; DESORBAIX
          </div>
        </FlexHLayout>
      </div>
    );
  }
}

export default App;
