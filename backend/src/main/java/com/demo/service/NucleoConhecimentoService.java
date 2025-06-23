package com.demo.servico;

import com.demo.modelo.NucleoConhecimento;
import com.demo.repositorio.NucleoConhecimentoRepository;
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

    public Optional<NucleoConhecimento> buscarPorId(Long id) {
        return repository.findById(id);
    }

    @Transactional
    public void excluir(Long id) {
        repository.deleteById(id);
    }
}
