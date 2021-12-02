export interface MandalorianColumn {
  name: string;
  description: string;
  image: string;
  image_alt: string;
  link: string;
}

export interface MandalorianColumns {
  source: string;
  values: MandalorianColumn[];
}
