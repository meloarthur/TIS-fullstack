declare namespace Models {
  export interface Nucleo {
    id: string;
    nome: string;
    area: string;
    facilitador: string;
    descricao: string;
    docentes: Models.Docente[];
    disciplinas: Models.Disciplina[];
  }
}
