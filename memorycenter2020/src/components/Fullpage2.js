
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       hola mundo 
//     </div>
//   );
// }





/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Modelados3d from './Modelados3d.js';
import Titulo1 from './Titulo1';
import Titulos2 from './Titulos2';
import Titulos3 from './Titulos3';
import Parrafos from './Parrafos';
import Card from './Card.js'
// import ImageSlider from './ImageSlider';
// import { SliderData } from './SliderData'
import Deck from './tarjetas'

// import "./styles.css";

class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        {this.props.content}
      </div>
    );
  }
}

const anchors = ["firstPage", "secondPage"];

const FullpageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#E8910C", "#E8910C"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <Fragment>
          
            <MySection content={
              <Fragment>
                
                  <div className="titulo">

                    <Titulo1 name='TRANSFORMACIÓN DIGITAL' />

                  </div>
                  <div className="contcard">

                    <Card name='Programación 1' logo={"https://dam.smashmexico.com.mx/wp-content/uploads/2017/11/aquaman-diferentes-versiones-dc-comics.jpg"} />

                    <Card name='Computación grafica' logo={"https://www.latercera.com/resizer/7vxQViJs1gRx0T1QymHFglA6i1M=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/ZMGEWNUDSVGF7DBK4QPI74GC2Q.jpg"} />

                    <Card name='Programación 3' logo={"https://www.yocomics.com/wp-content/uploads/All-Star-Superman-feature-image.jpg"} />

                  </div>
                
              </Fragment>
            } />
            <MySection content={
              <Fragment>
               
                  <div className="titulover">
                    <Titulo1 name='DOCENTES' />
                  </div>
                  <div id="root2" className="slidedocentes">
                    <Deck/>
                  </div>
               
              </Fragment>
            } />

          
        </Fragment>
      );
    }}
  />
);

export default FullpageWrapper;

    // ReactDOM.render(<FullpageWrapper />, document.getElementById("root"));