function asLink(text: String, link: String): String {
  return "<a target='_blank' href='" + link + "'> " + text + " </a>";
};

var projects = [
  {
    name: "Oni-mods",
    img: "../assets/images/screenONI.jpg",
    description:
      "Ensemble de mods (extensions) sur le jeu " +
      asLink(
        "Oxygen Not Included",
        "https://www.klei.com/games/oxygen-not-included"
      ) +
      " de Klei , les mods sont des projets .NET C# qui utilisent la librairie " +
      asLink("Harmony", "https://github.com/pardeike/Harmony/wiki") +
      " pour patcher les méthodes du jeu. \
<br/>Ce projet personnel est sûrement celui qui m'a le plus appris en programmation orientée objet et en \"hacking\", il n'a pas été facile de comprendre et modifier le code du jeu qui est très complet et développé par des professionnels. \
Ce projet m'a aussi appris l'importance de la maintenance du code sur le long terme (devoir rendre les mods accessibles malgré les mises à jour du jeu).",
    period: "début 2019-actuel",
    team: "seul",
    technologies: ["C#", ".NET"] ,
    gitLink: "https://github.com/Pholith/ONI-Mods",
    context: "Personnel",
  },
  {
    name: "Plants-vs-Zombies",
    img: "../assets/images/screenPVZ.gif",
    description:
      "Ce projet est une reproduction du jeu \"Plants VS Zombies\" dans le cadre d'un cours sur la programmation orientée objet. \
Il projet m'a permis d'étendre mes connaissances en poo et à bien répartir les tâches.",
    link: "",
    period: "début 2019",
    team: "2",
    technologies: ["Java", "UML"] ,
    gitLink: "https://github.com/Pholith/Plants-VS-Zombies",
    context: "Scolaire"
  },
  {
    name: "Site web du chateau de Champs-Sur-Marne",
    img: "../assets/images/screenChateau.jpg",
    description: "Ce site web est mon premier projet tutoré. \
L'objectif de ce projet est de promouvoir la culture locale et d'attirer de nouveaux visiteurs.\
 Il nous a permis de développer nos compétences en programmation web, communication, anglais et gestion de projet.",

    link: "http://vincent1.heliohost.org/Champs/Site-Chateau-Champs-sur-Marne/html/fr/main.php",
    period: "2018-2019",
    team: "3",
    technologies: ["HTML/CSS", "PHP", "Javascript"] ,
    gitLink: "https://github.com/Pholith/Site-Chateau-Champs-sur-Marne",
    context: "Scolaire",
    images: ["../assets/images/friseChateau.png", "../assets/images/afficheChateau.png", "../assets/images/screenChateau3.png"]
  },
  {
    name: "Pokemon Battle",
    img: "../assets/images/screenPokemon.gif",
    description:
      "Ce projet est une reproduction du mode de combat du jeu pokémon dans le cadre d'un cours de poo avancée. \
La principale difficulté de ce projet est qu'il nous a été donné à faire en seulement 1 mois dans une période de stress. De plus, 15 jours ont été requis rien que pour préparer son développement...",
    period: "fin 2019",
    team: "2",
    technologies: ["Java", "JavaFX"] ,
    gitLink: "https://github.com/Pholith/PokemonBattle",
    context: "Scolaire"
  },
  {
    name: "D.E.L.I.R.E.",
    img: "../assets/images/screenDELIRE.png",
    description:
      "Le projet DELIRE (Développement par Equipe de Livrables Informatiques et Réalisation Encadrée) est une simulation d'appel d'offre par l'AP-HP \
dans la réalisation de leur nouvelle application de gestion des DMP (Dossier médical partagé) dans le cadre de notre cours de méthodologie et gestion de projet. \
<br/>Ce projet n'a pas été une simulation dans le sens où il nous a donné énormément de travail et a été très formateur. J'ai notamment appris grâce à ce projet comment travailler en équipe de 6.",
    period: "2019-2020",
    team: "6",
    technologies: ["JavaEE", "API REST", "VueJS", "MySQL", "UML"] ,
    context: "Scolaire",
    images: ["../assets/images/uml.png", "../assets/images/planning4.png", "../assets/images/screenDELIRE2.png"]
  },
  {
    name: "Formation Finder",
    img: "../assets/images/screenFinder.jpg",
    description: "Ce petit projet est un site dynamique qui utilise les api du gouvernement français pour permettre de rechercher des formations et établissements scolaires. \
Il a été réalisé dans le cadre d'un cours de développement web.",
    link: "http://vincent1.heliohost.org/Finder/",
    period: "début 2020",
    team: "seul",
    technologies: ["HTML/CSS", "PHP", "Javascript", "MySQL"] ,
    gitLink: "https://github.com/Pholith/ProjetWebOpenData",
    context: "Scolaire"
  },
  {
    name: "Suivi production",
    img: "../assets/images/imprimante.png",
    description:
      "Un des projets les plus importants que j'ai réalisé chez Aereco lors de ma deuxième année de DUT en alternance est un suivi de production. \
      Ce projet a eu pour but de calculer, traiter et visualiser le suivi de la production à l'aide des compteurs des imprimantes.",
    team: "seul",
    technologies: ["Windev", "MS SQL"],
    context: "Professionnel"
  },
  {
    name: "IA",
    img: "../assets/images/screenIA.gif",
    description:
      "Ces petits projets personnels m'ont appris à découvrir les bases de l'IA, du machine learning et du deep learning. \
Cette capture d'écran montre un de mes bricolages, un algorythme génétique avec des automates cellulaires.",
    period: "début 2020",
    team: "seul",
    technologies: ["C#", "Unity3D"] ,
    context: "Personnel"
  }
]

export { projects };
