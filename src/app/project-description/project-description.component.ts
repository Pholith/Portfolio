import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = [
    {
      name: "Oni-mods",
      img: "../assets/images/screenONI.png",
      description: "Ensemble de mods (extensions) sur le jeu Oxygen Not Included de Klei, les mods sont des projets C# qui utilisent la libririe Harmony pour patcher les méthodes du jeu.\
Ce projet personnel est sûrement celui qui m'a le plus appris en programmation orientée object et en \"hacking\", il n'a pas été facile de comprendre et modifier le jeu qui est très complet et développé par des professionnels.",
      link: "https://github.com/Pholith/ONI-Mods"
    },
    {
      name: "Plants-vs-Zombies",
      img: "../assets/images/screenPVZ.png",
      description: "Ce projet est une reproduction du jeu \"Plants VS Zombies\" dans le cadre d'un cours sur la programmation orientée objet. \
Il a été réalisé en en binôme avec le language Java. Ce projet m'a permis d'étendre mes connaissances en poo et à bien répartir les tâches.",
      link: "https://github.com/Pholith/Plants-VS-Zombies"
    },
    {
      name: "Site web du chateau de Champs-Sur-Marne",
      img: "../assets/images/screenChateau.png",
      description: "Ce site web est mon premier projet tutoré, il s'est déroulé sur toute l'année scolaire 2018-2019. \
L'objectif de ce projet est de promouvoir la culture locale et d'attirer de nouveaux visiteurs. Il nous a permis de développer nos compétences en programmation, communication, anglais et gestion de projet.",
      link: "https://github.com/Pholith/Site-Chateau-Champs-sur-Marne"
    },
    {
      name: "Pokemon Battle",
      img: "../assets/images/screenPokemon.gif",
      description: "Ce projet est une reproduction du mode de combat du jeu pokémon dans le cadre d'un cours de poo avancée en java. \
La difficulté de ce projet est qu'il nous a été donné à faire en seulement 1mois, et 15 jours ont été requis rien pour préparer son développement...",
      link: "https://github.com/Pholith/PokemonBattle"
    },
    {
      name: "Projet D.E.L.I.R.E.",
      img: "../assets/images/screenDELIRE.png",
      description: "Le projet DELIRE (Développement par Equipe de Livrables Informatiques et Réalisation Encadrée) est une simulation d'appel d'offre par l'AP-HP \
dans la réalisation de leur nouvelle application de gestion des DMP (Dossier médical partagé) dans le cadre de notre cours de gestion de projet. \
Ce projet n'a pas été une simulation dans le sens où il nous a donné énormément de travail, et a été très formatteur. J'ai appris grâce à ce projet comment fonctionne le travail en équipe de 6.",
      link: "https://github.com/Pholith/PokemonBattle"
    },
    {
      name: "Formation Finder",
      img: "../assets/images/screenFinder.png",
      description: "Ce petit projet est un site dynamique qui utilise les api du gouvernement français pour permettre de rechercher des formations et établissements scolaires.",
      link: "https://github.com/Pholith/ProjetWebOpenData"
    },
    {
      name: "IA",
      img: "../assets/images/screenIA.gif",
      description: "Ces petits projets personnels m'ont appris à découvrir les bases de l'IA, du machine learning et du deep learning. Il a été réalisé sous Unity en C# et chaque Automate cellulaire possède un cerveau propre et un algorythme génétique.",
      link: ""
    }
  ]

}
