export type Tour = {
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  adultPrice: number;
  childPrice: number;
  image: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  included: string[];
  itinerary: string[];
  featured?: boolean;
};

export type Destination = {
  slug: string;
  name: string;
  image: string;
  description: string;
  tourSlug: string;
};

export type FleetVehicle = {
  name: string;
  seats: string;
  image: string;
  features: string[];
};

export type Testimonial = {
  name: string;
  country: string;
  flag: string;
  text: string;
  rating: number;
};
