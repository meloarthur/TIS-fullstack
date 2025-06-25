# 📚 Gerenciamento de Núcleos de Conhecimento

Projeto responsável pela **visualização** e **remoção** de Núcleos de Conhecimento no sistema SGTC da UFG.

## 📌 Integrantes do Grupo
- Arthur Cáceres Melo - 201907446
- Felipe Oliveira Prado - 202006555
- Pedro Vitor Silveira Fajardo - 201907495
- Samuel Lacerda dos Santos Abreu - 202006576

## 📌 Funcionalidades

- Visualizar detalhes de um núcleo de conhecimento:
  - Nome, área, facilitador e descrição.
  - Lista de docentes vinculados.
  - Disciplinas associadas ao núcleo.
- Excluir núcleo.

## 🛠️ Tecnologias Utilizadas

### Backend (Java + Spring Boot)

- Spring Web
- Spring Data JPA
- Hibernate
- PostgreSQL

### Frontend (Next.js + React)

- Next.js 14+
- React 18+
- Axios
- TypeScript
- Tailwind CSS
- Shadcn/UI

## 🧩 Estrutura

### Backend
#### Arquitetura MSC

```
backend/
├── bin/
├── db/
├── src/
    └── main/
        ├── java/com/demo/
        │   ├── config/
        │   ├── controller/
        │   ├── model/
        │   ├── repository/
        │   └── service/
        └── resources/

```

### Frontend
#### Utilizando Componentes
```
frontend/
├── assets/
└── src/
   ├── app/
   │   └── (pages)/
   ├── components/
   ├── hooks/
   ├── lib/
   └── models/
```

## ▶️ Como Executar o Projeto

### 🔧 Backend

1. Acesse a pasta do backend:

   ```bash
   cd backend/
   ```

2. Certifique-se de ter instalado (Verificar compatibilidade no arquivo `pom.xml`):

   - **PostgreSQL**
   - **Maven**
   - **JDK**

3. Configure o acesso ao banco de dados:

   - Edite o arquivo `bin/main/application.properties` e altere a linha:

     ```
     spring.datasource.username=postgres
     ```

     - Substituindo `postgres` pelo seu **usuário do PostgreSQL**.

   - Abra o arquivo `db/script.sql` e substitua todas as ocorrências de:

     ```
     OWNER TO postgres;
     ```

      - Pelo mesmo nome de usuário que você configurou acima.

4. Execute os comandos no terminal para preparar o banco:

   ```bash
   psql -U SEU_USUARIO -d postgres -c "DROP SCHEMA public CASCADE;"
   psql -U SEU_USUARIO -d postgres -c "CREATE SCHEMA public;"
   psql -U SEU_USUARIO -d postgres -f db/script.sql
   ```

5. Por fim, compile e execute o backend:

   ```bash
   mvn clean
   mvn spring-boot:run
   ```

   O backend estará disponível em: `http://localhost:8080`.

---

### 💻 Frontend

1. Acesse a pasta do frontend:

   ```bash
   cd frontend/
   ```

2. Instale as dependências:

   ```bash
   yarn
   # ou
   npm install
   ```

3. Crie o arquivo `.env.local` na raiz da pasta `frontend`:

    ```
   touch .env.local
    ```
4.  Adicione a seguinte variável no arquivo:
    ```
    NEXT_PUBLIC_API_URL=http://localhost:8080
    ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   yarn dev
   # ou
   npm run dev
   ```

   O frontend estará disponível em: `http://localhost:3000`.

---

✅ Com isso, seu ambiente estará pronto para visualizar e excluir Núcleos de Conhecimento no sistema SGTC.

