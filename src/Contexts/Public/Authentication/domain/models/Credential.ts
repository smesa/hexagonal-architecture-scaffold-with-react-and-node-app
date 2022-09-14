import { Email } from '.';

export class Credential {
    
    _email: Email;
    _password: string;
    
    constructor(email: string, password: string) {
        
        if (isInvalidPassword(password)) {
            throw new Error('Invalid password');
        } else {
            this._email = new Email(email);
            this._password = password;
        }

    }

    get email(): string {
        return this._email.address;
    }

    get password(): string {
        return this._password;
    }
    
}

function isInvalidPassword(password: string): boolean {
    const passwordRegex = /^[a-zA-Z0-9_.-]*$/;
    return !passwordRegex.test(password);
}
