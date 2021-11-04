import { Move } from "./move.model"

export class Contact {

    moves: Move[]
    constructor(public _id: string, public name: string = '', public email: string = '', public phone: string = '') {

    }
}

