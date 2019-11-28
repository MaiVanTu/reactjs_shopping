
var initialState = [
    {
        id: 1,
        name: 'Iphone X',
        image: 'https://tudeptrai.s3-ap-southeast-1.amazonaws.com/image/iphonex.png',
        description: 'LL/A',
        price: 999,
        inventory: 50,
        status: 0,
        rating: 5
    },
    {
        id: 2,
        name: 'Iphone XR',
        image: 'https://tudeptrai.s3-ap-southeast-1.amazonaws.com/image/xr.png',
        description: 'VN/N',
        price: 899,
        inventory: 50,
        rating: 2,
        status: 0
    },
    {
        id: 3,
        name: 'Iphone 11 Pro Max',
        image: 'https://tudeptrai.s3-ap-southeast-1.amazonaws.com/image/11.png',
        description: 'LL/A',
        price: 1099,
        inventory: 10,
        rating: 1,
        status: 0
    }
]

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    };
}

export default products;