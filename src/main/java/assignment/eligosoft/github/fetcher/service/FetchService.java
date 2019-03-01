package assignment.eligosoft.github.fetcher.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class FetchService {

  private static final String baseURL = "https://api.github.com";

  public Object getUser(String username) {
    final String URL = baseURL + "/users/" + username;

    RestTemplate restTemplate = new RestTemplate();
    ResponseEntity<Object> responseEntity = restTemplate.getForEntity(URL, Object.class);

    return responseEntity.getBody();
  }
}
