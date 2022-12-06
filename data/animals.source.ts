import { IAnimal } from "common-interface/interface/animal.interface";
import { ISeaAnimal } from "common-interface/interface/sea-animal.interface";

export const Animals = [
  { id: '1', name: 'Dog', isMammal: true} as IAnimal,
  { id: '2', name: 'Cat', isMammal: true} as IAnimal,
  { id: '3', name: 'Frog'} as IAnimal,
  { id: '4', name: 'Salmon', canSwim: true, deep: 300} as ISeaAnimal,
  { id: '5', name: 'Bird', isMammal: false} as IAnimal
];
