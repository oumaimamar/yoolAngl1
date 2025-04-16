export interface Document {
  id: number;
  titre: string;
  typeDoc: string;
  dateAjout: string;
  fileName: string;
}

export enum TypeDoc {
  PDF = 'PDF',
  DOCX = 'DOCX',
  XLSX = 'XLSX',
  PPT = 'PPT',
  TXT = 'TXT'
}
