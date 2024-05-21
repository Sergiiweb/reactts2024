import {FC} from "react";
import {IProduct} from "../../interfaces/productInterface";

import style from "./Product.module.css";

interface IProps {
    product: IProduct;
}

const Product: FC<IProps> = ({product}) => {
    const {title, brand, category, description, price, images} = product;
    return (
        <div className={style.Product}>
            <h1>{title}</h1>
            <div>brand: {brand}</div>
            <div>category: {category}</div>
            <div>description: {description}</div>
            <div>price: {price}$</div>
            <div className={style.imgDiv}>
                {images.map((image, index) => <div key={index}><img src={image} alt={title}/></div>)}
            </div>
        </div>
    );
};

export {Product};
