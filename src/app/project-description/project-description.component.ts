import { Component, OnInit } from "@angular/core";
import { projects, Context, techsToNotFilter, techsToPutTogether, techsSameNameButDifferent } from "../../assets/datas/projects";
import { cloneDeep } from 'lodash';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-project-description",
  templateUrl: "./project-description.component.html",
  standalone: false,
  styleUrls: ["./project-description.component.scss"],
})

export class ProjectDescriptionComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.contextList = new Array();
    for (const context in Context) {
      this.contextList.push(context);
    }

    this.techsList = this.getTechnologies();
  }

  showedProjects = projects;

  techsList: Array<string>;
  contextList: Array<string>;
  techFilterSelected: string = "";
  contextFilterSelected: string = "";


  filterProject() {
    this.showedProjects = cloneDeep(projects);
    if (this.techFilterSelected != "") this.showedProjects = this.showedProjects.filter((p) => p.technologies.includes(this.techFilterSelected) || p.technologies.find((tech) => this.techFilterSelected.includes(tech)));
    if (this.contextFilterSelected != "") this.showedProjects = this.showedProjects.filter((p) => p.context == this.contextFilterSelected);
  }

  onTechSelected(value: string) {
    this.techFilterSelected = value;
    this.filterProject();
  }
  onContextSelected(value: string) {
    this.contextFilterSelected = value;
    this.filterProject();
  }

  getTechnologies(): Array<string> {
    let techs: Set<string> = new Set();
    projects.forEach(project => {
      if (!project.hide) project.technologies.forEach(
        tech => {
          let findedCollaspeTech;
          if (!techsSameNameButDifferent.includes(tech)) {
            findedCollaspeTech = techsToPutTogether.find((value) => (value.includes(tech) || tech.includes(value)));
          }
          if (findedCollaspeTech) techs.add(findedCollaspeTech);
          else if (techsToNotFilter.includes(tech)) "pass";
          else techs.add(tech);
        });
    });
    return Array.from(techs).sort();
  }


  shouldBeVisible(project): boolean {

    const hideQueryArg = this.route.snapshot.queryParamMap.get("h");
    if (hideQueryArg !== null) return true;

    return !project.hide
  }

  toggleImages(event: Event) {
    let targetElement: HTMLElement = (event.target as HTMLElement).nextElementSibling as HTMLElement;
    targetElement.classList.toggle("moreImages-visible");
    targetElement.parentElement.classList.toggle("col-lg-7");
    targetElement.parentElement.classList.toggle("col-lg-12");
    targetElement.classList.toggle("moreImages-invisible");
  }
}
