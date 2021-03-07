import Menu from "../components/Menu"
import styles from "../styles/pages/RemoveEquip.module.css"
import Conteudo from "../components/Conteudo";
import { InputGroup, InputGroupText, Input, Button } from 'reactstrap';

const RemoveEquip = (props) => {


    return (
        <div>
            <Menu />
            <div className={styles.RemoveEquipContainer}>
                <Conteudo />

            </div>
            <footer className={styles.RemoveEquipFooter}>
                <div className={styles.RemoveEquipIndice}>
                    <InputGroup>
                        <InputGroupText className={styles.RemoveEquipIndiceText}>Digite o Numero da linha que deseja excluir</InputGroupText>
                        <Input className={styles.RemoveEquipInputIndice} placeholder="Indice" />
                    </InputGroup>
                </div>
                <div className={styles.RemoveEquipButtons}>
                    <Button color="warning" className={styles.RemoveEquipRemove} href="/" >Remover</Button>
                    <Button color="danger" className={styles.RemoveEquipCancel} href="/" >Cancelar</Button>
                </div>


            </footer>


        </div>
    );
}

export default RemoveEquip;