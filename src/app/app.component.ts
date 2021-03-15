import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private number: number = 2342;
  name: string = "mohamed";
  isVisible: boolean = true;

  user = {
    name: "aasiz"
  };
  updateValue() {
    this.user.name = "aasif";
  }

  switchVisibility() {
    this.isVisible = !this.isVisible;
  }

  get counter() {
    return this.number;
  }

  set counter(value) {
    this.number = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
