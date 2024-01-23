const assignmentsData = [
  {
    "id": 1,
    "nom": "Devoir Rendu Recherche Ing\u00e9nierie des exigences 6",
    "dateDeRendu": "2024-12-27T12:00:14.833547Z",
    "rendu": false,
    "auteur": "Olivia",
    "note": 14,
    "remarques": "Bonne utilisation des sources",
    "matiere": "SGBD"
  },
  {
    "id": 2,
    "nom": "Devoir Rendu Recherche Ing\u00e9nierie des exigences 1",
    "dateDeRendu": "2024-03-18T12:00:14.833547Z",
    "rendu": false,
    "auteur": "Mallory",
    "note": 19,
    "remarques": "Bonne analyse",
    "matiere": "SGBD"
  },
  {
    "id": 3,
    "nom": "Devoir Rendu Rapport Programmation avanc\u00e9e 3",
    "dateDeRendu": "2024-10-18T12:00:14.833547Z",
    "rendu": false,
    "auteur": "Victor",
    "note": 1,
    "remarques": "Excellent travail",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 4,
    "nom": "Devoir Rendu exercice Ing\u00e9nierie des exigences 8",
    "dateDeRendu": "2024-05-12T12:00:14.833547Z",
    "rendu": false,
    "auteur": "Bob",
    "note": 1,
    "remarques": "Hors sujet",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 5,
    "nom": "Devoir Rendu Soutenance Programmation avanc\u00e9e 2",
    "dateDeRendu": "2024-01-28T12:00:14.833547Z",
    "rendu": true,
    "auteur": "Ursula",
    "note": 7,
    "remarques": "Manque de sources",
    "matiere": "SGBD"
  },
  {
    "id": 6,
    "nom": "Devoir Rendu exercice Ing\u00e9nierie des exigences 8",
    "dateDeRendu": "2024-06-01T12:00:14.833547Z",
    "rendu": false,
    "auteur": "Bob",
    "note": 12,
    "remarques": "Hors sujet",
    "matiere": "SGBD"
  },
  {
    "id": 7,
    "nom": "Devoir Rendu Analyse SGBD 16",
    "dateDeRendu": "2024-10-17T12:00:14.833547Z",
    "rendu": true,
    "auteur": "Peggy",
    "note": 16,
    "remarques": "Tr\u00e8s bien structur\u00e9",
    "matiere": "Communication"
  },
  {
    "id": 8,
    "nom": "Devoir Rendu Projet Ing\u00e9nierie des exigences 15",
    "dateDeRendu": "2024-02-21T12:00:14.833547Z",
    "rendu": true,
    "auteur": "Walter",
    "note": 7,
    "remarques": "Manque de clart\u00e9",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 9,
    "nom": "Devoir Rendu Soutenance Programmation avanc\u00e9e 2",
    "dateDeRendu": "2024-03-10T12:00:14.833547Z",
    "rendu": true,
    "auteur": "Ursula",
    "note": 8,
    "remarques": "Manque de clart\u00e9",
    "matiere": "Communication"
  },
  {
    "id": 10,
    "nom": "Devoir Rendu Presentation Ing\u00e9nierie des exigences 13",
    "dateDeRendu": "2024-11-27T12:00:14.833547Z",
    "rendu": false,
    "auteur": "Ursula",
    "note": 7,
    "remarques": "Manque de sources",
    "matiere": "Communication"
  },
  {
    "id": 11,
    "nom": "Devoir Rendu Presentation Ing\u00e9nierie des exigences 13",
    "dateDeRendu": "2024-02-27T12:00:14.833547Z",
    "rendu": true,
    "auteur": "Olivia",
    "note": 10,
    "remarques": "Manque de clart\u00e9",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 12,
    "nom": "Devoir Rendu Projet Ing\u00e9nierie des exigences 12",
    "dateDeRendu": "2024-05-23T12:00:14.833547Z",
    "rendu": false,
    "auteur": "Trent",
    "note": 12,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 13,
    "nom": "Devoir Rendu Recherche Ing\u00e9nierie des exigences 6",
    "dateDeRendu": "2024-10-08T12:00:14.833547Z",
    "rendu": false,
    "auteur": "Niaj",
    "note": 1,
    "remarques": "Bonne analyse",
    "matiere": "JavaScript et html"
  },
  {
    "id": 14,
    "nom": "Devoir Rendu Presentation Ing\u00e9nierie des exigences 13",
    "dateDeRendu": "2024-08-23T12:00:14.833547Z",
    "rendu": false,
    "auteur": "Bob",
    "note": 0,
    "remarques": "Hors sujet",
    "matiere": "JavaScript et html"
  },
  {
    "id": 15,
    "nom": "Devoir Rendu Projet Ing\u00e9nierie des exigences 15",
    "dateDeRendu": "2024-06-17T12:00:14.833547Z",
    "rendu": true,
    "auteur": "Niaj",
    "note": 19,
    "remarques": "Manque de sources",
    "matiere": "SGBD"
  },
  {
    "id": 16,
    "nom": "Devoir Rendu Presentation Communication 9",
    "dateDeRendu": "2024-02-26T12:00:14.833547Z",
    "rendu": false,
    "auteur": "Alice",
    "note": 5,
    "remarques": "Bonne utilisation des sources",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 17,
    "nom": "Devoir Rendu Recherche Ing\u00e9nierie des exigences 1",
    "dateDeRendu": "2024-08-22T12:00:14.833547Z",
    "rendu": true,
    "auteur": "Frank",
    "note": 14,
    "remarques": "Bonne utilisation des sources",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 18,
    "nom": "Devoir Rendu Presentation Ing\u00e9nierie des exigences 13",
    "dateDeRendu": "2024-07-09T12:00:14.833547Z",
    "rendu": false,
    "auteur": "Yvonne",
    "note": 19,
    "remarques": "Bonne utilisation des sources",
    "matiere": "JavaScript et html"
  },
  {
    "id": 19,
    "nom": "Devoir Rendu Projet Ing\u00e9nierie des exigences 12",
    "dateDeRendu": "2024-11-29T12:00:14.833547Z",
    "rendu": true,
    "auteur": "Walter",
    "note": 19,
    "remarques": "Manque de sources",
    "matiere": "Communication"
  }
];
  export { assignmentsData };
