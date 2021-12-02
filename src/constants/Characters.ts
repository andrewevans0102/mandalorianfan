export interface MandalorianCharacter {
  name: string;
  description: string;
  image: string;
  image_alt: string;
  link: string;
}

export interface MandalorianCharacters {
  characters: MandalorianCharacter[];
}
