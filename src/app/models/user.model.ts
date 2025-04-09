export interface User {
  id?: number; // Optionnel car généré automatiquement
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateInscription: Date | string; // Can be Date object or ISO string
  ville: Ville;
  motDePasse: string;
  role?: string; // Optionnel car peut être défini par défaut côté serveur
}
export enum Ville{Casablanca, Agadir, Tinghir, Essaouira,Dakhla}

export interface UserProfileDTO {
  userId?: number; // Optionnel car généré automatiquement
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ville: Ville;
  role?: string; // Optionnel car peut être défini par défaut côté serveur
  headline : string;
  bio : string;
  photoUrl : string;
  location : string
}
