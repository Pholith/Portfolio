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
      name: "Plants-vs-Zombies",
      img: "../assets/images/screenPVZ.png",
      description: "Ce projet est une reproduction du jeu \"Plants VS Zombies\" dans le cadre d'un cours sur la programmation orientée objet. Il a été réalisé en Java.",
      link: "https://github.com/Pholith/Plants-VS-Zombies"
    },
    {
      name: "Oni-mods",
      img: "../assets/images/screenONI.png",
      description: "Ensemble de mods (extensions) sur le jeu Oxygen Not Included de Klei, les mods sont des projets C# qui utilisent la libririe Harmony pour patcher les méthodes du jeu.\
Ce projet est sûrement celui qui m'a le plus appris en programmation orientée object et en \"hacking\", il n'a pas été facile de comprendre et modifier le jeu qui est très complet et développé par des professionnels.",
      link: "https://github.com/Pholith/ONI-Mods"
    },
    {
      name: "Site web du chateau de Champs-Sur-Marne",
      img: "../assets/images/screenChateau.png",
      description: "Ce site web est mon premier projet tutoré, il s'est déroulé sur toute l'année scolaire 2019-2020 . L'objectif de ce projet est de promouvoir la culture locale et d'attirer de nouveaux visiteurs. Il nous a permis de développer nos compétences en programmation, communication, anglais et encore gestion de projet.",
      link: "https://github.com/Pholith/Site-Chateau-Champs-sur-Marne"
    }]

}
