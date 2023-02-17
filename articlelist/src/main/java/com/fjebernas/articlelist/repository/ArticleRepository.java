package com.fjebernas.articlelist.repository;

import com.fjebernas.articlelist.model.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
public interface ArticleRepository extends JpaRepository<Article, Long> {

  @RestResource(path = "findByContextContaining", rel = "findByContextContaining")
  Page<Article> findByContextContaining(@Param("infix") String infix, Pageable pageable);

}
