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
import corticos from "../../assets/colmeias/corticos.jpg";

import manualTangencial24Quadros from "../../assets/extracao/extractor_mt_2e4.jpg";
import manualTangencial36Quadros from "../../assets/extracao/extractor_mt_3e6.jpg";
import manualRadial912Quadros from "../../assets/extracao/extractor_mr_9.jpg";
import manualRadial12Quadros from "../../assets/extracao/extractor_mr_12.jpg";
import eletricoRadial12Quadros from "../../assets/extracao/extractor_er_12.jpg";
import prensaTripe from "../../assets/extracao/prensa.jpg";
import tinaDesopercular from "../../assets/extracao/tina_desopercular.jpg";
import facaDesopercular from "../../assets/extracao/faca_desopercular.jpg";
import garfoDesopercular from "../../assets/extracao/garfo_desopercular.jpg";
import roloDesopercular from "../../assets/extracao/rolo_desopercular.jpg";
import crestadeira from "../../assets/extracao/crestadeira.jpg";

import entradas from "../../assets/utensilios/entradas.jpg";
import reguas from "../../assets/utensilios/reguas.jpg";
import alimentadores from "../../assets/utensilios/alimentadores.jpg";
import levantaQuadros from "../../assets/utensilios/levanta_quadros.jpg";
import levantaQuadrosFormao from "../../assets/utensilios/levanta_quadros_formao.jpg";
import raspador from "../../assets/utensilios/raspador_levantaquadros.jpg";
import seccaoFavo from "../../assets/utensilios/favo_mel.jpg";
import limpaRanhuras from "../../assets/utensilios/limpa_ranhuras.jpg";
import carretelArame from "../../assets/utensilios/arame.jpg";
import esticador from "../../assets/utensilios/esticador_arame.jpg";
import calderinha from "../../assets/utensilios/caldeirinha.jpg";
import calderinhaEletrica from "../../assets/utensilios/caldeirinha_e.jpg";
import esporao from "../../assets/utensilios/esporao.jpg";
import incrustador from "../../assets/utensilios/soldar.jpg";
import escova from "../../assets/utensilios/escova.jpg";
import captaPolen from "../../assets/utensilios/capta_polen.jpg";
import gradeExcluidora from "../../assets/utensilios/excluidora_arame.jpg";
import grelhaPropolis from "../../assets/utensilios/grelha_propolis.jpg";
import escapa from "../../assets/utensilios/escapa_abelhas.jpg";

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
                name: "Colmeia Reversível pintada"
            },
            {
                imageUrl: colmeiaReversivelEmalhetada,
                name: "Colmeia Reversível emalhetada"
            },
            {
                imageUrl: "",
                name: "Ninho ou alça"
            },
            {
                imageUrl: nucleoReversivelPintado,
                name: "Núcleo Reversível pintado"
            },
            {
                imageUrl: nucleoReversivelEmalhetado,
                name: "Núcleo Reversível emalhetado"
            },
            {
                imageUrl: nucleoPortaEnxames,
                name: "Núcleo porta-enxames"
            },
            {
                imageUrl: quadroNinhoAlca,
                name: "Quadro ninho ou alça (Reversível)"
            },
            {
                imageUrl: estrado,
                name: "Estrado colmeia Reversível ou Lusitana"
            },
            {
                imageUrl: estradoAntiVarroa,
                name: "Estrado colmeia Reversível ou Lusitana anti-varroa"
            },
            {
                imageUrl: prancheta,
                name: "Prancheta agasalho colmeia Reversível ou Lusitana"
            },
            {
                imageUrl: telhado,
                name: "Telhado colmeia Reversível ou Lusitana"
            },
            {
                imageUrl: colmeiaLusitanaPintada,
                name: "Colmeia Lusitana pintada"
            },
            {
                imageUrl: colmeiaLusitanaEmalhetada,
                name: "Colmeia Lusitana emalhetada"
            },
            {
                imageUrl: nucleoLusitanaPintada,
                name: "Núcleo Lusitana pintado"
            },
            {
                imageUrl: nucleoLusitanaEmalhetada,
                name: "Núcleo Lusitana emalhetado"
            },
            {
                imageUrl: quadroNinhoLusitana,
                name: "Quadro ninho Lusitana"
            },
            {
                imageUrl: quadroALcaLusitana,
                name: "Quadro alça Lusitana"
            },
            {
                imageUrl: colmeiaLangstrothPintada,
                name: "Colmeia Langstroth pintada"
            },
            {
                imageUrl: colmeiaLangstrothEmalhetada,
                name: "Colmeia Langstroth emalhetada"
            },
            {
                imageUrl: nucleoLangstrothPintada,
                name: "Núcleo Langstroth pintado"
            },
            {
                imageUrl: nucleoLangstrothEmalhetada,
                name: "Núcleo Langstroth emalhetado"
            },
            {
                imageUrl: "",
                name: "Quadro ninho ou alça Langstroth"
            },
            {
                imageUrl: "",
                name: "Quadro 1/2 alça Langstroth"
            },
            {
                imageUrl: "",
                name: "Estrado colmeia Langstroth"
            },
            {
                imageUrl: "",
                name: "Prancheta agasalho colmeia Langstroth"
            },
            {
                imageUrl: "",
                name: "	Telhado colmeia Langstroth"
            },
            {
                imageUrl: corticos,
                name: "Cortiços"
            },
        ]
    },
    {
        category: "Proteção",
        products: [
            {
                imageUrl: protecaoFatoCompleto,
                name: "Fato de apicultor com máscara redonda"
            },
            {
                imageUrl: protecaoCasaco,
                name: "Casaco de apicultor com máscara"
            },
            {
                imageUrl: protecaoLuvasCouro,
                name: "Luvas em couro"
            },
            {
                imageUrl: protecaoLuvasNapa,
                name: "Luvas em napa"
            },
            {
                imageUrl: protecaoLuvasNitrilo,
                name: "Luvas em nitrilo"
            },
            {
                imageUrl: protecaoFumigador,
                name: "Fumigador inox com proteção"
            },
        ]
    },
    {
        category: "Extração",
        products: [
            {
                imageUrl: manualTangencial24Quadros,
                name: "Extractor inox manual tangencial 2/4 quadros"
            },
            {
                imageUrl: manualTangencial36Quadros,
                name: "Extractor inox manual tangencial 3/6 quadros"
            },
            {
                imageUrl: manualRadial912Quadros,
                name: "Extractor inox manual radial 9 1/2 quadros"
            },
            {
                imageUrl: manualRadial12Quadros,
                name: "Extractor inox manual radial 12 quadros"
            },
            {
                imageUrl: eletricoRadial12Quadros,
                name: "Extractor inox elétrico radial 12 quadros"
            },
            {
                imageUrl: prensaTripe,
                name: "Prensa inox com tripé"
            },
            {
                imageUrl: tinaDesopercular,
                name: "Tina de desopercular inox 1000x510x395mm"
            },
            {
                imageUrl: facaDesopercular,
                name: "Faca desopercular inox com serrilha"
            },
            {
                imageUrl: garfoDesopercular,
                name: "Garfo desopercular"
            },
            {
                imageUrl: roloDesopercular,
                name: "Rolo desopercular"
            },
            {
                imageUrl: crestadeira,
                name: "Crestadeira"
            },
        ]
    },
    {
        category: "Utensílios",
        products: [
            {
                imageUrl: entradas,
                name: "Entradas verão / inverno"
            },
            {
                imageUrl: reguas,
                name: "Réguas de espaçamento de quadros"
            },
            {
                imageUrl: alimentadores,
                name: "Alimentadores diversos"
            },
            {
                imageUrl: levantaQuadros,
                name: "Levanta quadros inox"
            },
            {
                imageUrl: levantaQuadrosFormao,
                name: "Levanta quadros inox com formão"
            },
            {
                imageUrl: raspador,
                name: "Raspador levanta quadros inox"
            },
            {
                imageUrl: seccaoFavo,
                name: "Secção favo de mel"
            },
            {
                imageUrl: limpaRanhuras,
                name: "Limpa ranhuras de quadros inox"
            },
            {
                imageUrl: carretelArame,
                name: "Carretel de arame"
            },
            {
                imageUrl: esticador,
                name: "Esticador de arame"
            },
            {
                imageUrl: calderinha,
                name: "Caldeirinha para derreter cera"
            },
            {
                imageUrl: calderinhaEletrica,
                name: "Caldeirinha eléctrica"
            },
            {
                imageUrl: esporao,
                name: "Esporão manual de soldar cera"
            },
            {
                imageUrl: incrustador,
                name: "Inscrustrador eléctrico de soldar cera"
            },
            {
                imageUrl: escova,
                name: "Escova abelhas pvc"
            },
            {
                imageUrl: captaPolen,
                name: "Capta pólen de plástico"
            },
            {
                imageUrl: gradeExcluidora,
                name: "Grade excluidora de arame"
            },
            {
                imageUrl: grelhaPropolis,
                name: "Grelha para própolis"
            },
            {
                imageUrl: escapa,
                name: "Escapa abelhas"
            },
            {
                imageUrl: "",
                name: "Armadilha para vespas"
            },
        ]
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