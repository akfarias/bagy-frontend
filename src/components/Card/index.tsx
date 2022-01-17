import { InforCardProps } from "../../interfaces/GeneralInterfaces";
import { CardStyle } from "./style";

const Card: React.FC<InforCardProps> = (props) => {
    return (
        <CardStyle>
            <div className="card">
                <div className="allInfo">
                    <span className="principalInfo">{props.principalInfo}</span>
                    <br />
                    <span className="info">{props.info}</span>
                </div>
            </div>
        </CardStyle>
    );
}

export default Card;