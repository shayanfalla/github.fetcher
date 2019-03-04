import React, { Component } from 'react';
import Axios from 'axios';
import Header from "./components/Header";
import styles from './App.css';
import UserInformation from "./components/UserInformation";
import GitHubUser from "./model/GitHubUser";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showUserInfo: false,
      errorMessage: '',
      errorFavoritesMessage: '',
      login: '',
      bio: '',
      avatar_url: '',
      name: '',
      html_url: '',
      id: 0,
      favoriteUsers: [],
    };

    this.URL = 'http://localhost:4000/api/users/';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveUserAsFavorite = this.saveUserAsFavorite.bind(this);
    this.removeUserAsFavorite = this.removeUserAsFavorite.bind(this);
  }

  componentDidMount() {
    Axios.get(this.URL).then(({ data }) => {
      this.setState({ favoriteUsers: data, errorFavoritesMessage: '', showUserInfo: false })
    }).catch(() => {
      this.setState({ errorFavoritesMessage: 'You have not added any favorites yet.' });
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
        showUserInfo: true,
        id: data.id,
        login: data.login,
        bio: data.bio,
        avatar_url: data.avatar_url,
        name: data.name,
        html_url: data.html_url,
        errorMessage: '',
      })
    }).catch(() => {
      this.setState({ showUserInfo: false, errorMessage: 'A user with that username could not be found!' });
    })
  }

  saveUserAsFavorite() {
    const userData = new GitHubUser(this.state);
    Axios.post(this.URL, userData.parseToJson()).then(() => {
      this.componentDidMount();
    }).catch(() => {
      this.setState({ errorMessage: "Couldn't save user, something went wrong..." });
    });
  }

  removeUserAsFavorite(id) {
    Axios.delete(this.URL + id).then(() => {
      this.componentDidMount();
    }).catch(() => {
      this.setState({ errorFavoritesMessage: "Couldn't delete user, something went wrong..." });
    });
  }

  showInformation() {
    const { showUserInfo } = this.state;
    const userHandler = this.saveUserAsFavorite;
    const state = { ...this.state, userHandler, text: 'Set as Favorite' };
    if (showUserInfo) {
      return <UserInformation {...state}/>
    } else {
      return <div/>
    }
  }

  render() {
    const views = this.showInformation();
    const { favoriteUsers, errorMessage, errorFavoritesMessage } = this.state;
    const userHandler = this.removeUserAsFavorite;

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
        {favoriteUsers.map((user, index) => {
          const users = { ...user, userHandler, text: 'Unfavorite' };
          return (
            <UserInformation key={index} {...users}/>
          )
        })}
        <p>{errorFavoritesMessage}</p>
      </div>
    );
  }
}

export default App;
