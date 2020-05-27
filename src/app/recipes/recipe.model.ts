import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingrediants: Ingredient[];

    constructor(name: string, desc: string, imgPath: string, ingrediants: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.ingrediants = ingrediants;
    }
}
