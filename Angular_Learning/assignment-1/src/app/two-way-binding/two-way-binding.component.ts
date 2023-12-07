import { Component } from "@angular/core";

@Component({
    selector: 'two-way-binding',
    templateUrl: './two-way-binding.component.html',
})

export class TwoWayBindingComponent{

    name = "Rohan";

    onClearName() {
        
        if (this.name.length > 0) {
            this.name = '';
        }
    }
}