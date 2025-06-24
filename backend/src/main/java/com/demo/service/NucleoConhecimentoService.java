package com.demo.service;

import com.demo.model.NucleoConhecimento;
import com.demo.repository.NucleoConhecimentoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class NucleoConhecimentoService {

    private final NucleoConhecimentoRepository repository;

    public NucleoConhecimentoService(NucleoConhecimentoRepository repository) {
        this.repository = repository;
    }

    public List<NucleoConhecimento> listarTodos() {
        return repository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<NucleoConhecimento> buscarPorId(Long id) {
        Optional<NucleoConhecimento> nucleo = repository.findById(id);
        nucleo.ifPresent(nc -> {
            nc.getDocentes().size();
            nc.getDisciplinas().size();
        });
        return nucleo;
    }

    @Transactional
    public void excluir(Long id) {
        repository.deleteById(id);
    }
}