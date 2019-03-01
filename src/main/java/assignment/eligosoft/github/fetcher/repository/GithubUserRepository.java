package assignment.eligosoft.github.fetcher.repository;

import assignment.eligosoft.github.fetcher.model.GithubUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GithubUserRepository extends CrudRepository<GithubUser, Long> {}
