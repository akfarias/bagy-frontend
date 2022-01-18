import { InforCardProps } from "../../interfaces/GeneralInterfaces";
import { CardLeftStyle } from "./style";

const CardLeft: React.FC<InforCardProps> = (props) => {
    return (
        <CardLeftStyle>
            <div className="analysis">
                <span className="principalInfo">{props.principalInfo}</span>
                <br />
                <span className={`value ${props.customClass}`}>{props.value}</span>
            </div>
        </CardLeftStyle>
    );
}

export default CardLeft;