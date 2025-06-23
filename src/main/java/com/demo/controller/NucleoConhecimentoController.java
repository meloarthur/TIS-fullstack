package com.demo.controller;

import com.demo.modelo.NucleoConhecimento;
import com.demo.servico.NucleoConhecimentoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/nucleos")
public class NucleoConhecimentoController {

    private final NucleoConhecimentoService service;

    public NucleoConhecimentoController(NucleoConhecimentoService service) {
        this.service = service;
    }

    @GetMapping
    public List<NucleoConhecimento> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<NucleoConhecimento> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable Long id) {
        return service.buscarPorId(id).map(nucleo -> {
            service.excluir(id);
            return ResponseEntity.ok("Sucesso! O núcleo de conhecimento \"" + nucleo.getNome() + "\" foi excluído.");
        }).orElse(ResponseEntity.notFound().build());
    }
}