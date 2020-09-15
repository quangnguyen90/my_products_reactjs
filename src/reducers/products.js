var initialState = [
    {
        id: 1,
        name: "Badminton",
        price: 500,
        status: true
    },
    {
        id: 2,
        name: "Table Tennis",
        price: 600,
        status: false
    },
    {
        id: 3,
        name: "Patin",
        price: 700,
        status: true
    },
];
const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
};

export default products;