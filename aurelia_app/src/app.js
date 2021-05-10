import {Profile} from './profile';
import {I18N} from 'aurelia-i18n';

export class App{

    static injection = [I18N]; 

    constructor(i18n) {
        this.i18n = i18n;
        this.selectedLocale = 'en'
        this.profile  = new Profile('Shanika','SSE','0771234567',54.450,122500.54,new Date(1997, 0, 10, 0,0,0))
    }

}

