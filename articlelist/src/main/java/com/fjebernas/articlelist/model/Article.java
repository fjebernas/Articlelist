package com.fjebernas.articlelist.model;

import jakarta.persistence.*;
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

  @Column(name = "context", nullable = false)
  private String context;

  @Column(name = "category", nullable = false)
  private String category;

  @Column(name = "link", nullable = false)
  private String link;

  @CreationTimestamp
  @Column(name = "created_at", nullable = false)
  private Instant createdAt;
}