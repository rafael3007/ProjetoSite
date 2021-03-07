import React from 'react';
import { Table } from 'reactstrap';

const Tabela = (props) => {
    return (
        <Table hover>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Ambiente</th>
                    <th>Andar</th>
                    <th>Capacidade</th>
                    <th>Quantidade</th>
                    <th>Vencimento / Recarga</th>
                    <th>Teste Hidrostático</th>
                    <th>Memorial</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>

                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Tabela;