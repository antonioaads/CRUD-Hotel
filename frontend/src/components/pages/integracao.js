import React from 'react';

import styles from './integracao.module.scss';

class Integracao extends React.Component {

  render(){
    return (
      <div className={styles["container"]}>
          <div className={styles["content-hotel"]}>
            <div className={styles["title"]}>
              Reserva
            </div>
          </div>
          <div className={styles["content-localizacao"]}>
            <div className={styles["title"]}>
              Localização
            </div>
          </div>
          <div className={styles["content-passagem"]}>
            <div className={styles["title"]}>
              Hoteis
            </div>
          </div>
      </div>
    );
  }
}

export default Integracao;
