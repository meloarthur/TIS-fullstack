package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.model.NucleoConhecimento;

import java.util.Optional;

public interface NucleoConhecimentoRepository extends JpaRepository<NucleoConhecimento, Long> {
    Optional<NucleoConhecimento> findById(Long id);
    void deleteById(Long id);
}