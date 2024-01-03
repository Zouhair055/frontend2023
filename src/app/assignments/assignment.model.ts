// export class Assignment
// {
//   _id?:string;
//   id!: number;
//   nom!:string;
//   dateDeRendu!:Date;
//   rendu!:boolean;
//   originalOrder: any;
  
// }

export class Assignment {
  _id?: string;
  id!: number;
  nom!: string;
  dateDeRendu!: Date;
  rendu!: boolean;
  originalOrder: any;

  // Nouvelles propriétés
  auteur: string = '';
  matiere: string = '';
  note: number = 0;
  remarques: string = '';
}