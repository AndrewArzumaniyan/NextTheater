export interface SessionInterface {
  href: string;
  title: string;
}

export interface SessionsInterface {
  [key: string]: SessionInterface[];
}