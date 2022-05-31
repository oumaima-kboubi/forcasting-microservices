export class ForcastProductEvent {
  constructor(
    public readonly name: string, 
    public readonly price: number, 
    public readonly store: string,
  ) {}
}
