import Header from "../../components/Header";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";
import { ProductsStyle } from "./products";

const Products = () => {
    return (
        <ProductsStyle>
            <div className="wrapper">
                <div className="header">
                    <Header title={"Produtos"} />
                </div>

                <div className="sidebar">
                    <MenuSidebar customClass={""} />
                </div>
            </div>
        </ProductsStyle>
    )
}

export default Products;