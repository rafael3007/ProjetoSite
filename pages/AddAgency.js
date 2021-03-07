import { Button } from "reactstrap"
import InputAgency from "../components/InputAgency"
import Menu from "../components/Menu"
import styles from "../styles/pages/AddAgency.module.css"

const AddAgency = (props) => {


    return (
        <div>
            <div className={styles.AddAgencyContent}>

                <Menu />

                <InputAgency />
                <footer>
                    <div className={styles.AddAgencyFooter}>
                        <Button color="primary" className={styles.AddAgencyAdd}>Adicionar</Button>
                        <Button color="danger" className={styles.AddAgencyCancel}>Cancelar</Button>
                    </div>
                </footer>

            </div>

        </div>
    );
}

export default AddAgency;