package com.demo.model;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "nucleo_conhecimento")
public class NucleoConhecimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nome;

    @Column(nullable = false)
    private String area;

    @Column(nullable = false)
    private String facilitador;

    @Column(nullable = false, length = 1000)
    private String descricao;

    @OneToMany(mappedBy = "nucleoConhecimento", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Docente> docentes = new HashSet<>();

    @OneToMany(mappedBy = "nucleoConhecimento", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Disciplina> disciplinas = new HashSet<>();

    public NucleoConhecimento() {
    }

    public NucleoConhecimento(String nome, String area, String facilitador, String descricao) {
        this.nome = nome;
        this.area = area;
        this.facilitador = facilitador;
        this.descricao = descricao;
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

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getFacilitador() {
        return facilitador;
    }

    public void setFacilitador(String facilitador) {
        this.facilitador = facilitador;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Set<Docente> getDocentes() {
        return docentes;
    }

    public void setDocentes(Set<Docente> docentes) {
        this.docentes = docentes;
    }

    public Set<Disciplina> getDisciplinas() {
        return disciplinas;
    }

    public void setDisciplinas(Set<Disciplina> disciplinas) {
        this.disciplinas = disciplinas;
    }

    // Métodos de conveniência para adicionar/remover
    public void addDocente(Docente docente) {
        this.docentes.add(docente);
        docente.setNucleoConhecimento(this);
    }

    public void removeDocente(Docente docente) {
        this.docentes.remove(docente);
        docente.setNucleoConhecimento(null);
    }

    public void addDisciplina(Disciplina disciplina) {
        this.disciplinas.add(disciplina);
        disciplina.setNucleoConhecimento(this);
    }

    public void removeDisciplina(Disciplina disciplina) {
        this.disciplinas.remove(disciplina);
        disciplina.setNucleoConhecimento(null);
    }
}