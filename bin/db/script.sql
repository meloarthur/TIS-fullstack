CREATE DATABASE postgres
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'pt-BR'
    LC_CTYPE = 'pt-BR'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

COMMENT ON DATABASE postgres
    IS 'default administrative connection database';

CREATE TABLE IF NOT EXISTS public.nucleo_conhecimento
(
    id integer NOT NULL DEFAULT nextval('nucleo_conhecimento_id_seq'::regclass),
    nome text COLLATE pg_catalog."default" NOT NULL,
    area text COLLATE pg_catalog."default" NOT NULL,
    facilitador text COLLATE pg_catalog."default" NOT NULL,
    descricao text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT nucleo_conhecimento_pkey1 PRIMARY KEY (id),
    CONSTRAINT nucleo_conhecimento_nome_key UNIQUE (nome)
    )

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.nucleo_conhecimento
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.disciplina
(
    id integer NOT NULL DEFAULT nextval('disciplina_id_seq'::regclass),
    codigo character varying(50) COLLATE pg_catalog."default" NOT NULL,
    nome character varying(255) COLLATE pg_catalog."default" NOT NULL,
    curso character varying(100) COLLATE pg_catalog."default" NOT NULL,
    matriz character varying(100) COLLATE pg_catalog."default" NOT NULL,
    carga_horaria_teorica integer NOT NULL,
    carga_horaria_pratica integer NOT NULL,
    carga_horaria_total integer NOT NULL,
    CONSTRAINT disciplina_pkey PRIMARY KEY (id),
    CONSTRAINT uk_codigo_disciplina UNIQUE (codigo)
    );

ALTER TABLE IF EXISTS public.disciplina
    OWNER TO postgres;

CREATE TABLE IF NOT EXISTS public.docente
(
    id integer NOT NULL DEFAULT nextval('docente_id_seq'::regclass),
    nome character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    data_ingresso date NOT NULL,
    status character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT docente_pkey PRIMARY KEY (id),
    CONSTRAINT uk_email_docente UNIQUE (email)
    );

ALTER TABLE IF EXISTS public.docente
    OWNER TO postgres;

CREATE TABLE IF NOT EXISTS public.nucleo_disciplina
(
    nucleo_id integer NOT NULL,
    disciplina_id integer NOT NULL,
    CONSTRAINT nucleo_disciplina_pkey PRIMARY KEY (nucleo_id, disciplina_id),
    CONSTRAINT nucleo_disciplina_disciplina_id_fkey FOREIGN KEY (disciplina_id)
    REFERENCES public.disciplina (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE,
    CONSTRAINT nucleo_disciplina_nucleo_id_fkey FOREIGN KEY (nucleo_id)
    REFERENCES public.nucleo_conhecimento (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE
    );

ALTER TABLE IF EXISTS public.nucleo_disciplina
    OWNER TO postgres;

CREATE INDEX IF NOT EXISTS idx_nucleo_disciplina_nucleo_id
    ON public.nucleo_disciplina USING btree
    (nucleo_id ASC NULLS LAST);

CREATE TABLE IF NOT EXISTS public.nucleo_docente
(
    nucleo_id integer NOT NULL,
    docente_id integer NOT NULL,
    CONSTRAINT nucleo_docente_pkey PRIMARY KEY (nucleo_id, docente_id),
    CONSTRAINT nucleo_docente_docente_id_fkey FOREIGN KEY (docente_id)
    REFERENCES public.docente (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE,
    CONSTRAINT nucleo_docente_nucleo_id_fkey FOREIGN KEY (nucleo_id)
    REFERENCES public.nucleo_conhecimento (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE
    );

ALTER TABLE IF EXISTS public.nucleo_docente
    OWNER TO postgres;

CREATE INDEX IF NOT EXISTS idx_nucleo_docente_nucleo_id
    ON public.nucleo_docente USING btree
    (nucleo_id ASC NULLS LAST);

INSERT INTO nucleo_conhecimento (nome, area, facilitador, descricao) VALUES
('Núcleo de Inteligência Artificial', 'Tecnologia', 'Prof. João Silva', 'Foco em IA e Machine Learning aplicados a problemas reais.'),
('Núcleo de Biotecnologia', 'Ciências Biológicas', 'Profa. Maria Oliveira', 'Exploração de tecnologias emergentes em biotecnologia.'),
('Núcleo de Sustentabilidade', 'Meio Ambiente', 'Prof. Lucas Almeida', 'Estudos e projetos voltados à sustentabilidade ambiental.'),
('Núcleo de Robótica Educacional', 'Engenharia', 'Profa. Ana Souza', 'Criação de soluções em robótica para fins educacionais.'),
('Núcleo de Cibersegurança', 'Tecnologia da Informação', 'Prof. Carlos Mendes', 'Pesquisa e práticas de segurança digital e proteção de dados.'),
('Núcleo de Energias Renováveis', 'Engenharia', 'Prof. Rafael Lima', 'Projetos voltados à energia solar, eólica e outras fontes limpas.'),
('Núcleo de Psicologia Aplicada', 'Ciências Humanas', 'Profa. Juliana Castro', 'Estudos de comportamento humano e saúde mental.'),
('Núcleo de Empreendedorismo', 'Administração', 'Prof. Pedro Ferreira', 'Iniciativas de startups, inovação e modelos de negócio.'),
('Núcleo de Design e Inovação', 'Artes e Design', 'Profa. Beatriz Ramos', 'Exploração de design thinking e criatividade aplicada.'),
('Núcleo de Direito Digital', 'Direito', 'Prof. Eduardo Rocha', 'Estudos sobre legislações relacionadas a tecnologia e internet.');