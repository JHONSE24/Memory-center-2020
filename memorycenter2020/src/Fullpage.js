
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

const anchors = ["firstPage", "secondPage", "thirdPage", "4Page"];

const FullpageWrapper = () => (
  <ReactFullpage
  anchors={anchors}
  navigation
  navigationTooltips={anchors}
  sectionsColor={["#282c34", "#ff5f45", "#0798ec", "#ff5f45"]}
  onLeave={(origin, destination, direction) => {
    console.log("onLeave event", { origin, destination, direction });
  }}
  render={({ state, fullpageApi }) => {
    console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
    
    return (
      <Fragment>
        <div>
          <MySection content={
            <Fragment>
              <div>
                hola!
              </div>
            </Fragment>
          } />
          <MySection content={"Keep going!"} />
          <MySection content={"Slide up!"} />
          <MySection content={"Hpta!"} />

        </div>
      </Fragment>
      );
    }}
    />
    );

    export default FullpageWrapper;
    
    // ReactDOM.render(<FullpageWrapper />, document.getElementById("root"));