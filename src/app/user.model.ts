export class User {
    constructor(
        public pageId: string,
        public name: string,
        public email?: string,
        public description?: string) {}
}
