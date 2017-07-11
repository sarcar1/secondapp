import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
    private altBackground: boolean = false;
    private email: string = "";
    private tel: string = "";
    private sex: string = "";

    constructor() { 
    }

    setBackground(isAlt: boolean): void {
        this.altBackground = isAlt;
    }

    setSex(sex: string): void {
        this.sex = sex;
    }    
    
    getSex(): string {
        return this.sex;
    }   

    isAltBackground(): boolean {
        return this.altBackground;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    isEmail(): boolean {
        return this.email != "" ? true : false;
    }

    getTel(): string {
        return this.tel;
    }

    setTel(tel: string): void {
        this.tel = tel;
    }

    isTel(): boolean {
        return this.tel != "" ? true : false;
    }

}
