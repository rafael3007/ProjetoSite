import styles from "../styles/components/InputAgency.module.css";
import { InputGroup, InputGroupText, Input, Button } from 'reactstrap';


const InputAgency = (props) => {

    return (
        <div className={styles.InputAgencyContainer}>
            <div className={styles.InputAgencyUniorg}>
                <InputGroup>
                    <InputGroupText>UNIORG</InputGroupText>
                    <Input placeholder="Uniorg" />
                    <Button color="primary">Buscar</Button>
                </InputGroup>
            </div>
            <div className={styles.InputAgencyName}>
                <InputGroup>
                    <InputGroupText>Nome Da Agência</InputGroupText>
                    <Input placeholder="Nome Da Agência" />
                </InputGroup>
            </div>
            <div className={styles.InputAgencyAdress}>
                <InputGroup>
                    <InputGroupText>Endereço</InputGroupText>
                    <Input placeholder="Endereço" />
                </InputGroup>
            </div>
            <div className={styles.InputAgencyCity}>
                <InputGroup>
                    <InputGroupText>Cidade</InputGroupText>
                    <Input placeholder="Cidade" />
                </InputGroup>
            </div>


        </div>
    );
}

export default InputAgency;