import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  SimpleChange,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  // @Input()  childNumber: number;
  private myNumber: number;
  @Input() childName;

  constructor() {}

  @Input() set childNumber(number: number) {
    this.myNumber = number;
  }

  get childNumber() {
    return this.myNumber;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`OnChanges Invoked`);
    const newNumberChange: SimpleChange = changes.childNumber;
    console.log(`previous value(OnChanges): ${newNumberChange.previousValue}`);
    console.log(`current value(OnChanges): ${newNumberChange.currentValue}`);
  }

  ngOnInit() {
    console.log(`value from(OnInit): ${this.childNumber}`);
  }

  ngDoCheck() {
    console.log(`childName from(DoCheck): ${this.childName.name}`);
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit is same as ngOnInit - Initialized only once");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked executed");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit executed");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked executed");
  }

  ngOnDestroy() {
     console.log("Component has been destroyed");
  }

}
