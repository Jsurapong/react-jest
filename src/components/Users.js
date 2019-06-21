import React, { Component } from 'react';
import axios from 'axios';

const fetchUser = () => axios.get('https://jsonplaceholder.typicode.com/users');

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  getUser() {
    return fetchUser().then(res => {
      const { data } = res;

      this.setState({ data });
    });
  }

  componentDidMount() {
    return this.getUser();
  }
  render() {
    const { data } = this.state;

    return (
      <ul>
        {data.map(user => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    );
  }
}
