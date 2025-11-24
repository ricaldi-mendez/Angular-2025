import { Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from "@angular/common";

@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe],
})  
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  //solo lectura no pueden modificarse .update o .set
  HeroDescription = computed(()=>{
    const description = `${this.name()} - ${this.age()} años, tiene el superpoder de ser millonario`
    return description
  })

  changeHeroName(){
    this.name.set('spiderman');
  }
  changeHeroAge(){
    this.age.set(21);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  // capitalizedName() {
  //   return this.name().toUpperCase();
  // }
}