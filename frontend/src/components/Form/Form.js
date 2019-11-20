import React from 'react';

import { FaClosedCaptioning } from 'react-icons/fa';

import styles from './Form.module.css';

class Form extends React.Component{
    render(){
        const { acao } = this.props;

        return(
            <div className={styles["container"]}>
                <div className={styles["form"]}>
                    <div className={styles["close"]} onClick={acao && acao()}>
                        <FaClosedCaptioning/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Form;