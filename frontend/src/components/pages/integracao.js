import React from 'react';

import styles from './integracao.module.scss';

class Integracao extends React.Component {

  render(){
    return (
      <div className={styles["container"]}>
          <div className={styles["content-reserva"]}>
            <a href="http://localhost:3000/reservations">
              <div className={styles["background"]}>
                <div className={styles["title"]}>
                  Reservas
                </div>
              </div>
            </a>
          </div>
          <div className={styles["content-localizacao"]}>
            <a href="http://localhost:4000">
              <div className={styles["background"]}>
                <div className={styles["title"]}>
                  Localização
                </div>
              </div>

            </a>
          </div>
          <div className={styles["content-hoteis"]}>
            <a href="http://localhost:2000">
              <div className={styles["background"]}>
                <div className={styles["title"]}>
                  Hoteis
                </div>
              </div>
            </a>
          </div>
      </div>
    );
  }
}

export default Integracao;
