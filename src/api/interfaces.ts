export interface Board {
    id: string;
    name: string;
  }

export interface List {
    id: string;
    cards: Card[];
    name: string;
  }

export interface Card {
    id: string;
    name: string;
    due: string;
  }

export interface Member {
    id: string;
    fullName: string;
  }
