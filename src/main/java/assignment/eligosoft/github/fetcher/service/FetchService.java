package assignment.eligosoft.github.fetcher.service;

import assignment.eligosoft.github.fetcher.model.GithubUser;
import assignment.eligosoft.github.fetcher.repository.GithubUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class FetchService {

  private final GithubUserRepository repository;
  private static final String baseURL = "https://api.github.com";

  @Autowired
  public FetchService(GithubUserRepository repository) {
    this.repository = repository;
  }

  public Object getUser(String username) {
    final String URL = baseURL + "/users/" + username;

    RestTemplate restTemplate = new RestTemplate();
    ResponseEntity<Object> responseEntity = restTemplate.getForEntity(URL, Object.class);

    return responseEntity.getBody();
  }

  public void saveFavorites(GithubUser user) {
    repository.save(user);
  }

  public List<GithubUser> getAll() {
    Iterable<GithubUser> iterable = repository.findAll();
    List<GithubUser> githubUsers = new ArrayList<>();
    iterable.forEach(githubUsers::add);
    return githubUsers;
  }

  public void deleteFavorite(Long id) {
    repository.deleteById(id);
  }
}
