import protecaoFatoCompleto from "../../assets/protecao/fato_completo.jpg";
import protecaoCasaco from "../../assets/protecao/casaco.jpg";
import protecaoLuvasCouro from "../../assets/protecao/luvas_couro.jpg";
import protecaoLuvasNapa from "../../assets/protecao/luvas_napa.jpg";
import protecaoLuvasNitrilo from "../../assets/protecao/luvas_nitrilo.jpg";
import protecaoFumigador from "../../assets/protecao/fumigador_protecao.jpg";

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
        products: [
            {
                imageUrl: protecaoFatoCompleto,
                name: "Fato de Apicultor com Máscara Redonda"
            },
            {
                imageUrl: protecaoCasaco,
                name: "Casaco de Apicultor com Máscara"
            },
            {
                imageUrl: protecaoLuvasCouro,
                name: "Luvas em Couro"
            },
            {
                imageUrl: protecaoLuvasNapa,
                name: "Luvas em Napa"
            },
            {
                imageUrl: protecaoLuvasNitrilo,
                name: "Luvas em Nitrilo"
            },
            {
                imageUrl: protecaoFumigador,
                name: "Fumigador Inox com Proteção"
            },
        ]
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