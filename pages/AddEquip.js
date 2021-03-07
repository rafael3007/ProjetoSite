import Menu from "../components/Menu"
import styles from "../styles/pages/AddEquip.module.css"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Tabela from "../components/Tabela";

const AddEquip = (props) => {


    return (
        <div>
            <Menu />
            <div className={styles.AddEquipContainerForm}>
                <Form inlist>
                    <div>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="me-sm-2">Tipo</Label>
                            <Input type="text" />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="me-sm-2">Ambiente</Label>
                            <Input type="text" />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="me-sm-2">Andar</Label>
                            <Input type="text" />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="me-sm-2">Capacidade</Label>
                            <Input type="text" />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="me-sm-2">Quantidade</Label>
                            <Input type="text" />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="me-sm-2">Vencimento/Recarga</Label>
                            <Input type="text" />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="me-sm-2">Teste Hidrostático</Label>
                            <Input type="text" />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="me-sm-2">Memorial</Label>
                            <Input type="text" />
                        </FormGroup>
                    </div>

                </Form>
                <br />
                <footer className={styles.AddEquipFooter}>
                    <div className={styles.AddEquipDivAdd}>
                        <Button color="primary" className={styles.AddEquipAdd} href="/" >Adicionar</Button>
                    </div>

                    <div className={styles.AddEquipDivCancel}>
                        <Button color="danger" className={styles.AddEquipCancel} href="/" >Cancelar</Button>
                    </div>
                </footer>


            </div>


        </div>
    );
}

export default AddEquip;