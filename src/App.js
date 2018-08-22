import React, { Component } from 'react';
import './App.css';
import AsyncAwait from './AsyncAwait'

class MyError extends Error {
  constructor(error) {
    super(error)
  }
  toString(error) {
    return 'SUPER ERROR!:' + error
  }
}

class App extends Component {
  state = {
    jsonString: `{"name": "Mike"}`,
    fieldToGrab: '',
    message: '',
  }

  makeError = () => {
    throw new MyError('APPLICATION TERMINATING') 
  }

  getFieldValueFromJSON = () => {
    try {
      const jsonObject = JSON.parse(this.state.jsonString)
      this.setState({ message: `The value is ${jsonObject[this.state.fieldToGrab]}` })
    } catch(err) {
      console.log('------------ err', err)
      this.makeError()
      this.setState({ message: `There was an error ( ${err} )`})
    } finally {
      console.log('Finally')
    }
  }
  
  render() {
    const { message, jsonString, fieldToGrab } = this.state
    
    return (
      <div>
        <h1>Advanced JavaScript</h1>
        <div>
          <div>JSON: <textarea value={jsonString} cols="50" rows="5" onChange={e => this.setState({ jsonString: e.target.value })} /></div>
          <div>
            Field to grab: <input value={fieldToGrab} onChange={e => this.setState({ fieldToGrab: e.target.value })} />
            <button onClick={this.getFieldValueFromJSON}>Get field value</button>
          </div>
        </div>
        <div>{message}</div>
        <AsyncAwait />
      </div>
    );
  }
}

export default App;
