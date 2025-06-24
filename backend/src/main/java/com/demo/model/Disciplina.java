package com.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "disciplina")
public class Disciplina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "nucleo_id")
    @JsonIgnore
    private NucleoConhecimento nucleoConhecimento;

    public Disciplina() {
    }

    public Disciplina(String nome, NucleoConhecimento nucleoConhecimento) {
        this.nome = nome;
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

    public NucleoConhecimento getNucleoConhecimento() {
        return nucleoConhecimento;
    }

    public void setNucleoConhecimento(NucleoConhecimento nucleoConhecimento) {
        this.nucleoConhecimento = nucleoConhecimento;
    }
}