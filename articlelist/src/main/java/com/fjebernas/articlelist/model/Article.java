package com.fjebernas.articlelist.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "articles")
public class Article {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotEmpty(message = "Context is required")
  @Column(name = "context", nullable = false)
  private String context;

  @NotEmpty(message = "Category is required")
  @Column(name = "category", nullable = false)
  private String category;

  @NotEmpty(message = "Link is required")
  @Column(name = "link", nullable = false)
  private String link;

  @CreationTimestamp
  @Column(name = "created_at", nullable = false)
  private Instant createdAt;
}