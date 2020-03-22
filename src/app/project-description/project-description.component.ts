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

  asLink = function(text : String, link : String) : String {
    return "<a target='_blank' href='" + link + "'> "+ text+" </a>";
  }
  
  projects = [
    {
      name: "Oni-mods",
      img: "../assets/images/screenONI.png",
      description: "Ensemble de mods (extensions) sur le jeu "+ this.asLink("Oxygen Not Included", "https://www.klei.com/games/oxygen-not-included") + " de Klei (début 2019-actuel), les mods sont des projets .NET C# qui utilisent la librairie "+ this.asLink("Harmony", "https://github.com/pardeike/Harmony/wiki") +" pour patcher les méthodes du jeu. \
<br/>Ce projet personnel est sûrement celui qui m'a le plus appris en programmation orientée object et en \"hacking\", il n'a pas été facile de comprendre et modifier le jeu qui est très complet et développé par des professionnels. \
Ce projet m'a aussi appris l'importance de la maintenance du code sur le long terme (devoir rendre les mods accessibles malgré les mise à jour du jeu).",
      link: "https://github.com/Pholith/ONI-Mods"
    },
    {
      name: "Plants-vs-Zombies",
      img: "../assets/images/screenPVZ.gif",
      description: "Ce projet est une reproduction du jeu \"Plants VS Zombies\" dans le cadre d'un cours sur la programmation orientée objet (début 2019). \
Il a été réalisé en en binôme avec le language Java. Ce projet m'a permis d'étendre mes connaissances en poo et à bien répartir les tâches.",
      link: "https://github.com/Pholith/Plants-VS-Zombies"
    },
    {
      name: "Site web du chateau de Champs-Sur-Marne",
      img: "../assets/images/screenChateau.png",
      description: this.asLink("Ce site web", "http://vincent1.heliohost.org/Champs/Site-Chateau-Champs-sur-Marne/html/fr/main.php") +" est mon premier projet tutoré, il s'est déroulé sur toute l'année scolaire 2018-2019. \
L'objectif de ce projet est de promouvoir la culture locale et d'attirer de nouveaux visiteurs. Il nous a permis de développer nos compétences en programmation, communication, anglais et gestion de projet.",
      link: "https://github.com/Pholith/Site-Chateau-Champs-sur-Marne"
    },
    {
      name: "Pokemon Battle",
      img: "../assets/images/screenPokemon.gif",
      description: "Ce projet est une reproduction du mode de combat du jeu pokémon dans le cadre d'un cours de poo avancée en java (début 2020). \
La difficulté de ce projet est qu'il nous a été donné à faire en seulement 1mois, et 15 jours ont été requis rien pour préparer son développement...",
      link: "https://github.com/Pholith/PokemonBattle"
    },
    {
      name: "Projet D.E.L.I.R.E.",
      img: "../assets/images/screenDELIRE.png",
      description: "Le projet DELIRE (Développement par Equipe de Livrables Informatiques et Réalisation Encadrée) est une simulation d'appel d'offre par l'AP-HP \
dans la réalisation de leur nouvelle application de gestion des DMP (Dossier médical partagé) dans le cadre de notre cours de gestion de projet (2019-2020). \
<br/>Ce projet n'a pas été une simulation dans le sens où il nous a donné énormément de travail, et a été très formatteur. J'ai appris grâce à ce projet comment fonctionne le travail en équipe de 6. \
Le site a été réalisé avec Vuejs ainsi que JavaEE avec des api REST.",
      link: "https://github.com/Pholith/PokemonBattle"
    },
    {
      name: "Formation Finder",
      img: "../assets/images/screenFinder.png",
      description: this.asLink("Ce petit projet", "vincent1.heliohost.org/Finder/") +" est un site dynamique qui utilise les api du gouvernement français pour permettre de rechercher des formations et établissements scolaires (début 2019).",
      link: "https://github.com/Pholith/ProjetWebOpenData"
    },
    {
      name: "IA",
      img: "../assets/images/screenIA.gif",
      description: "Ces petits projets personnels m'ont appris à découvrir les bases de l'IA, du machine learning et du deep learning. Il a été réalisé sous Unity en C#. \
Cette capture d'écran montre mon algorythme génétique avec des automates cellulaires (début 2020).",
      link: ""
    }
  ]

}
