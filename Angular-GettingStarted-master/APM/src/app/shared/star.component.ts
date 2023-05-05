import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnInit, OnChanges {
    @Input() rating: number = 0;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>(); 
    cropWidth: number = 75;
    currentRating: number = 0;

    ngOnInit(): void {
        this.cropWidth = this.rating * (75 / 5);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * (75 / 5);
    }

    onClick(): void{
        this.notify.emit(`The rating ${this.rating} was clicked!`);
    }
}