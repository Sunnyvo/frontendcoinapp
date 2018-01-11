import React from 'react';
import { getSearchResult } from './request';
import _ from 'lodash';
function withResult(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        platforms: []
      }
    }

    componentDidMount() {
      getResult('http://localhost:3000/platforms').then((response) => {
        this.setState({
          platforms: response
        })
      })
    }

    render() {
      return(<WrappedComponent {...this.props}/>)
    }
  }
}

export { withResult }
