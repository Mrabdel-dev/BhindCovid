package kech.behindCovid.model.ws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kech.behindCovid.bean.CovidResult;
import kech.behindCovid.model.service.facade.CovidResultService;

@RequestMapping("api/covid")
@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class CovidResultRest {

	@Autowired
	private CovidResultService covidResultService;

	
	@PostMapping("/save/")
	public CovidResult save( @RequestBody CovidResult cr) {
		return covidResultService.save(cr);
	}
	
	
	
}
