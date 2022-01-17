import { HomeStyle } from "./style";
import { IPage } from "../../interfaces/GeneralInterfaces";
import { useEffect } from "react";
import TableProducts from "../../components/TableProducts";
import TableFatured from "../../components/TableFatured";
import Header from "../../components/Header";
import Card from "../../components/Card";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";
import CardLeft from "../../components/CardLeft";
import LineChart from "../../components/Chart";

const Home: React.FC<IPage> = props => {
    useEffect(() => {

    }, []);

    return (
        <HomeStyle>
            <div className="wrapper">
                <div className="header">
                    <Header title={"Visão geral"}></Header>
                </div>

                <div className="sidebar">
                    <MenuSidebar customClass={""} />
                </div>

                <div className="card">
                    <Card principalInfo="Total de lojas" info="7213" />
                    <Card principalInfo="Faturamento total" info="100.000,00" />
                    <Card principalInfo="Loja destaque" info="Estilo Pri" />
                    <Card principalInfo="Meta mensal" info="110.000,00" />
                </div>

                <div className="lineChart">
                    <LineChart />
                </div>

                <div className="cardLeft">
                    <div className="info-group">
                        <CardLeft principalInfo="Loja" value="Estilo Pri" customClass="select" />
                        <CardLeft principalInfo="Mês" value="Julho" customClass="select" />
                        <CardLeft principalInfo="Ano" value="2020" customClass="select" />
                        <CardLeft principalInfo="Total de faturamento" value="R$ 45.000,00" />
                        <CardLeft principalInfo="Análise comparativa" value="Positivo" customClass="positive" />
                    </div>
                </div>

                <div className="fatured">
                    <TableFatured />
                </div>

                <div className="products">
                    <TableProducts />
                </div>
            </div>
        </HomeStyle >
    );
}

export default Home;