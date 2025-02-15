type Params = {
  lang: "fr" | "en";
};

interface Case {
  category: string;
  tagline: string;
  description: string;
  cta?: string;
}

interface Bloc1 {
  title: string;
  subtitle: string;
  cases: Case[];
}

interface Bloc2 {
  title: string;
  cases: string[];
}

interface Bloc2_2 {
  title: string;
  btn_1: string[];
  btn_2: string[];
  btn_3: string;
  btn_4: string[];
  btn_5: string;
  btn_6: string;
}

interface Bloc3 {
  title: string;
  more_info: string;
  cases: Omit<Case, "cta">[];
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface MarkerPoint {
  name: string;
  website: string;
  address: string;
  coordinates?: Coordinates;
  phone: string | string[];
  free_call?: string;
  fax?: string;
  email?: string;
  activities: string[];
  marker_information: string[];
}

interface Picto {
  title: string;
  description: string;
}

interface Bloc4 {
  title: string;
  subtitle: string;
  text_title: string;
  text: string;
  pictos: Picto[];
}

interface Review {
  author: string;
  review: string;
  date: string;
}

interface Bloc5 {
  title: string;
  text: string;
  reviews: Review[];
  footer: string;
}

interface Bloc6 {
  title: string;
  subtitle: string;
  text: string;
  button: string;
}

interface FooterAddress {
  name: string;
  phone: string;
  location: string;
}

interface FooterLink {
  name: string;
  url: string;
}

interface Footer {
  address: FooterAddress;
  links: FooterLink[];
}

interface PageContent {
  id: string;
  language: string;
  head_menu: string[];
  banner_title: string[];
  banner_menu: string[];
  bloc_1: Bloc1;
  bloc_2: Bloc2;
  bloc_2_2: Bloc2_2;
  bloc_3: Bloc3;
  carte_point: MarkerPoint[];
  bloc_4: Bloc4;
  bloc_5: Bloc5;
  bloc_6: Bloc6;
  footer: Footer;
}

export type {
  Params,
  PageContent,
  Case,
  Bloc1,
  Bloc2,
  Bloc2_2,
  Bloc3,
  MarkerPoint,
  Coordinates,
  Bloc4,
  Picto,
  Bloc5,
  Review,
  Bloc6,
  Footer,
  FooterAddress,
  FooterLink,
};
