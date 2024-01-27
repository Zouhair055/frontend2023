const assignmentsData = [
  {
    "id": 1,
    "nom": "Devoir Rendu Rapport SGBD 471",
    "dateDeRendu": "2024-05-20T12:46:44.937582Z",
    "rendu": false,
    "auteur": "Zoe",
    "note": 5,
    "remarques": "Bonne utilisation des sources",
    "matiere": "SGBD"
  },
  {
    "id": 2,
    "nom": "Devoir Rendu devoir SGBD 497",
    "dateDeRendu": "2024-07-07T12:46:44.937582Z",
    "rendu": false,
    "auteur": "Sybil",
    "note": 6,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "SGBD"
  },
  {
    "id": 3,
    "nom": "Devoir Rendu Recherche Communication 195",
    "dateDeRendu": "2024-04-07T12:46:44.937582Z",
    "rendu": false,
    "auteur": "Rupert",
    "note": 13,
    "remarques": "Manque de clart\u00e9",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 4,
    "nom": "Devoir Rendu Etude Programmation avanc\u00e9e 809",
    "dateDeRendu": "2024-11-30T12:46:44.937582Z",
    "rendu": true,
    "auteur": "Yvonne",
    "note": 13,
    "remarques": "A am\u00e9liorer",
    "matiere": "Communication"
  },
  {
    "id": 5,
    "nom": "Devoir Rendu Etude Communication 531",
    "dateDeRendu": "2024-06-16T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Alice",
    "note": 9,
    "remarques": "Bonne analyse",
    "matiere": "SGBD"
  },
  {
    "id": 6,
    "nom": "Devoir Rendu Analyse JavaScript et html 69",
    "dateDeRendu": "2024-03-30T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Victor",
    "note": 6,
    "remarques": "A am\u00e9liorer",
    "matiere": "Communication"
  },
  {
    "id": 7,
    "nom": "Devoir Rendu Etude Programmation avanc\u00e9e 696",
    "dateDeRendu": "2024-09-18T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Victor",
    "note": 10,
    "remarques": "Hors sujet",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 8,
    "nom": "Devoir Rendu Synthese SGBD 944",
    "dateDeRendu": "2024-06-25T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Ursula",
    "note": 14,
    "remarques": "Manque de clart\u00e9",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 9,
    "nom": "Devoir Rendu Etude Ing\u00e9nierie des exigences 258",
    "dateDeRendu": "2024-08-10T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Walter",
    "note": 6,
    "remarques": "A am\u00e9liorer",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 10,
    "nom": "Devoir Rendu controle Ing\u00e9nierie des exigences 831",
    "dateDeRendu": "2024-10-21T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Rupert",
    "note": 9,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "Communication"
  },
  {
    "id": 11,
    "nom": "Devoir Rendu Rapport Programmation avanc\u00e9e 236",
    "dateDeRendu": "2024-03-11T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Charlie",
    "note": 15,
    "remarques": "Hors sujet",
    "matiere": "JavaScript et html"
  },
  {
    "id": 12,
    "nom": "Devoir Rendu Projet SGBD 143",
    "dateDeRendu": "2024-06-07T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Olivia",
    "note": 13,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "Communication"
  },
  {
    "id": 13,
    "nom": "Devoir Rendu Presentation Ing\u00e9nierie des exigences 502",
    "dateDeRendu": "2024-09-10T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Ursula",
    "note": 11,
    "remarques": "Hors sujet",
    "matiere": "SGBD"
  },
  {
    "id": 14,
    "nom": "Devoir Rendu devoir SGBD 333",
    "dateDeRendu": "2024-02-01T12:46:44.938581Z",
    "rendu": false,
    "auteur": "David",
    "note": 0,
    "remarques": "Bonne analyse",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 15,
    "nom": "Devoir Rendu Etude Programmation avanc\u00e9e 724",
    "dateDeRendu": "2024-03-21T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Walter",
    "note": 5,
    "remarques": "A am\u00e9liorer",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 16,
    "nom": "Devoir Rendu Etude Ing\u00e9nierie des exigences 140",
    "dateDeRendu": "2024-08-13T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Eve",
    "note": 20,
    "remarques": "Bonne analyse",
    "matiere": "Communication"
  },
  {
    "id": 17,
    "nom": "Devoir Rendu Synthese Ing\u00e9nierie des exigences 355",
    "dateDeRendu": "2025-01-19T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Xavier",
    "note": 4,
    "remarques": "Manque de clart\u00e9",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 18,
    "nom": "Devoir Rendu Application Programmation avanc\u00e9e 216",
    "dateDeRendu": "2024-08-18T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Yvonne",
    "note": 0,
    "remarques": "Tr\u00e8s bien structur\u00e9",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 19,
    "nom": "Devoir Rendu Synthese Communication 72",
    "dateDeRendu": "2024-05-05T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Frank",
    "note": 18,
    "remarques": "Bonne utilisation des sources",
    "matiere": "Communication"
  },
  {
    "id": 20,
    "nom": "Devoir Rendu Projet Programmation avanc\u00e9e 710",
    "dateDeRendu": "2024-02-20T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Bob",
    "note": 8,
    "remarques": "A am\u00e9liorer",
    "matiere": "JavaScript et html"
  },
  {
    "id": 21,
    "nom": "Devoir Rendu rendu Ing\u00e9nierie des exigences 468",
    "dateDeRendu": "2024-10-24T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Victor",
    "note": 11,
    "remarques": "Manque de sources",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 22,
    "nom": "Devoir Rendu Application Programmation avanc\u00e9e 768",
    "dateDeRendu": "2024-07-15T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Xavier",
    "note": 16,
    "remarques": "Manque de sources",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 23,
    "nom": "Devoir Rendu Application JavaScript et html 537",
    "dateDeRendu": "2024-01-29T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Olivia",
    "note": 15,
    "remarques": "Hors sujet",
    "matiere": "SGBD"
  },
  {
    "id": 24,
    "nom": "Devoir Rendu Synthese Communication 304",
    "dateDeRendu": "2024-11-06T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Rupert",
    "note": 18,
    "remarques": "Hors sujet",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 25,
    "nom": "Devoir Rendu exercice Communication 218",
    "dateDeRendu": "2024-04-30T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Trent",
    "note": 11,
    "remarques": "Tr\u00e8s bien structur\u00e9",
    "matiere": "JavaScript et html"
  },
  {
    "id": 26,
    "nom": "Devoir Rendu rendu Ing\u00e9nierie des exigences 976",
    "dateDeRendu": "2024-08-06T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Eve",
    "note": 10,
    "remarques": "Tr\u00e8s bien structur\u00e9",
    "matiere": "Communication"
  },
  {
    "id": 27,
    "nom": "Devoir Rendu Projet JavaScript et html 534",
    "dateDeRendu": "2024-05-26T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Bob",
    "note": 1,
    "remarques": "Hors sujet",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 28,
    "nom": "Devoir Rendu Synthese Programmation avanc\u00e9e 935",
    "dateDeRendu": "2024-12-27T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Charlie",
    "note": 11,
    "remarques": "Tr\u00e8s bien structur\u00e9",
    "matiere": "SGBD"
  },
  {
    "id": 29,
    "nom": "Devoir Rendu Etude JavaScript et html 312",
    "dateDeRendu": "2024-03-07T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Victor",
    "note": 11,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "JavaScript et html"
  },
  {
    "id": 30,
    "nom": "Devoir Rendu Application JavaScript et html 537",
    "dateDeRendu": "2024-05-05T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Xavier",
    "note": 6,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "JavaScript et html"
  },
  {
    "id": 31,
    "nom": "Devoir Rendu Presentation Programmation avanc\u00e9e 77",
    "dateDeRendu": "2024-08-30T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Alice",
    "note": 5,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 32,
    "nom": "Devoir Rendu Application JavaScript et html 520",
    "dateDeRendu": "2024-03-11T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Heidi",
    "note": 10,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "SGBD"
  },
  {
    "id": 33,
    "nom": "Devoir Rendu Evaluation Communication 870",
    "dateDeRendu": "2024-08-31T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Sybil",
    "note": 3,
    "remarques": "Excellent travail",
    "matiere": "Communication"
  },
  {
    "id": 34,
    "nom": "Devoir Rendu exercice JavaScript et html 966",
    "dateDeRendu": "2024-05-09T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Peggy",
    "note": 12,
    "remarques": "Hors sujet",
    "matiere": "SGBD"
  },
  {
    "id": 35,
    "nom": "Devoir Rendu Recherche Programmation avanc\u00e9e 769",
    "dateDeRendu": "2024-06-30T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Judy",
    "note": 12,
    "remarques": "Bonne utilisation des sources",
    "matiere": "SGBD"
  },
  {
    "id": 36,
    "nom": "Devoir Rendu Recherche JavaScript et html 9",
    "dateDeRendu": "2025-01-04T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Victor",
    "note": 17,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "JavaScript et html"
  },
  {
    "id": 37,
    "nom": "Devoir Rendu Projet JavaScript et html 676",
    "dateDeRendu": "2024-10-16T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Charlie",
    "note": 7,
    "remarques": "Bonne utilisation des sources",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 38,
    "nom": "Devoir Rendu Recherche JavaScript et html 940",
    "dateDeRendu": "2024-07-29T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Walter",
    "note": 20,
    "remarques": "Tr\u00e8s bien structur\u00e9",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 39,
    "nom": "Devoir Rendu TP Communication 391",
    "dateDeRendu": "2024-11-14T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Ursula",
    "note": 14,
    "remarques": "Manque de clart\u00e9",
    "matiere": "JavaScript et html"
  },
  {
    "id": 40,
    "nom": "Devoir Rendu Application Ing\u00e9nierie des exigences 934",
    "dateDeRendu": "2024-10-12T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Niaj",
    "note": 1,
    "remarques": "Bonne analyse",
    "matiere": "JavaScript et html"
  },
  {
    "id": 41,
    "nom": "Devoir Rendu devoir Programmation avanc\u00e9e 990",
    "dateDeRendu": "2024-09-11T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Heidi",
    "note": 9,
    "remarques": "Manque de sources",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 42,
    "nom": "Devoir Rendu Recherche Programmation avanc\u00e9e 656",
    "dateDeRendu": "2024-12-30T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Zoe",
    "note": 2,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 43,
    "nom": "Devoir Rendu TP Ing\u00e9nierie des exigences 739",
    "dateDeRendu": "2024-06-02T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Yvonne",
    "note": 16,
    "remarques": "Manque de sources",
    "matiere": "JavaScript et html"
  },
  {
    "id": 44,
    "nom": "Devoir Rendu Analyse Communication 472",
    "dateDeRendu": "2024-10-15T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Mallory",
    "note": 12,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "JavaScript et html"
  },
  {
    "id": 45,
    "nom": "Devoir Rendu Analyse Ing\u00e9nierie des exigences 57",
    "dateDeRendu": "2024-05-17T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Mallory",
    "note": 14,
    "remarques": "A am\u00e9liorer",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 46,
    "nom": "Devoir Rendu Soutenance Programmation avanc\u00e9e 803",
    "dateDeRendu": "2024-02-17T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Grace",
    "note": 11,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 47,
    "nom": "Devoir Rendu Projet Programmation avanc\u00e9e 548",
    "dateDeRendu": "2025-01-09T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Quentin",
    "note": 1,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "JavaScript et html"
  },
  {
    "id": 48,
    "nom": "Devoir Rendu rendu Communication 22",
    "dateDeRendu": "2025-01-10T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Ivan",
    "note": 0,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "Communication"
  },
  {
    "id": 49,
    "nom": "Devoir Rendu controle JavaScript et html 638",
    "dateDeRendu": "2024-12-22T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Heidi",
    "note": 11,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 50,
    "nom": "Devoir Rendu Etude SGBD 662",
    "dateDeRendu": "2024-04-29T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Yvonne",
    "note": 13,
    "remarques": "A am\u00e9liorer",
    "matiere": "JavaScript et html"
  },
  {
    "id": 51,
    "nom": "Devoir Rendu Developpement Programmation avanc\u00e9e 66",
    "dateDeRendu": "2024-02-14T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Yvonne",
    "note": 6,
    "remarques": "Manque de clart\u00e9",
    "matiere": "SGBD"
  },
  {
    "id": 52,
    "nom": "Devoir Rendu Presentation JavaScript et html 953",
    "dateDeRendu": "2024-11-08T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Bob",
    "note": 12,
    "remarques": "A am\u00e9liorer",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 53,
    "nom": "Devoir Rendu Examen JavaScript et html 141",
    "dateDeRendu": "2024-07-16T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Sybil",
    "note": 19,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "Communication"
  },
  {
    "id": 54,
    "nom": "Devoir Rendu Rapport JavaScript et html 42",
    "dateDeRendu": "2024-04-05T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Grace",
    "note": 9,
    "remarques": "Bonne utilisation des sources",
    "matiere": "JavaScript et html"
  },
  {
    "id": 55,
    "nom": "Devoir Rendu Laboratoire Communication 130",
    "dateDeRendu": "2024-11-08T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Bob",
    "note": 10,
    "remarques": "Excellent travail",
    "matiere": "Communication"
  },
  {
    "id": 56,
    "nom": "Devoir Rendu Rapport JavaScript et html 664",
    "dateDeRendu": "2024-03-11T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Eve",
    "note": 17,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 57,
    "nom": "Devoir Rendu Rapport SGBD 59",
    "dateDeRendu": "2024-04-18T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Olivia",
    "note": 1,
    "remarques": "Manque de clart\u00e9",
    "matiere": "JavaScript et html"
  },
  {
    "id": 58,
    "nom": "Devoir Rendu Laboratoire Programmation avanc\u00e9e 33",
    "dateDeRendu": "2024-09-13T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Walter",
    "note": 4,
    "remarques": "Bonne analyse",
    "matiere": "Communication"
  },
  {
    "id": 59,
    "nom": "Devoir Rendu devoir JavaScript et html 971",
    "dateDeRendu": "2025-01-17T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Alice",
    "note": 13,
    "remarques": "Bonne utilisation des sources",
    "matiere": "JavaScript et html"
  },
  {
    "id": 60,
    "nom": "Devoir Rendu exercice JavaScript et html 783",
    "dateDeRendu": "2024-08-19T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Ivan",
    "note": 11,
    "remarques": "A am\u00e9liorer",
    "matiere": "SGBD"
  },
  {
    "id": 61,
    "nom": "Devoir Rendu devoir SGBD 821",
    "dateDeRendu": "2024-09-26T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Olivia",
    "note": 9,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 62,
    "nom": "Devoir Rendu Soutenance Programmation avanc\u00e9e 889",
    "dateDeRendu": "2024-03-03T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Niaj",
    "note": 0,
    "remarques": "Excellent travail",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 63,
    "nom": "Devoir Rendu Etude JavaScript et html 679",
    "dateDeRendu": "2024-11-01T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Eve",
    "note": 20,
    "remarques": "Bonne utilisation des sources",
    "matiere": "Communication"
  },
  {
    "id": 64,
    "nom": "Devoir Rendu Analyse JavaScript et html 926",
    "dateDeRendu": "2024-06-19T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Sybil",
    "note": 4,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 65,
    "nom": "Devoir Rendu exercice JavaScript et html 147",
    "dateDeRendu": "2024-12-01T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Olivia",
    "note": 18,
    "remarques": "Hors sujet",
    "matiere": "JavaScript et html"
  },
  {
    "id": 66,
    "nom": "Devoir Rendu Evaluation Ing\u00e9nierie des exigences 774",
    "dateDeRendu": "2024-09-21T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Rupert",
    "note": 9,
    "remarques": "Excellent travail",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 67,
    "nom": "Devoir Rendu Examen SGBD 142",
    "dateDeRendu": "2024-06-16T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Ursula",
    "note": 0,
    "remarques": "Manque de clart\u00e9",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 68,
    "nom": "Devoir Rendu Developpement Communication 985",
    "dateDeRendu": "2024-05-22T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Walter",
    "note": 7,
    "remarques": "Excellent travail",
    "matiere": "Communication"
  },
  {
    "id": 69,
    "nom": "Devoir Rendu Presentation Ing\u00e9nierie des exigences 970",
    "dateDeRendu": "2024-03-18T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Bob",
    "note": 16,
    "remarques": "Bonne analyse",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 70,
    "nom": "Devoir Rendu Presentation Communication 896",
    "dateDeRendu": "2024-02-01T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Walter",
    "note": 14,
    "remarques": "Excellent travail",
    "matiere": "JavaScript et html"
  },
  {
    "id": 71,
    "nom": "Devoir Rendu exercice Programmation avanc\u00e9e 640",
    "dateDeRendu": "2024-12-19T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Frank",
    "note": 11,
    "remarques": "Manque de sources",
    "matiere": "SGBD"
  },
  {
    "id": 72,
    "nom": "Devoir Rendu Etude JavaScript et html 589",
    "dateDeRendu": "2024-05-14T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Judy",
    "note": 14,
    "remarques": "Bonne utilisation des sources",
    "matiere": "SGBD"
  },
  {
    "id": 73,
    "nom": "Devoir Rendu Laboratoire SGBD 644",
    "dateDeRendu": "2024-11-14T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Rupert",
    "note": 19,
    "remarques": "Excellent travail",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 74,
    "nom": "Devoir Rendu Synthese Programmation avanc\u00e9e 197",
    "dateDeRendu": "2024-08-12T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Trent",
    "note": 17,
    "remarques": "Hors sujet",
    "matiere": "JavaScript et html"
  },
  {
    "id": 75,
    "nom": "Devoir Rendu Application Programmation avanc\u00e9e 777",
    "dateDeRendu": "2024-07-14T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Frank",
    "note": 0,
    "remarques": "Manque de clart\u00e9",
    "matiere": "JavaScript et html"
  },
  {
    "id": 76,
    "nom": "Devoir Rendu Application JavaScript et html 280",
    "dateDeRendu": "2024-07-27T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Victor",
    "note": 10,
    "remarques": "Manque de clart\u00e9",
    "matiere": "JavaScript et html"
  },
  {
    "id": 77,
    "nom": "Devoir Rendu Rapport Communication 954",
    "dateDeRendu": "2024-06-17T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Grace",
    "note": 5,
    "remarques": "A am\u00e9liorer",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 78,
    "nom": "Devoir Rendu TP Programmation avanc\u00e9e 611",
    "dateDeRendu": "2024-11-10T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Eve",
    "note": 0,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "SGBD"
  },
  {
    "id": 79,
    "nom": "Devoir Rendu Etude SGBD 678",
    "dateDeRendu": "2024-08-09T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Ivan",
    "note": 17,
    "remarques": "Hors sujet",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 80,
    "nom": "Devoir Rendu devoir JavaScript et html 206",
    "dateDeRendu": "2024-02-07T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Trent",
    "note": 11,
    "remarques": "Tr\u00e8s bien structur\u00e9",
    "matiere": "SGBD"
  },
  {
    "id": 81,
    "nom": "Devoir Rendu Etude Communication 937",
    "dateDeRendu": "2024-09-02T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Peggy",
    "note": 10,
    "remarques": "Manque de sources",
    "matiere": "SGBD"
  },
  {
    "id": 82,
    "nom": "Devoir Rendu rendu SGBD 792",
    "dateDeRendu": "2024-09-11T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Peggy",
    "note": 11,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "SGBD"
  },
  {
    "id": 83,
    "nom": "Devoir Rendu Presentation Ing\u00e9nierie des exigences 451",
    "dateDeRendu": "2024-09-15T12:46:44.938581Z",
    "rendu": true,
    "auteur": "David",
    "note": 10,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "JavaScript et html"
  },
  {
    "id": 84,
    "nom": "Devoir Rendu Rapport Programmation avanc\u00e9e 992",
    "dateDeRendu": "2024-03-31T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Quentin",
    "note": 8,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "SGBD"
  },
  {
    "id": 85,
    "nom": "Devoir Rendu Analyse SGBD 888",
    "dateDeRendu": "2025-01-04T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Zoe",
    "note": 9,
    "remarques": "Bonne analyse",
    "matiere": "JavaScript et html"
  },
  {
    "id": 86,
    "nom": "Devoir Rendu rendu Communication 490",
    "dateDeRendu": "2024-06-13T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Sybil",
    "note": 20,
    "remarques": "Tr\u00e8s bien structur\u00e9",
    "matiere": "SGBD"
  },
  {
    "id": 87,
    "nom": "Devoir Rendu Rapport SGBD 804",
    "dateDeRendu": "2025-01-07T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Victor",
    "note": 19,
    "remarques": "Bonne analyse",
    "matiere": "JavaScript et html"
  },
  {
    "id": 88,
    "nom": "Devoir Rendu Evaluation SGBD 525",
    "dateDeRendu": "2024-12-14T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Ursula",
    "note": 15,
    "remarques": "Manque de sources",
    "matiere": "JavaScript et html"
  },
  {
    "id": 89,
    "nom": "Devoir Rendu Developpement Ing\u00e9nierie des exigences 50",
    "dateDeRendu": "2025-01-08T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Grace",
    "note": 16,
    "remarques": "Manque de clart\u00e9",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 90,
    "nom": "Devoir Rendu Laboratoire Programmation avanc\u00e9e 565",
    "dateDeRendu": "2024-06-06T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Judy",
    "note": 0,
    "remarques": "Hors sujet",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 91,
    "nom": "Devoir Rendu Recherche Programmation avanc\u00e9e 523",
    "dateDeRendu": "2024-07-01T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Frank",
    "note": 17,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "Communication"
  },
  {
    "id": 92,
    "nom": "Devoir Rendu Projet JavaScript et html 725",
    "dateDeRendu": "2024-02-08T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Mallory",
    "note": 6,
    "remarques": "Hors sujet",
    "matiere": "Ing\u00e9nierie des exigences"
  },
  {
    "id": 93,
    "nom": "Devoir Rendu Projet Communication 596",
    "dateDeRendu": "2024-02-13T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Zoe",
    "note": 9,
    "remarques": "Bonne analyse",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 94,
    "nom": "Devoir Rendu TP SGBD 529",
    "dateDeRendu": "2024-12-28T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Ivan",
    "note": 9,
    "remarques": "Excellent travail",
    "matiere": "SGBD"
  },
  {
    "id": 95,
    "nom": "Devoir Rendu Laboratoire Communication 419",
    "dateDeRendu": "2024-11-14T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Eve",
    "note": 11,
    "remarques": "Tr\u00e8s cr\u00e9atif",
    "matiere": "Programmation avanc\u00e9e"
  },
  {
    "id": 96,
    "nom": "Devoir Rendu Application JavaScript et html 478",
    "dateDeRendu": "2024-04-19T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Eve",
    "note": 2,
    "remarques": "Excellent travail",
    "matiere": "SGBD"
  },
  {
    "id": 97,
    "nom": "Devoir Rendu Synthese SGBD 902",
    "dateDeRendu": "2025-01-12T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Yvonne",
    "note": 4,
    "remarques": "Excellent travail",
    "matiere": "JavaScript et html"
  },
  {
    "id": 98,
    "nom": "Devoir Rendu Evaluation JavaScript et html 680",
    "dateDeRendu": "2024-03-22T12:46:44.938581Z",
    "rendu": true,
    "auteur": "Ivan",
    "note": 19,
    "remarques": "Hors sujet",
    "matiere": "Communication"
  },
  {
    "id": 99,
    "nom": "Devoir Rendu TP Programmation avanc\u00e9e 731",
    "dateDeRendu": "2024-04-17T12:46:44.938581Z",
    "rendu": false,
    "auteur": "Victor",
    "note": 15,
    "remarques": "Manque de d\u00e9tails",
    "matiere": "Ing\u00e9nierie des exigences"
  }
];
  export { assignmentsData };
