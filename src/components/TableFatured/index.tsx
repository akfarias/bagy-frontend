import { TableFaturedStyle } from "./style";

const TableFatured = () => {
    return (
        <TableFaturedStyle>
            <div className="purchases-container">
                <div className="scroll">
                    <div className="header-fatured">
                        <div className="header">
                            <h2>Total de compras</h2>
                            <span className="generalValue">Valor geral: 13.250,00</span>
                            <select defaultValue="1" className="select">
                                <option value="1">Semanal</option>
                                <option value="2">Mensal</option>
                            </select>

                        </div>

                    </div>

                    <table className="tablePurchases">
                        <tbody>
                            <tr className="items">
                                <td className="store">Estilo Pri</td>
                                <td className="quantity">250 compras</td>
                                <td className="price">R$ 4238,00</td>
                            </tr>
                            <hr />
                            <tr className="items">
                                <td className="store">Vilma Calçados</td>
                                <td className="quantity">187 compras</td>
                                <td className="price">R$ 1005,00</td>
                            </tr>
                            <hr />
                            <tr className="items">
                                <td className="store">Mary Lingerie</td>
                                <td className="quantity">124 compras</td>
                                <td className="price">R$ 914,00</td>
                            </tr>
                            <hr />
                            <tr className="items">
                                <td className="store">Loja Belíssima</td>
                                <td className="quantity">89 compras</td>
                                <td className="price">R$ 281,00</td>
                            </tr>
                            <hr />

                            <tr className="items">
                                <td className="store">Estilo Pri</td>
                                <td className="quantity">250 compras</td>
                                <td className="price">R$ 4238,00</td>
                            </tr>
                            <hr />
                            <tr className="items">
                                <td className="store">Vilma Calçados</td>
                                <td className="quantity">187 compras</td>
                                <td className="price">R$ 1005,00</td>
                            </tr>
                            <hr />
                            <tr className="items">
                                <td className="store">Mary Lingerie</td>
                                <td className="quantity">124 compras</td>
                                <td className="price">R$ 914,00</td>
                            </tr>
                            <hr />
                            <tr className="items">
                                <td className="store">Loja Belíssima</td>
                                <td className="quantity">89 compras</td>
                                <td className="price">R$ 281,00</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </TableFaturedStyle>
    );
}

export default TableFatured;