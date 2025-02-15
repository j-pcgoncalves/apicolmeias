import { useState } from "react";

import BreadcrumbNav from "../ui/BreadcrumbNav";
import { productsData } from "./produtosData";
import { Grid, GridItem } from "@chakra-ui/react";

const Produtos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleIndexChange = (newIndex: number) => {
        setCurrentIndex(newIndex);
    }

    return (
        <>
            <BreadcrumbNav title="Produtos" />

            <div className="flex gap-3 flex-wrap justify-center mb-20 px-5">
                {productsData.map((products, index) => (
                    <p 
                        className={`category-btn ${currentIndex === index ? "category-active" : ""}`} 
                        key={`category-${index}`}
                        onClick={() => handleIndexChange(index)}
                    >
                        {products.category}
                    </p>
                ))}
            </div>

            <Grid 
                templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }} 
                gap={10}
                className="px-[20px] sm:px-[70px] mb-20"
            >
                {productsData[currentIndex].products.map((product, index) => (
                    <GridItem key={`product-${index}`}>
                        <img className="w-full h-[400px] object-cover rounded-t-[5px]" src={product.imageUrl} alt={product.name} />

                        <div className="product-name-container">
                            <p>{product.name}</p>
                        </div>
                    </GridItem>
                ))}
            </Grid>
        </>
    )
}

export default Produtos;