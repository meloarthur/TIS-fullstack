package com.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.modelo.NucleoConhecimento;

import java.util.Optional;

public interface NucleoConhecimentoRepository extends JpaRepository<NucleoConhecimento, Long> {
    Optional<NucleoConhecimento> findById(Long id);
    void deleteById(Long id);
}