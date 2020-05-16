export interface Scratch {
    evaluation: number;
    price: number;
    title: string;
    img: string;
};

export const scratches: Scratch[] = [
    { evaluation: 50, price: 55, title: 'scratch_card_50_title', img: 'card-50.jpeg'},
    { evaluation: 100, price: 110, title: 'scratch_card_100_title', img: 'card-100.jpeg'},
    { evaluation: 200, price: 220, title: 'scratch_card_200_title', img: 'card-200.jpeg'},
];
