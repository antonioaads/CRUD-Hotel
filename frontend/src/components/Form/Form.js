import React from 'react';

import { FaClosedCaptioning } from 'react-icons/fa';

import styles from './Form.module.css';

class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            checkIn: '',
            checkOut: ''
        };

        this.handleChangeCheckIn = this.handleChangeCheckIn.bind(this);
        this.handleChangeCheckOut = this.handleChangeCheckOut.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeCheckIn(event) {
        this.setState({checkIn: event.target.value});
    }

    handleChangeCheckOut(event) {
        this.setState({checkOut: event.target.value});
    }
    
    handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        const { acao } = this.props;

        return(
            <div className={styles["container"]}>
                <div className={styles["form"]}>
                    <div className={styles["close"]} onClick={acao && acao()}>
                        <FaClosedCaptioning/>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            CheckIn:
                            <input type="date" value={this.state.checkIn} onChange={this.handleChange} />
                        </label>
                        <label>
                            CheckOut:
                            <input type="date" value={this.state.checkOut} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Enviar" />
                    </form>

                </div>
            </div>
        )
    }
}

export default Form;