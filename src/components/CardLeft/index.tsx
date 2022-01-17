import { InforCardProps } from "../../interfaces/GeneralInterfaces";
import { CardLeftSide } from "./style";

const CardLeft: React.FC<InforCardProps> = (props) => {
    return (
        <CardLeftSide>
            <div className="analysis">
                <span className="principalInfo">{props.principalInfo}</span>
                <br />
                <span className={`value ${props.customClass}`}>{props.value}</span>
            </div>
        </CardLeftSide>
    );
}

export default CardLeft;