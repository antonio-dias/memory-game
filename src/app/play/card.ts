export class Card {

    private index: number;
    private blocked: boolean;

    constructor(index: number, blocked: boolean){
        this.index = index;
        this.blocked = blocked;
    }

    public getIndex(): number {
        return this.index;
    }
    
    public isBlocked(): boolean {
        return this.blocked;    
    }

    public setBlocked(blocked: boolean): void {
        this.blocked = blocked;
    }
}