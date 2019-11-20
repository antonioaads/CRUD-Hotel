import React from 'react';

import styles from './Form.module.css';

class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            checkIn: '',
            checkOut: '',
            acao: props.acao
        };
    }

    handleChangeCheckIn = (event) => {
        this.setState({checkIn: event.target.value});
    }

    handleChangeCheckOut = (event) => {
        this.setState({checkOut: event.target.value});
    }
    
    handleSubmit = (event) => {
        const { acao, checkIn, checkOut } = this.state;
        acao(checkIn, checkOut);
        event.preventDefault();
    }

    render(){
 
        return(
            <div className={styles["container"]}>
                <div className={styles["form"]}>
                    <div className={styles["title"]}> Escolha uma data</div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <span className={styles["check"]}>CheckIn:</span>
                            <input type="date" value={this.state.checkIn} onChange={this.handleChangeCheckIn} />
                        </label>
                        <label>
                            <span className={styles["check"]}>CheckOut:</span>
                            <input type="date" value={this.state.checkOut} onChange={this.handleChangeCheckOut} />
                        </label>
                        <input className={styles["button"]} type="submit" value="Ver Quartos" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;