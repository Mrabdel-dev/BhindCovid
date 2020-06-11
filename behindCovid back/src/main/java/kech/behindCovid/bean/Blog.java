package kech.behindCovid.bean;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
public class Blog implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String titele;
	private String author;
	@Temporal(javax.persistence.TemporalType.DATE)
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date date;
	private String content;
	private String imageLink;
	private String email;
	private String blogeType;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitele() {
		return titele;
	}
	public void setTitele(String titele) {
		this.titele = titele;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getImageLink() {
		return imageLink;
	}
	public void setImageLink(String imageLink) {
		this.imageLink = imageLink;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public Blog() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getBlogeType() {
		return blogeType;
	}
	public void setBlogeType(String blogeType) {
		this.blogeType = blogeType;
	}
	public Blog(Long id, String titele, String author, Date date, String content, String imageLink, String email,
			String blogeType) {
		super();
		this.id = id;
		this.titele = titele;
		this.author = author;
		this.date = date;
		this.content = content;
		this.imageLink = imageLink;
		this.email = email;
		this.blogeType = blogeType;
	}
	@Override
	public String toString() {
		return "Blog [id=" + id + ", titele=" + titele + ", author=" + author + ", date=" + date + ", content="
				+ content + ", imageLink=" + imageLink + ", email=" + email + ", blogeType=" + blogeType + "]";
	}
	

}
