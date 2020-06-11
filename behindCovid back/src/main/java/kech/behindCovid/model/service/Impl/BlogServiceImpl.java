package kech.behindCovid.model.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kech.behindCovid.bean.Blog;
import kech.behindCovid.model.dao.BlogRepo;
import kech.behindCovid.model.service.facade.BlogService;

@Service
public class BlogServiceImpl implements BlogService{
	@Autowired
	private BlogRepo blogRepo;
	@Override
	public Blog save(Blog blg) {
		// TODO Auto-generated method stub
		return blogRepo.save(blg);
	}

	@Override
	public List<Blog> findAll() {
		// TODO Auto-generated method stub
		return blogRepo.findAll();
	}


}
