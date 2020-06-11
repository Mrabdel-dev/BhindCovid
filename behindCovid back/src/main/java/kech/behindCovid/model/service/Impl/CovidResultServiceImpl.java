package kech.behindCovid.model.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kech.behindCovid.bean.CovidResult;
import kech.behindCovid.model.dao.CovidResultRepo;
import kech.behindCovid.model.service.facade.CovidResultService;

@Service
public class CovidResultServiceImpl implements CovidResultService {
	@Autowired
	private CovidResultRepo covidResultRepo;
	@Override
	public CovidResult save(CovidResult cr) {
		// TODO Auto-generated method stub
		return covidResultRepo.save(cr);
	}

}
