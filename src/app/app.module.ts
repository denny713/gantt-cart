import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
// @ts-ignore
import {GanttChart} from "angular-gantt-chart";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GanttChart
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
