package kech.behindCovid.model.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kech.behindCovid.bean.CovidResult;

@Repository
public interface CovidResultRepo  extends JpaRepository<CovidResult, Long>{

}
