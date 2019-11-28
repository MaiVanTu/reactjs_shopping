import React from 'react';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show : false
    }
  }
  

  UNSAFE_componentWillReceiveProps() {
    this.setState({
      show : false
    })
  }

  render() {
    var { message } = this.props;
    return (
      <h3 className="messagebox">
        <span className={this.state.show ? 'success badge amber darken-2' : 'badge amber darken-2'}>{message}</span>
      </h3>
    );
  }
}

export default App;
