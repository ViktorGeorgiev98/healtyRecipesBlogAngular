export interface Recipe {
    _id: string;
    recipeName: string;
    author: string;
    imageUrl: string;
    difficultyLevel: string;
    shortDescription: string;
    ingredients: string;
    instructions: string;
    likes: [];
}