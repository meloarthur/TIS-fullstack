package com.example.demo.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.NucleoConhecimento;

import java.util.Optional;
import java.util.UUID;

public interface NucleoConhecimentoRepository extends JpaRepository<NucleoConhecimento, Long> {
    Optional<NucleoConhecimento> findById(UUID id);
    void deleteById(UUID id);
}