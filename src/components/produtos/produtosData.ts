import protecaoFatoCompleto from "../../assets/protecao/fato_completo.jpg";
import protecaoCasaco from "../../assets/protecao/casaco.jpg";
import protecaoLuvasCouro from "../../assets/protecao/luvas_couro.jpg";
import protecaoLuvasNapa from "../../assets/protecao/luvas_napa.jpg";
import protecaoLuvasNitrilo from "../../assets/protecao/luvas_nitrilo.jpg";
import protecaoFumigador from "../../assets/protecao/fumigador_protecao.jpg";

import colmeiaReversivelPintada from "../../assets/colmeias/reversivel_P.jpg";
import colmeiaReversivelEmalhetada from "../../assets/colmeias/reversivel_E.jpg";
import nucleoReversivelPintado from "../../assets/colmeias/nucleo_revers_P.jpg";
import nucleoReversivelEmalhetado from "../../assets/colmeias/nucleo_revers_E.jpg";
import nucleoPortaEnxames from "../../assets/colmeias/nucleo_porta_enxames.jpg";
import quadroNinhoAlca from "../../assets/colmeias/q_reversivel.jpg";
import estrado from "../../assets/colmeias/estrado.jpg";
import estradoAntiVarroa from "../../assets/colmeias/estrados_anti_varroa.jpg";
import prancheta from "../../assets/colmeias/prancheta.jpg";
import telhado from "../../assets/colmeias/telhado.jpg";
import colmeiaLusitanaPintada from "../../assets/colmeias/lusitana_P.jpg";
import colmeiaLusitanaEmalhetada from "../../assets/colmeias/lusitana_E.jpg";
import nucleoLusitanaPintada from "../../assets/colmeias/nucleo_lus_P.jpg";
import nucleoLusitanaEmalhetada from "../../assets/colmeias/nucleo_lus_E.jpg";
import quadroNinhoLusitana from "../../assets/colmeias/q_lusitana.jpg";
import quadroALcaLusitana from "../../assets/colmeias/m_quadro.jpg";
import colmeiaLangstrothPintada from "../../assets/colmeias/langstroth_P.jpg";
import colmeiaLangstrothEmalhetada from "../../assets/colmeias/langstroth_E.jpg";
import nucleoLangstrothPintada from "../../assets/colmeias/nucleo_lang_P.jpg";
import nucleoLangstrothEmalhetada from "../../assets/colmeias/nucleo_lang_E.jpg";

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
        products: [
            {
                imageUrl: colmeiaReversivelPintada,
                name: "Colmeia Reversível Pintada"
            },
            {
                imageUrl: colmeiaReversivelEmalhetada,
                name: "Colmeia Reversível Emalhetada"
            },
            {
                imageUrl: "",
                name: "Ninho ou Alça"
            },
            {
                imageUrl: nucleoReversivelPintado,
                name: "Núcleo Reversível Pintado"
            },
            {
                imageUrl: nucleoReversivelEmalhetado,
                name: "Núcleo Reversível Emalhetado"
            },
            {
                imageUrl: nucleoPortaEnxames,
                name: "Núcleo Porta-Enxames"
            },
            {
                imageUrl: quadroNinhoAlca,
                name: "Quadro Ninho ou Alça (Reversível)"
            },
            {
                imageUrl: estrado,
                name: "Estrado Colmeia Reversível ou Lusitana"
            },
            {
                imageUrl: estradoAntiVarroa,
                name: "Estrado Colmeia Reversível ou Lusitana Anti-Varroa"
            },
            {
                imageUrl: prancheta,
                name: "Prancheta Agasalho Colmeia Reversível ou Lusitana"
            },
            {
                imageUrl: telhado,
                name: "Telhado Colmeia Reversível ou Lusitana"
            },
            {
                imageUrl: colmeiaLusitanaPintada,
                name: "Colmeia Lusitana Pintada"
            },
            {
                imageUrl: colmeiaLusitanaEmalhetada,
                name: "Colmeia Lusitana Emalhetada"
            },
            {
                imageUrl: nucleoLusitanaPintada,
                name: "Núcleo Lusitana Pintado"
            },
            {
                imageUrl: nucleoLusitanaEmalhetada,
                name: "Núcleo Lusitana Emalhetado"
            },
            {
                imageUrl: quadroNinhoLusitana,
                name: "Quadro Ninho Lusitana"
            },
            {
                imageUrl: quadroALcaLusitana,
                name: "Quadro Alça Lusitana"
            },
            {
                imageUrl: colmeiaLangstrothPintada,
                name: "Colmeia Langstroth Pintada"
            },
            {
                imageUrl: colmeiaLangstrothEmalhetada,
                name: "Colmeia Langstroth Emalhetada"
            },
            {
                imageUrl: nucleoLangstrothPintada,
                name: "Núcleo Langstroth Pintado"
            },
            {
                imageUrl: nucleoLangstrothEmalhetada,
                name: "Núcleo Langstroth Emalhetado"
            },
        ]
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