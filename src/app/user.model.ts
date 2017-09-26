export class User {
    constructor(
        public pageId: string,
        public name: string,
        public description?: string,
        public email?: string) {}
}
