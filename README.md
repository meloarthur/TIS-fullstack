# 📚 Gerenciamento de Núcleos de Conhecimento

Projeto responsável pela **visualização** e **remoção** de Núcleos de Conhecimento no sistema SGTC da UFG.

<!-- ![Interface do Sistema](./caminho/para/sua-imagem.png) -->

## 📌 Funcionalidades

- Visualizar detalhes de um núcleo de conhecimento:
  - Nome, área, facilitador e descrição.
  - Lista de docentes vinculados.
  - Disciplinas associadas ao núcleo.
- Excluir núcleo (quando aplicável).

## 🛠️ Tecnologias Utilizadas

### Backend (Java + Spring Boot)
- Spring Web
- Spring Data JPA
- Hibernate
- PostgreSQL (ou outro banco relacional)
- Swagger (opcional)

### Frontend (Next.js + React)
- Next.js 14+
- React 18+
- Axios
- Material UI
- React Table (ou similar para paginação)
<!-- - Tailwind CSS (se aplicável) -->

## 🧩 Estrutura

### Backend
- `GET /nucleos/{id}` → Busca os dados completos do núcleo.
- `DELETE /nucleos/{id}` → Remove um núcleo do sistema.

### Frontend
- Página: `/nucleos/[id]/visualizar.tsx`
- Comunicação com API via `axios`.
- Componentes com filtros, paginação e responsividade.

## ▶️ Como Executar o Projeto

### Backend
```bash
cd backend/
./mvnw spring-boot:run
