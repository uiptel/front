export interface Scratch {
    evaluation: number;
    price: number;
    title: string;
    img: string;
};

export const scratches: Scratch[] = [
    { evaluation: 50, price: 60, title: 'scratch_card_50', img: 'card-50.jpeg'},
    { evaluation: 100, price: 120, title: 'scratch_card_100', img: 'card-100.jpeg'},
    { evaluation: 200, price: 240, title: 'scratch_card_200', img: 'card-200.jpeg'},
];
