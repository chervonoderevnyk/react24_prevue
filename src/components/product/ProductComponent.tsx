import IProduct from "../../model/IProduct";
import React, {FC, ReactNode} from "react";

type ProductComponentWithChildren<T> = T & {children?: ReactNode};

const ProductComponent:FC<ProductComponentWithChildren<IProduct>> = ({id, title,  description, price}) => {
    return (
        <div> {id} - {title} - {description} - {price}</div>
    );
};

export default ProductComponent;