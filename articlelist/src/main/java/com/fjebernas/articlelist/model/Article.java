package com.fjebernas.articlelist.model;

import jakarta.persistence.*;

@Entity
@Table(name = "articles")
public class Article {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "description", nullable = false)
  private String description;

  @Column(name = "category", nullable = false)
  private String category;

  @Column(name = "link", nullable = false)
  private String link;

  @Column(name = "keywords", nullable = true)
  private String keywords;

  public Article() {
  }

  public Article(String description, String category, String link, String keywords) {
    this.description = description;
    this.category = category;
    this.link = link;
    this.keywords = keywords;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public String getLink() {
    return link;
  }

  public void setLink(String link) {
    this.link = link;
  }

  public String getKeywords() {
    return keywords;
  }

  public void setKeywords(String keywords) {
    this.keywords = keywords;
  }
}
