export interface Experience {
  id?: number;
  post: string;
  typeEmploi: TypeEmploi;
  entreprise: string;
  dateDebut: Date | string;
  dateFin: Date | string | null;
  ville: Ville;
  description: string;
  userId?: number;
}

export interface ExperienceDto {
  post: string;
  typeEmploi: string;
  entreprise: string;
  dateDebut: string;
  dateFin: string;
  ville: string;
  description: string;
  userId: number;
}

export enum TypeEmploi {
  'FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP', 'FREELANCE'
}

export enum Ville {
'PARIS', 'LYON','MARSEILLE','TOULOUSE'
}
