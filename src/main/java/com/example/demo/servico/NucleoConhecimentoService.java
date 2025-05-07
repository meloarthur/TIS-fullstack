package com.example.demo.servico;

import com.example.demo.modelo.NucleoConhecimento;
import com.example.demo.repositorio.NucleoConhecimentoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class NucleoConhecimentoService {

    private final NucleoConhecimentoRepository repository;

    public NucleoConhecimentoService(NucleoConhecimentoRepository repository) {
        this.repository = repository;
    }

    public List<NucleoConhecimento> listarTodos() {
        return repository.findAll();
    }

    public Optional<NucleoConhecimento> buscarPorId(UUID id) {
        return repository.findById(id);
    }

    @Transactional
    public void excluir(UUID id) {
        repository.deleteById(id);
    }
}
