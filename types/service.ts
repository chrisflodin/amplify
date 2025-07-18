export interface Service {
  id: string;
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  features: string[];
  detailedDescription: string;
  order: number;
  heroImage?: string;
  color?: string;
}

export interface ServiceSection {
  title: string;
  features: {
    title: string;
    description: string;
  }[];
  description: string;
}

export interface ServiceDetailData {
  service: Service;
  sections: ServiceSection[];
}
