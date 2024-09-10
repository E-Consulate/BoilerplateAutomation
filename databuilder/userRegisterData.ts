export class UserRegisterData {
    private firstName: any;
    private lastName: any;
    private useremail: any;
    private userPassword1: any;
    private userPW:any;

    constructor() {

    }

    public getFirstName(): any {
        return this.firstName;
    }

    public setFirstName(firstName: any): void {
        this.firstName = firstName;
    }

    public getLastName(): any {
        return this.lastName;
    }

    public setLastName(lastName: any): void {
        this.lastName = lastName;
    }

    public getUserPassword1(): any {
        return this.userPassword1;
    }

    public setUserPassword1(userPassword1: any): void {
        this.userPassword1= userPassword1;
    }

    public setUserEmail(useremail: any): void {
        this.useremail = useremail;
    }

    public getUserEmail(): any {
        return this.useremail;
    }

    public setUPW(userPW:any):void{
        this.userPW = userPW;
    }

    public getUPW():any{
            return this.userPW;
    }

}



