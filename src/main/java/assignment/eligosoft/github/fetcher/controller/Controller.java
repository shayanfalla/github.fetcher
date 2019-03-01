package assignment.eligosoft.github.fetcher.controller;

import assignment.eligosoft.github.fetcher.model.GithubUser;
import assignment.eligosoft.github.fetcher.service.FetchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.*;

@RestController
public class Controller {

  private final FetchService fetchService;

  @Autowired
  public Controller(FetchService fetchService) {
    this.fetchService = fetchService;
  }

  @GetMapping("/users/{username}")
  public ResponseEntity getUsername(@PathVariable String username) {
    try {
      return ok(fetchService.getUser(username));
    } catch (Exception e) {
      e.printStackTrace();
      return notFound().build();
    }
  }

  @PostMapping("/users")
  public ResponseEntity setFavorites(@RequestBody GithubUser user) {
    try {
      fetchService.saveFavorites(user);
      return ok().build();
    } catch (Exception e) {
      return badRequest().build();
    }
  }

  @GetMapping("/users")
  public ResponseEntity getFavorites() {
    try {
      return ok(fetchService.getAll());
    } catch (Exception e) {
      return badRequest().build();
    }
  }
}
