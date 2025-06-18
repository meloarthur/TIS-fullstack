package com.example.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.NucleoConhecimento;

import java.util.Optional;

public interface NucleoConhecimentoRepository extends JpaRepository<NucleoConhecimento, Long> {
    Optional<NucleoConhecimento> findById(Long id);
    void deleteById(Long id);
}