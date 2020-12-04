function asLink(text: String, link: String): String {
  return "<a target='_blank' href='" + link + "'> " + text + " </a>";
};

var projects = [
  {
    name: "Oni-mods",
    img: "../assets/images/screenONI.jpg",
    description:
      "Ensemble de mods (extensions) sur le jeu " +
      asLink("Oxygen Not Included", "https://www.klei.com/games/oxygen-not-included" ) +
      " de Klei, les mods sont des projets .Net C# qui utilisent " +
      asLink("Harmony", "https://github.com/pardeike/Harmony/wiki") +
      " pour patcher les méthodes du jeu. \
<br/>Ce projet personnel a été le plus formateur en programmation orientée objet et en \"hacking\".",
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
      "Ce projet est une reproduction du jeu \"Plants VS Zombies\" dans le cadre d'un cours sur la programmation orientée objet.",
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
L'objectif de ce projet est de promouvoir la culture locale et d'attirer de nouveaux visiteurs.",

    //link: "http://vincent1.heliohost.org/Champs/Site-Chateau-Champs-sur-Marne/html/fr/main.php",
    period: "2018-2019",
    team: "3",
    technologies: ["HTML", "CSS", "PHP", "Javascript"] ,
    gitLink: "https://github.com/Pholith/Site-Chateau-Champs-sur-Marne",
    context: "Scolaire",
    images: ["../assets/images/friseChateau.png", "../assets/images/afficheChateau.png", "../assets/images/screenChateau3.png"]
  },
  {
    name: "Pokemon Battle",
    img: "../assets/images/screenPokemon.gif",
    description:
      "Ce projet est une reproduction du mode de combat du jeu pokémon dans le cadre d'un cours de poo avancée. \
La principale difficulté de ce projet était sa date de rendu qui nous laissait seulement 20 jours.",
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
      "Le projet DELIRE (<i>Développement par Equipe de Livrables Informatiques et Réalisation Encadrée </i>) est une simulation d'appel d'offre par l'AP-HP \
dans la réalisation de leur nouvelle application de gestion des DMP (Dossier médical partagé) pour un cours de méthodologie et gestion de projet.",
    period: "2019-2020",
    team: "6",
    technologies: ["JavaEE", "API REST", "VueJS", "MySQL", "UML"] ,
    context: "Scolaire",
    images: ["../assets/images/uml.png", "../assets/images/planning4.png", "../assets/images/screenDELIRE2.png"]
  },
  {
    name: "Manic Shooter",
    img: "../assets/images/screenManicShooter.gif",
    description: "Ce petit jeu est un projet de Space-invader avec de nombreux addons. Il est jouable (voir release git) et possède de nombreux ennemis uniques.",
    period: "fin 2020",
    team: "seul",
    technologies: ["C#", ".Net"],
    gitLink: "https://github.com/Pholith/Space-invaders",
    context: "Scolaire"
  },
  {
    name: "Formation Finder",
    img: "../assets/images/screenFinder.jpg",
    description: "Ce petit projet est un site dynamique qui utilise les api du gouvernement français pour permettre de rechercher des formations et établissements scolaires.",
    //link: "http://vincent1.heliohost.org/Finder/",
    period: "début 2020",
    team: "seul",
    technologies: ["HTML", "CSS", "PHP", "Javascript", "MySQL"] ,
    gitLink: "https://github.com/Pholith/ProjetWebOpenData",
    context: "Scolaire"
  },
  {
    name: "Data Visualisation",
    img: "../assets/images/screenPython.png",
    description: "Petit projet qui consistait à créer des graphiques à partir de données du gouvernement.",
    team: "2",
    period: "fin 2020",
    technologies: ["Python", "Pandas", "plotly.express"],
    context: "Scolaire",
    gitLink: "https://github.com/Pholith/Python-DataVisualisation"
  },
  {
    name: "TerrorBot",
    img: "../assets/images/terrorBot.png",
    description: "Projet de programmation assembleur ARM d'un robot. Le TerrorBot fonce droit sur un objet et s'arrête juste avant de le toucher. (vidéo en lien)",
    team: "2",
    technologies: ["ARM", "Cortex M3"],
    context: "Scolaire",
    period: "fin 2020",
    link: "https://www.youtube.com/watch?v=UHmo6leS6oE&feature=youtu.be",
    gitLink: "https://github.com/Pholith/ARM-Stellaris-TerrorBot"
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
      "Ces petits projets personnels m'ont appris à découvrir les bases de l'IA et des réseaux de neurones. \
Cette capture d'écran montre un algorythme génétique avec des automates cellulaires.",
    period: "début 2020",
    team: "seul",
    technologies: ["C#", "Unity3D"] ,
    context: "Personnel"
  }
]

export { projects };
