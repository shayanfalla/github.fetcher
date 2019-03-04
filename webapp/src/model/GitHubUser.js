
export default class GitHubUser {
  constructor(data){
    this.id = data.id;
    this.login = data.login;
    this.bio = data.bio;
    this.avatar_url = data.avatar_url;
    this.name = data.name;
    this.html_url = data.html_url;
  }

  parseToJson() {
    return {
      id: this.id,
      login: this.login,
      bio: this.bio,
      avatar_url: this.avatar_url,
      name: this.name,
      html_url: this.html_url,
    };
  }
}