export interface Document {
  id?: number;
  titre: string;
  typeDoc: string;
  dateAjout: string;
  fileName: string;
}

export interface DocumentDto {
  titre: string;
  typeDoc: string;
  dateAjout: string;
  fileName: string;
  userId: number;
}

export enum TypeDoc {'PDF', 'DOCX', 'XLSX', 'PPT', 'TXT'}
