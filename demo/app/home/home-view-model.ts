import { Observable, EventData } from "tns-core-modules/data/observable";
import { Toaster } from "nativescript-wheel-view";

export class HomeViewModel extends Observable {
    private toaster = new Toaster();
    constructor() {
        super();
    }

    onChange(data: object) {
        console.dir();
        this.toaster.makeToast(`Old val: ${data['oldValue']} New val: ${data['newValue']}`)
    }

   
}
