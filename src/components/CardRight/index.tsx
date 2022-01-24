import { InforCardProps } from "../../interfaces/GeneralInterfaces";
import { CardRightStyle } from "./style";

const CardLeft: React.FC<InforCardProps> = (props) => {
    return (
        <CardRightStyle>
            <div className="analysis">
                <span className="principalInfo">{props.principalInfo}</span>
                <br />
                <span className={`value ${props.customClass}`}>{props.value}</span>
            </div>
        </CardRightStyle>
    );
}

export default CardLeft;