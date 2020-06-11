package kech.behindCovid.model.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kech.behindCovid.bean.Blog;


@Repository
public interface BlogRepo extends JpaRepository<Blog, Long>{

}
