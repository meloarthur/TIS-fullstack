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
    private String curso;
    private String matriz;
    private int carga_horaria_teorica;
    private int carga_horaria_pratica;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "nucleo_id")
    @JsonIgnore
    private NucleoConhecimento nucleoConhecimento;

    public Disciplina() {
    }

    public Disciplina(String nome, String curso, String matriz, int carga_horaria_teorica, int carga_horaria_pratica, NucleoConhecimento nucleoConhecimento) {
        this.nome = nome;
        this.curso = curso;
        this.matriz = matriz;
        this.carga_horaria_teorica = carga_horaria_teorica;
        this.carga_horaria_pratica = carga_horaria_pratica;
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
    
    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }
    
    public String getMatriz() {
        return matriz;
    }

    public void setMatriz(String matriz) {
        this.matriz = matriz;
    }
    
    public int getCargaHorariaTeorica() {
        return carga_horaria_teorica;
    }

    public void setCargaHorariaTeorica(int carga_horaria_teorica) {
        this.carga_horaria_teorica = carga_horaria_teorica;
    }
    
    public int getCargaHorariaPratica() {
        return carga_horaria_pratica;
    }

    public void setCargaHorariaPratica(int carga_horaria_pratica) {
        this.carga_horaria_pratica = carga_horaria_pratica;
    }

    public NucleoConhecimento getNucleoConhecimento() {
        return nucleoConhecimento;
    }

    public void setNucleoConhecimento(NucleoConhecimento nucleoConhecimento) {
        this.nucleoConhecimento = nucleoConhecimento;
    }
}