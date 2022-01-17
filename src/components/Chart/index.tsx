import Chart from 'react-apexcharts';
import { ChartStyle } from './style';
import React from 'react';
export default class LineChart extends React.Component<{}, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            options: {
                chart: {
                    id: "line-chart"
                },
                colors: ['#DFE0EB', '#FC3C8D'],
                xaxis: {
                    enable: false
                },
                legend: {
                    show: false
                },
                stroke: {
                    curve: 'smooth'
                },
                dataLabels: {
                    enabled: false
                },
                dropShadow: {
                    enabled: false
                }
            },
            series: [
                {
                    name: "Mês passado",
                    data: [30, 20, 35, 15, 40, 30, 35]
                }, {
                    name: "Este mês",
                    data: [15, 30, 50, 18, 32, 50, 40]
                }
            ]
        }
    };

    render() {
        return (
            <ChartStyle>
                <div className="chart">
                    <h2>Total de faturamento mensal</h2>
                    <div>
                        <span className="month">JULHO 2020</span>
                        <div className="legend">
                            <span className="thisMonthLegend">Este mês</span>
                            <span className="lastMonthLegend">Mês passado</span>
                        </div>
                    </div>
                    <div className="chart">
                        <Chart options={this.state.options} series={this.state.series} type="area" height={570} width={850} />
                    </div>
                </div>
            </ChartStyle>
        );
    }
}