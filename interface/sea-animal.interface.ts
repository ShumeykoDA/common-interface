import { IAnimal } from "./animal.interface";

export interface ISeaAnimal extends IAnimal {
    canSwim: boolean;
    deep: number;
}
