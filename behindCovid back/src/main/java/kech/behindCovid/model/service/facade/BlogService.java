package kech.behindCovid.model.service.facade;

import java.util.List;

import kech.behindCovid.bean.Blog;


public interface BlogService {
	public Blog save (Blog blg);
	public List<Blog> findAll();
	

}
