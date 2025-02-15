import { useState } from "react";

import BreadcrumbNav from "../ui/BreadcrumbNav";
import { productsData } from "./produtosData";

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
        </>
    )
}

export default Produtos;