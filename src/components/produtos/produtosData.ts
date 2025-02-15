type ProductInfo = {
    imageUrl: string;
    name: string;
}

type ProductsModel = {
    category: string;
    products: ProductInfo[];
}

export const productsData: ProductsModel[] = [
    {
        category: "Colmeias",
        products: []
    },
    {
        category: "Proteção",
        products: []
    },
    {
        category: "Extração",
        products: []
    },
    {
        category: "Utensílios",
        products: []
    },
    {
        category: "Diversos",
        products: []
    },
    {
        category: "Cosmética",
        products: []
    },
];