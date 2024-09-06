export class User {
    constructor(
        public id: number,
        public login: string,
        public password: string,
        public firstname: string,
        public lastname: string,
        public token: string
    ) {}
}