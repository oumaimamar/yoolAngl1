export interface Certification {
  id?: number;
  titre: string;
  organisation: string;
  dateDebut: Date | string;
  dateFin: Date | string | null;
  description: string;
  userId?: number;
}

export interface CertificationDTO {
  titre: string;
  organisation: string;
  dateDebut: Date | string;
  dateFin: Date | string | null;
  description: string;
  userId: number;
}
