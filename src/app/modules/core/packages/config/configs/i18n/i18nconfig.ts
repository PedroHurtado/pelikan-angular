import {i18nDefaults} from './i18ndefaults';
export class I18nConfig {
    public useI18n;
    public i18nLibrary;
    constructor() {
        Object.assign(this, i18nDefaults);        
    }    
}