
export interface Formation {
  id?: number;
  ecole: string;
  diplome: string;
  domainEtude: string;
  dateDebut: Date | string;
  dateFin: Date | string | null;
  description: string;
  userId?: number;
}

export interface FormationDTO {
  ecole: string;
  diplome: string;
  domainEtude: string;
  dateDebut: Date | string;
  dateFin: Date | string | null;
  description: string;
  userId: number;
}

