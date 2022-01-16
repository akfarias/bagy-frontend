import { IMainProps } from "../../interfaces/GeneralInterfaces";
import Header from "../Header";

const PageTitle: React.FC<IMainProps> = (props) => {
    return (
        <section className="pageTitle">
            <Header title={props.title} />
            {props.children}
        </section>
    )
}

export default PageTitle;