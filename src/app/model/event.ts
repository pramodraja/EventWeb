export class Event {
    constructor(
        public id: number,
        public title: string,
        public date: Date,
        public description: string,
        public notes: string,
    ) { }
}
