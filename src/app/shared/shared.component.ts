export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ) {}
}
