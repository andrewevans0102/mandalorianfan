export interface MandalorianVehicle {
  name: string;
  description: string;
  image: string;
  image_alt: string;
  link: string;
}

export interface MandalorianVehicles {
  vehicles: MandalorianVehicle[];
}
