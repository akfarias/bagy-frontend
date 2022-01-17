import { TableProductsStyle } from "./style";

const TableProducts = () => {
    return (
        <TableProductsStyle>
            <div className="products-container">
                <div className="scroll">
                    <table className="tableProducts">
                        <thead>
                            <tr>
                                <th className="tableTitle">Produto</th>
                                <th className="tableTitle">Loja</th>
                                <th className="tableTitle">Preço</th>
                                <th className="tableTitle">Data</th>
                            </tr>

                        </thead>
                        <tbody className="tableComponents">
                            <tr>
                                <td className="product">Brincos #23</td>
                                <td className="store">Estilo Pri</td>
                                <td className="blue">R$ 29,90</td>
                                <td className="yellow">17/07/20</td>
                            </tr>
                            <hr />
                            <tr>
                                <td className="product">Sandália #54</td>
                                <td className="store">Vilma Calçados</td>
                                <td className="blue">R$ 89,90</td>
                                <td className="yellow">17/07/20</td>
                            </tr>
                            <hr />
                            <tr>
                                <td className="product">Conjunto #95</td>
                                <td className="store">Mary Lingerie</td>
                                <td className="blue">R$ 49,90</td>
                                <td className="yellow">17/07/20</td>
                            </tr>
                            <hr />
                            <tr>
                                <td className="product">Body #77</td>
                                <td className="store">Loja Belíssima</td>
                                <td className="blue">R$ 19,90</td>
                                <td className="yellow">17/07/20</td>
                            </tr>
                            <hr />
                            <tr>
                                <td className="product">Brincos #23</td>
                                <td className="store">Estilo Pri</td>
                                <td className="blue">R$ 29,90</td>
                                <td className="yellow">17/07/20</td>
                            </tr>
                            <hr />
                            <tr>
                                <td className="product">Sandália #54</td>
                                <td className="store">Vilma Calçados</td>
                                <td className="blue">R$ 89,90</td>
                                <td className="yellow">17/07/20</td>
                            </tr>
                            <hr />
                            <tr>
                                <td className="product">Conjunto #95</td>
                                <td className="store">Mary Lingerie</td>
                                <td className="blue">R$ 49,90</td>
                                <td className="yellow">17/07/20</td>
                            </tr>
                            <hr />
                            <tr>
                                <td className="product">Body #77</td>
                                <td className="store">Loja Belíssima</td>
                                <td className="blue">R$ 19,90</td>
                                <td className="yellow">17/07/20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TableProductsStyle>
    );
}

export default TableProducts;