package kech.behindCovid.model.ws;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kech.behindCovid.bean.Blog;
import kech.behindCovid.model.service.facade.BlogService;
@RequestMapping("api/Blog")
@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class BlogRest {
	@Autowired
	private BlogService blgService;
	
	@PostMapping("/save/")
	public Blog save(@RequestBody Blog blg) {
		return blgService.save(blg);
	}
	
	@GetMapping("/")
	public List<Blog> findAll() {
		return blgService.findAll();
	}
	
	
}
