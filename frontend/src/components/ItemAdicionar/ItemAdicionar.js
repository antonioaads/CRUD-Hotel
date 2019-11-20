import React from 'react'

import { FaPlus } from 'react-icons/fa';

import styles from './ItemAdicionar.module.css'

class ItemAdicionar extends React.Component{
    render(){
        return (
            <div className={styles["container"]} onClick={this.props.acao()}>
                <div className={styles["icone"]}>
                    <FaPlus height="20"/>    
                </div>
            </div>  
        );
    }
}

export default ItemAdicionar