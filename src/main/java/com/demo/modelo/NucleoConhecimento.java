package com.demo.modelo;

import jakarta.persistence.*;

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
}
