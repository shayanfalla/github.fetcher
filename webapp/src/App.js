import React, { Component } from 'react';
import Axios from 'axios';
import Header from "./components/Header";
import styles from './App.css';
import UserInformation from "./components/UserInformation";

class App extends Component {
  login;

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      errorMessage: '',
      errorFavoritesMessage: '',
      username: '',
      bio: '',
      avatar_url: '',
      name: '',
      html_url: '',
      id: 0,
      input: '',
      favoriteUsers: [],
    };

    this.URL = 'http://localhost:4000/api/users/';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Axios.get(this.URL).then(({ data }) => {
      this.setState({favoriteUsers: data})
    }).catch(() => {
      this.setState({ errorFavoritesMessage: 'You have not added any favorites yet' });
    });
  }


  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { input } = this.state;
    Axios.get(this.URL + input).then(({ data }) => {
      this.setState({
        show: true,
        id: data.id,
        username: data.login,
        bio: data.bio,
        avatar_url: data.avatar_url,
        name: data.name,
        html_url: data.html_url,
        errorMessage: '',
      })
    }).catch(() => {
      this.setState({ show: false, errorMessage: 'A user with that username could not be found!' });
    })
  }

  render() {
    let views;
    const { show, favoriteUsers, errorMessage, errorFavoritesMessage } = this.state;
    if (show) {
      views = <UserInformation {...this.state}/>
    } else {
      views = <div/>;
    }
    return (
      <div>
        <Header/>
        <div className={styles.div}>
          <h2>Enter username that you would like to find on Github:</h2>
          <form onSubmit={this.handleSubmit}>
            <input name="input" onChange={this.handleChange} type="text"/>
            {views}
            <p>{errorMessage}</p>
          </form>
        </div>
        <h1>Favorites</h1>
        {favoriteUsers.map(users => (
          <UserInformation {...users}/>
        ))}
        <p>{errorFavoritesMessage}</p>
      </div>
    );
  }
}

export default App;
