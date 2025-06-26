export type Section = {
  id: string;
  label: string;
  isActive: boolean;
};

export interface ISections {
  sections: Section[];
}
