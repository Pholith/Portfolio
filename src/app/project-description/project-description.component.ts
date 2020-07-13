import { Component, OnInit } from "@angular/core";
import { projects } from "../../assets/datas/projects";

@Component({
  selector: "app-project-description",
  templateUrl: "./project-description.component.html",
  styleUrls: ["./project-description.component.scss"],
})
export class ProjectDescriptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }

  toggleImages(event: Event) {
    let targetElement: HTMLElement = (event.target as HTMLElement).nextElementSibling as HTMLElement;
    targetElement.classList.toggle("moreImages-visible");
    targetElement.classList.toggle("moreImages-invisible");
  }

  projects = projects;
  


}
