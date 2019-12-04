import React from 'react'
import Moment from 'moment'

import { FaEdit, FaTrash} from 'react-icons/fa'

import styles from './ItemReservas.module.css'


class ItemReservas extends React.Component {
    handleUpdate = (event) => {
      const { onUpdateClick, id } = this.props
      onUpdateClick(id)
      event.preventDefault()
    }

    handleDelete = (event) => {
      const { onDeleteClick, id } = this.props
      onDeleteClick(id)
      event.preventDefault()
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
                        <b>{'CHECKIN: '}</b>
                        <div>
                            {this.props.checkin}
                        </div>
                      </div>
                      <div className={styles["info-detalhe"]}>
                        <b>{'CHECKOUT: '}</b>
                        <div>
                          {this.props.checkout}
                        </div>
                      </div>
                  </div>
                </div>
                <div className={styles["footer"]}>
                  <div className={styles["precos"]}>
                    Preço: R${(this.props.preco).toLocaleString('pt-BR')}
                  </div>
                  <div className={styles["iconesAcao"]}>
                    <div className={styles["button"]} onClick={this.handleUpdate}>
                      <FaEdit />
                    </div>
                  </div>
                  <div className={styles["iconesAcao"]}>
                    <div className={styles["button"]} onClick={this.handleDelete}>
                      <FaTrash />
                    </div>
                  </div>
                </div>
            </div>
        )
    }   
}

export default ItemReservas
