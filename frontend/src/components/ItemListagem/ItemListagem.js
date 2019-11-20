import React from 'react'

import { FaBed, FaPersonBooth, FaCheck} from 'react-icons/fa';

import styles from './ItemListagem.module.css'


class ItemListagem extends React.Component {
    handleClick = (event) => {
        const { acao, numero, preco} = this.props;
        acao(numero, preco);
        event.preventDefault();
    }

    render(){
        return (
            <div className={styles["container"]}>
                <div className={styles["header"]}>
                    
                    <div className={styles["rua"]}>
                        {this.props.tipo} {this.props.numero}
                    </div>
    
                    <div className={styles["informacoes"]}>
                        <div className={styles["info-detalhe"]}>
                            <div className={styles["icones"]}>
                                <FaPersonBooth/>
                            </div>
                            <div>
                                {this.props.pessoas}
                            </div>
                        </div>
                        <div className={styles["info-detalhe"]}>
                            <div className={styles["icones"]}>
                                <FaBed />
                            </div>
                            <div>
                                <b>C:</b>{this.props.camasCasal}
                            </div>
                        </div>
                        <div className={styles["info-detalhe"]}>
                            <div className={styles["icones"]}>
                                <FaBed />
                            </div>
                            <div>
                                <b>S:</b>{this.props.camasSolteiro}
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={styles["footer"]}>
                    <div className={styles["precos"]}>
                        Preço: {this.props.precoFormatado}
                    </div>
                    <div className={styles["iconesAcao"]}>
                        
                        <div className={styles["button"]} onClick={this.handleClick}>
                            <FaCheck />
                        </div>
                    </div>    
                </div>
            </div>
        );
    }   
}

export default ItemListagem;