package com.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "docente")
public class Docente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String username;
    private String email;
    private Date data_ingresso;
    private String status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "nucleo_id")
    @JsonIgnore
    private NucleoConhecimento nucleoConhecimento;

    public Docente() {
    }

    public Docente(String nome, String username, String email, Date data_ingresso, String status, NucleoConhecimento nucleoConhecimento) {
        this.nome = nome;
        this.username = username;
        this.email = email;
        this.data_ingresso = data_ingresso;
        this.status = status;
        this.nucleoConhecimento = nucleoConhecimento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public Date getDataIngresso() {
        return data_ingresso;
    }

    public void setDataIngresso(Date data_ingresso) {
        this.data_ingresso = data_ingresso;
    }
    
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public NucleoConhecimento getNucleoConhecimento() {
        return nucleoConhecimento;
    }

    public void setNucleoConhecimento(NucleoConhecimento nucleoConhecimento) {
        this.nucleoConhecimento = nucleoConhecimento;
    }
}