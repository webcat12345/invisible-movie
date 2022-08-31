// TODO: Add more language values or import from third party (i186)
export enum Language {
  En = 'en'
}

// TODO: Add more status strings
export enum Status {
  Ongoing = 'ongoing'
}

export interface Entry {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface MovieBasic {
  title: string;
}

export interface Movie extends Entry, MovieBasic {
  budget: number;
  originalLang: Language;
  originalTitle: string;
  overview: string;
  popularity: string;
  releaseDate: string;
  revenue: number;
  runtime: number;
  status: Status;
  tagline: any;

  voteAverage: number;
  voteCount: number;
}
