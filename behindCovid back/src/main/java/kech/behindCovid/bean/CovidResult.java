package kech.behindCovid.bean;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
public class CovidResult implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String country;
	private Double confirmed;;
	private Double deaths;
	private Double recovred;
	private Double active;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public Double getConfirmed() {
		return confirmed;
	}
	public void setConfirmed(Double confirmed) {
		this.confirmed = confirmed;
	}
	public Double getDeaths() {
		return deaths;
	}
	public void setDeaths(Double deaths) {
		this.deaths = deaths;
	}
	public Double getRecovred() {
		return recovred;
	}
	public void setRecovred(Double recovred) {
		this.recovred = recovred;
	}
	public Double getActive() {
		return active;
	}
	public void setActive(Double active) {
		this.active = active;
	}
	public CovidResult() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CovidResult(Long id, String country, Double confirmed, Double deaths, Double recovred, Double active) {
		super();
		this.id = id;
		this.country = country;
		this.confirmed = confirmed;
		this.deaths = deaths;
		this.recovred = recovred;
		this.active = active;
	}
	
}
