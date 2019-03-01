package assignment.eligosoft.github.fetcher.controller;

import assignment.eligosoft.github.fetcher.service.FetchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
}
