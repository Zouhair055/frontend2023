const assignmentsData = [
  {
    "id": 1,
    "nom": "Devoir Rendu Analyse Arts 15",
    "dateDeRendu": "2024-10-14T23:17:39.549306Z",
    "rendu": true,
    "auteur": "Ivan",
    "note": 3,
    "remarques": "Excellent travail",
    "matiere": "Physique"
  },
  {
    "id": 2,
    "nom": "Devoir Rendu Examen Biologie 5",
    "dateDeRendu": "2024-08-01T23:17:39.549306Z",
    "rendu": false,
    "auteur": "Trent",
    "note": 17,
    "remarques": "Manque de clart\u00e9",
    "matiere": "Biologie"
  },
  {
    "id": 3,
    "nom": "Devoir Rendu Analyse Arts 7",
    "dateDeRendu": "2024-02-21T23:17:39.549306Z",
    "rendu": false,
    "auteur": "Zoe",
    "note": 19,
    "remarques": "Hors sujet",
    "matiere": "FrontEnd"
  },
  {
    "id": 4,
    "nom": "Devoir Rendu Soutenance Pagination 17",
    "dateDeRendu": "2024-06-16T23:17:39.549306Z",
    "rendu": true,
    "auteur": "Ursula",
    "note": 10,
    "remarques": "Hors sujet",
    "matiere": "FrontEnd"
  },
  {
    "id": 5,
    "nom": "Devoir Rendu Analyse Chimie 4",
    "dateDeRendu": "2024-06-07T23:17:39.549306Z",
    "rendu": false,
    "auteur": "Walter",
    "note": 11,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "Physique"
  },
  {
    "id": 6,
    "nom": "Devoir Rendu Examen Biologie 5",
    "dateDeRendu": "2024-10-22T23:17:39.549306Z",
    "rendu": false,
    "auteur": "Frank",
    "note": 14,
    "remarques": "Manque de sources",
    "matiere": "automatique"
  },
  {
    "id": 7,
    "nom": "Devoir Rendu Evaluation Geographie 10",
    "dateDeRendu": "2024-06-14T23:17:39.549306Z",
    "rendu": false,
    "auteur": "Quentin",
    "note": 16,
    "remarques": "Bonne analyse",
    "matiere": "Langues"
  },
  {
    "id": 8,
    "nom": "Devoir Rendu rendu Histoire 16",
    "dateDeRendu": "2024-06-11T23:17:39.549306Z",
    "rendu": false,
    "auteur": "Trent",
    "note": 19,
    "remarques": "A am\u00e9liorer",
    "matiere": "Arts"
  },
  {
    "id": 9,
    "nom": "Devoir Rendu Soutenance Geographie 9",
    "dateDeRendu": "2024-11-21T23:17:39.549306Z",
    "rendu": false,
    "auteur": "Sybil",
    "note": 14,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "Histoire"
  },
  {
    "id": 10,
    "nom": "Devoir Rendu Etude Mathematiques 2",
    "dateDeRendu": "2024-04-11T23:17:39.549306Z",
    "rendu": true,
    "auteur": "Quentin",
    "note": 20,
    "remarques": "Hors sujet",
    "matiere": "Chimie"
  },
  {
    "id": 11,
    "nom": "Devoir Rendu Synthese automatique 14",
    "dateDeRendu": "2024-09-13T23:17:39.549306Z",
    "rendu": false,
    "auteur": "Yvonne",
    "note": 12,
    "remarques": "Manque de clart\u00e9",
    "matiere": "technologie"
  },
  {
    "id": 12,
    "nom": "Devoir Rendu Laboratoire Geographie 6",
    "dateDeRendu": "2024-03-02T23:17:39.549306Z",
    "rendu": true,
    "auteur": "Charlie",
    "note": 8,
    "remarques": "Hors sujet",
    "matiere": "FrontEnd"
  },
  {
    "id": 13,
    "nom": "Devoir Rendu Analyse Arts 7",
    "dateDeRendu": "2024-11-20T23:17:39.549306Z",
    "rendu": true,
    "auteur": "Niaj",
    "note": 9,
    "remarques": "Hors sujet",
    "matiere": "Biologie"
  },
  {
    "id": 14,
    "nom": "Devoir Rendu Etude Mathematiques 2",
    "dateDeRendu": "2024-12-31T23:17:39.549306Z",
    "rendu": false,
    "auteur": "Heidi",
    "note": 7,
    "remarques": "Manque de sources",
    "matiere": "Physique"
  },
  {
    "id": 15,
    "nom": "Devoir Rendu devoir Arts 12",
    "dateDeRendu": "2024-08-06T23:17:39.549306Z",
    "rendu": true,
    "auteur": "Xavier",
    "note": 11,
    "remarques": "Excellent travail",
    "matiere": "technologie"
  },
  {
    "id": 16,
    "nom": "Devoir Rendu Laboratoire Geographie 6",
    "dateDeRendu": "2024-09-11T23:17:39.549306Z",
    "rendu": false,
    "auteur": "Judy",
    "note": 7,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "Philosophie"
  },
  {
    "id": 17,
    "nom": "Devoir Rendu devoir Arts 12",
    "dateDeRendu": "2024-09-13T23:17:39.549306Z",
    "rendu": false,
    "auteur": "Charlie",
    "note": 0,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "Biologie"
  },
  {
    "id": 18,
    "nom": "Devoir Rendu Synthese Pagination 19",
    "dateDeRendu": "2024-02-25T23:17:39.549306Z",
    "rendu": false,
    "auteur": "Quentin",
    "note": 18,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "Pagination"
  },
  {
    "id": 19,
    "nom": "Devoir Rendu Etude Mathematiques 2",
    "dateDeRendu": "2024-05-31T23:17:39.549306Z",
    "rendu": true,
    "auteur": "Frank",
    "note": 14,
    "remarques": "Excellent travail",
    "matiere": "technologie"
  }
];
  export { assignmentsData };
