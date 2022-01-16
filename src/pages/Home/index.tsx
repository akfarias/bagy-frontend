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
//import TableFatured from "../../components/TableFatured";
// import Logo from "../../components/Logo";

const Home: React.FC<IPage> = props => {
    useEffect(() => {

    }, [])

    return (
        <HomeStyle>
            <Header title={"Visão geral"}></Header>
            {/* <MenuSidebar customClass={""} /> */}

            <LineChart />

            {/* <div className="info-group">
                <CardLeft select="teste" principalInfo="Loja" value="Estilo Pri" customClass="select" />
                <CardLeft principalInfo="Mês" value="Julho" customClass="select" />
                <CardLeft principalInfo="Ano" value="2020" customClass="select" />
                <CardLeft principalInfo="Total de faturamento" value="R$ 45.000,00" />
                <CardLeft principalInfo="Análise comparativa" value="Positivo" customClass="positive" />
            </div> */}

            {/* <div className="container-row">
                <div className="row">
                    <Card principalInfo="Total de lojas" info="7213" />
                    <Card principalInfo="Faturamento total" info="100.000,00" />
                    <Card principalInfo="Loja destaque" info="Estilo Pri" />
                    <Card principalInfo="Meta mensal" info="110.000,00" />
                </div>
            </div> */}

            {/* <div className="container-row">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <TableFatured />
                    </div>
                    <div className="col-12 col-lg-6">
                        <TableProducts />
                    </div>
                </div>
            </div> */}

        </HomeStyle >
    )
}

export default Home;