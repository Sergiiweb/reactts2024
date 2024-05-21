import {FC, useEffect, useState} from "react";

import {IProduct} from "../../interfaces/productInterface";
import {Product} from "./Product";

const Products: FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(({products}) => setProducts(products));
    }, []);

    return (
        <div>
            {
                products.map(product => <Product key={product.id} product={product}/>)
            }
        </div>
    );
};

export {Products};
