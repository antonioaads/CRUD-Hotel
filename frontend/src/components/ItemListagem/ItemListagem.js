import React from 'react'

import { FaTrash, FaEdit, FaBed, FaRulerHorizontal} from 'react-icons/fa';

import styles from './ItemListagem.module.css'


class ItemListagem extends React.Component {
    render(){
        return (
            <div className={styles["container"]}>
                <div className={styles["header"]}>
                    <div className={styles["tipo"]}>
                        {this.props.tipo}
                    </div>
                    <div className={styles["rua"]}>
                        {this.props.rua}
                    </div>
                    <div className={styles["bairro"]}>
                        {this.props.bairro}
                    </div>
    
                    <div className={styles["informacoes"]}>
                        <div className={styles["info-detalhe"]}>
                            <div className={styles["icones"]}>
                                <FaRulerHorizontal />
                            </div>
                            <div>
                            {this.props.metrosQuadrados}
                            </div>
                        </div>
                        <div className={styles["info-detalhe"]}>
                            <div className={styles["icones"]}>
                                <FaBed />
                            </div>
                            <div>
                            {this.props.numeroQuartos}
    
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={styles["footer"]}>
                    <div className={styles["precos"]}>
                        Preco x
                    </div>
                    <div className={styles["iconesAcao"]}>
                        <div className={styles["button"]} onClick={this.acao}>
                            <FaTrash /> 
                        </div>
                        <div className={styles["button"]}>
                            <FaEdit />
                        </div>
                    </div>
    
                    
                </div>
            </div>
        );
    }

    acao = () => {
        console.log("teste2");
    }
    
}

    

export default ItemListagem;