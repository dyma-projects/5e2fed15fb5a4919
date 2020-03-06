import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public hasClassA: boolean = false;
  public myVar: string = "Bonjour";

  constructor() { }

  ngOnInit(): void {
    this.hasClassA = true;
  }

  public onClick($event: Event): void {
    alert("click")
  }

}
