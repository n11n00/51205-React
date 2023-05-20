const itemModel = {
    id:0,
    description:"",
    price:0,
    image:"",
    category:"",
    title:"",

};



const orderModel = {
    date: "",
    id:0,
    items: [{ amount : 0 , item: itemModel }],
};


const collectionOrdersModel = {
    orders: [orderModel]
} 