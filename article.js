function Article() {// declare a function article
    return (// the fuction has returned value of JSX which is our way of telling react hey when you want to put this component on the DOM here is what it shuold become
        <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
        

    );
    
}
// make the component to idsplay a single users comment
function Comment() {
    return <div>Naturally, I agree with this article.</div>;
}

// use the components
function App() {
    return (
        <div>
            <Article />
            <Comment />
        </div>
        
    );
    
}
// naming the components 
function Article() {// functions name should start with a capital name 
    return (
      <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
    );
  }
  function Comment() {
    return <div>Naturally, I agree with this article.</div>;
  }
  // a class component 
  class Comment extends React.Component {
    render() {
      return <div>Naturally, I agree with this article.</div>;
    }
  }

  // the syntax code wen using JSX
  import React from 'react';
// props is used to pass data in the component
// Functional Component
// props is passed as a parameter 
const Greetings = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to my React application.</p>
    </div>
  );
};

// the syntax code when using class 
import React, { Component } from 'react';

// Class Component
// in the class componet props its accessed using this.props 
class Greeting extends Component {
  render() {
    // the props object is used to pass data in the component
    return (// 
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Welcome to my React application.</p>
      </div>
    );
  }
}
// this makes the component available for use in other parts of the application

export default Greeting;

// import React from 'react';
// import Greeting from './Greeting';

// const App = () => {
//   return (
//     <div>
//       <h1>Welcome to My React App</h1>
//       <Greeting name="Alice" />
//       <Greeting name="Bob" />
//     </div>
//   );
// };

// export default App;

    

    
