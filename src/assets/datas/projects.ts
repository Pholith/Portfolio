function asLink(text: String, link: String): String {
  return "<a target='_blank' href='" + link + "'> " + text + " </a>";
};

export enum Context {
  Professionnel = "Professionnel",
  Scolaire = "Scolaire",
  Personnel = "Personnel"
}

export const techsToNotFilter = ["Pandas", "Cortex M3", "API REST", "plotly.express", "Harmony", "Btrieve", "VueJS"];
export const techsToPutTogether = ["Java", "SQL", "HTML / CSS"];
export const techsSameNameButDifferent = ["Javascript", "C"];

export const projects = [
  {
    name: "Oni-mods",
    img: "assets/images/screenONI.jpg",
    description:
      "Ensemble de mods (extensions) sur le jeu " +
      asLink("Oxygen Not Included", "https://www.klei.com/games/oxygen-not-included") +
      " de Klei, les mods sont des projets .Net C# qui utilisent " +
      asLink("Harmony", "https://github.com/pardeike/Harmony/wiki") +
      " pour patcher les méthodes du jeu. \
<br/>Ce projet personnel a été le plus formateur en programmation orientée objet et en \"hacking\".",
    period: "début 2019 - maintenance",
    team: "seul",
    technologies: ["C#", "Harmony"],
    tools: ["dnSpy", "Spriter", "Photoshop"],
    gitLink: "https://github.com/Pholith/ONI-Mods",
    context: Context.Personnel,
  },
  {
    name: "Chamber 505",
    img: "assets/images/hotel1.png",
    description:
      "Chamber 505 est un jeu en réalité virtuel mi-aventure mi-horreur. Le joueur se réveille et doit s'échapper d'un hotel abandonné et squatté par des monstres.",
    period: "2021 - 2022",
    team: "6",
    technologies: ["C#", "Unity3D", "VR", "Oculus Quest"],
    tools: ["Blender", "Mixamo"],
    context: Context.Scolaire,
    images: ["assets/images/hotel2.gif", "assets/images/hotel3.png"],
    video: "assets/TrailerJuRoom505.webm"
  },
  {
    name: "RobotIndustry",
    img: "assets/images/screenRobot1.png",
    description:
      "Dans RobotIndustry, vous incarnez un petit robot, vous êtes arrivés sur une nouvelle planète semblable à la Terre. Votre but est de coloniser la planète, de vous reproduire et d'évoluer. \
      Se reproduire pour un robot, c'est simplement créer des semblables, et évoluer en créant de nouvelles pièces plus sophistiquées.",
    link: "https://pholith.itch.io/robotindustry",
    period: "début 2021 - en pause",
    team: "2",
    technologies: ["C#", "Unity3D"],
    context: Context.Personnel,
    images: ["assets/images/screenRobot2.png", "assets/images/screenRobot3.png", "assets/images/screenRobot4.png"]
  },
  {
    name: "Outil de transfert",
    img: "",
    hide: true,
    description:
      `Mon projet le plus important lors de mon alternance de 3 ans chez Julie Solutions est la création d'un outil de transfert. \
      Il permet de convertir différents formats de bases de données (exemple: les données clients du logiciel Julie, et le format ${asLink("TDIO", "https://lescdf.fr/tdio-type-dexportation")} de ${asLink("lesCDF", "https://lescdf.fr/")}.\
      <br\> Ce projet permet aujourd'hui la converssion de nombreux formats utiles au support et à la vente.`,
    period: "2020-2023",
    team: "2",
    tools: ["Azure Devops", "DBeaver"],
    technologies: ["C#", "C++", "C", "Btrieve", "SQLite"],
    context: Context.Professionnel
  },
  {
    name: "Geneden",
    img: "assets/images/menuBackground-small.jpg",
    images: ["assets/images/genedenMultiplayer.gif", "assets/images/genedenCapture1.png", "assets/images/genedenGraph.png"],
    description:
      "Geneden est un jeu de stratégie et de gestion en multijoueur, les joueurs incarnent des dieux qui contrôlent les éléments, ceux-ci doivent faire grandir leur population ou exterminer celle de l'adversaire.",
    period: "fin 2022",
    team: "5",
    tools: ["Photoshop", "Sprite Illuminator", "Notion"],
    technologies: ["C#", "Unity3D", "Photon Fusion"],
    gitLink: "https://github.com/Pholith/Geneden",
    context: Context.Scolaire
  },
  {
    name: "Plants-vs-Zombies",
    img: "assets/images/screenPVZ.gif",
    images: ["assets/images/PlantsVSZombiesUML.jpg"],
    description:
      "Ce projet est une reproduction du jeu \"Plants VS Zombies\" dans le cadre d'un cours sur la programmation orientée objet.",
    link: "",
    period: "début 2019",
    team: "2",
    technologies: ["Java", "UML"],
    tools: ["StarUML"],
    gitLink: "https://github.com/Pholith/Plants-VS-Zombies",
    context: Context.Scolaire
  },
  {
    name: "Site web du chateau de Champs-Sur-Marne",
    img: "assets/images/screenChateau.jpg",
    description: "Ce site web est mon premier projet tutoré. \
L'objectif de ce projet est de promouvoir la culture locale et d'attirer de nouveaux visiteurs.",

    //link: "http://vincent1.heliohost.org/Champs/Site-Chateau-Champs-sur-Marne/html/fr/main.php",
    period: "2018-2019",
    team: "3",
    technologies: ["HTML", "CSS", "PHP", "Javascript"],
    gitLink: "https://github.com/Pholith/Site-Chateau-Champs-sur-Marne",
    context: Context.Scolaire,
    images: ["assets/images/friseChateau.png", "assets/images/afficheChateau.png", "assets/images/screenChateau3.png"]
  },
  {
    name: "Pokemon Battle",
    img: "assets/images/screenPokemon.gif",
    description:
      "Ce projet est une reproduction du mode de combat du jeu pokémon dans le cadre d'un cours de poo avancée. \
La principale difficulté de ce projet était sa date de rendu qui nous laissait seulement 20 jours.",
    period: "fin 2019",
    team: "2",
    technologies: ["Java", "JavaFX"],
    gitLink: "https://github.com/Pholith/PokemonBattle",
    context: Context.Scolaire
  },
  {
    name: "D.E.L.I.R.E.",
    img: "assets/images/screenDELIRE.png",
    description:
      "Le projet DELIRE (<i>Développement par Equipe de Livrables Informatiques et Réalisation Encadrée </i>) est une simulation d'appel d'offre par l'AP-HP \
dans la réalisation de leur nouvelle application de gestion des DMP (Dossier médical partagé) pour un cours de méthodologie et gestion de projet.",
    period: "2019-2020",
    team: "6",
    technologies: ["Java", "JavaEE", "API REST", "VueJS", "MySQL", "UML"],
    context: Context.Scolaire,
    images: ["assets/images/uml.png", "assets/images/planning4.png", "assets/images/screenDELIRE2.png"]
  },
  {
    name: "Manic Shooter",
    img: "assets/images/screenManicShooter.gif",
    images: ["assets/images/manicShooterUML.jpg", "assets/images/manicShooter2.gif"],
    description: "Ce petit jeu est un projet de Space-invader avec de nombreux addons. Il est jouable et possède de nombreux ennemis uniques.",
    period: "fin 2020",
    team: "seul",
    technologies: ["C#", "UML"],
    link: "https://github.com/Pholith/Space-invaders/releases",
    gitLink: "https://github.com/Pholith/Space-invaders",
    context: Context.Scolaire
  },
  {
    name: "Formation Finder",
    img: "assets/images/screenFinder.jpg",
    description: "Ce petit projet est un site dynamique qui utilise les api du gouvernement français pour permettre de rechercher des formations et établissements scolaires.",
    //link: "http://vincent1.heliohost.org/Finder/",
    period: "début 2020",
    team: "seul",
    technologies: ["HTML", "CSS", "PHP", "Javascript", "MySQL"],
    gitLink: "https://github.com/Pholith/ProjetWebOpenData",
    context: Context.Scolaire
  },
  {
    name: "Data Visualisation",
    img: "assets/images/screenPython.png",
    description: "Petit projet qui consistait à créer des graphiques à partir de données du gouvernement.",
    team: "2",
    period: "fin 2020",
    technologies: ["Python", "Pandas", "plotly.express"],
    context: Context.Scolaire,
    gitLink: "https://github.com/Pholith/Python-DataVisualisation"
  },
  {
    name: "TerrorBot",
    img: "assets/images/terrorBot.png",
    description: "Projet de programmation assembleur ARM d'un robot. Le TerrorBot fonce droit sur un objet et s'arrête juste avant de le toucher. (vidéo en lien)",
    team: "2",
    technologies: ["ARM", "Cortex M3"],
    context: Context.Scolaire,
    period: "fin 2020",
    video: "https://www.youtube.com/watch?v=UHmo6leS6oE&feature=youtu.be",
    gitLink: "https://github.com/Pholith/ARM-Stellaris-TerrorBot"
  },
  {
    name: "Suivi production",
    img: "assets/images/imprimante.png",
    description:
      `Un des projets les plus importants que j'ai réalisé chez ${asLink("Aereco", "https://www.aereco.fr/")} lors de ma deuxième année de DUT en alternance est un suivi de production. \
      Ce projet a eu pour but de calculer, traiter et visualiser le suivi de la production à l'aide des compteurs des imprimantes.`,
    team: "seul",
    technologies: ["Windev", "MS SQL"],
    context: Context.Professionnel
  },
  {
    name: "IA",
    img: "assets/images/screenIA.gif",
    description:
      "Ces petits projets personnels m'ont appris à découvrir les bases de l'IA et des réseaux de neurones. \
Cette capture d'écran montre un algorythme génétique avec des automates cellulaires.",
    period: "début 2020",
    team: "seul",
    technologies: ["C#", "Unity3D"],
    context: Context.Personnel
  },
  {
    name: "Extension StarUML",
    img: "https://raw.githubusercontent.com/Pholith/StarUML-ColorExtension/main/readme/demonstration.gif",
    description:
      `Petite extension pour le logiciel ${asLink("StarUML", "https://staruml.io/")} qui permet de gérer facilement les couleurs dans des diagrammes.`,
    period: "fin 2020",
    team: "seul",
    technologies: ["Javascript"],
    gitLink: "https://github.com/Pholith/StarUML-ColorExtension",
    context: Context.Personnel
  },
  {
    name: "Ce ePortfiolio",
    description:
      "Ce portfiolio a pour but de mettre en avant mes projets et de m'entraîner sur de nouveaux frameworks comme Angular.",
    period: "2022 - maintenant",
    team: "seul",
    technologies: ["Angular", "Typescript", "HTML", "SCSS", "Bootstrap" ],
    gitLink: "https://github.com/Pholith/Portfolio",
    context: Context.Personnel
  }
]
