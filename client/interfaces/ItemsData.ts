export interface ItemsSearchResults {
  author: {
    name: string;
    lastname: string;
  };
  categories: [string];
  items: [
    {
      id: string;
      title: string;
      price: {
        currency: string;
        amount: number;
        decimals: number;
      };
      picture: string;
      condition: string;
      free_shipping: boolean;
      city: string;
    }
  ];
}
