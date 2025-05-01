export interface NavLink {
  id: string;
  title: string;
}

export interface FeaturedCardProps {
  id: string;
  icon: string;
  title: string;
  content: string;
  index: number;
  isLast: boolean;
}

export interface ButtonProps {
  styles?: string;
  children?: React.ReactNode;
}

export interface FeedbackProps {
  content: string;
  title: string;
  name: string;
  img: string | any;
}

export interface FooterLink {
  id: string;
  title: string;
  links: { name: string; link: string }[];
}

export interface SocialMedia {
  id: string;
  icon: string;
  link: string;
}