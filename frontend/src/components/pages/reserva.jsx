import React from 'react';
import Axios from 'axios';

import ItemListagem from '../ItemListagem';
import ItemAdicionar from '../ItemAdicionar';
import Form from '../Form';

class Reserva extends React.Component {

  state = {
    formAberto: true,
    quartos: [],
    checkin: null,
    checkout: null
  }

  render(){
    {this.state.quartos && console.log(this.state.quartos)}
    return (
      <React.Fragment>
        {this.state.quartos &&  this.state.quartos.map(quarto => (
          <ItemListagem 
            key={quarto.id}
            tipo={quarto.nom_tipo}
            pessoas={quarto.max_ocupantes}
            camasCasal={quarto.num_camas_casal} 
            camasSolteiro={quarto.num_camas_solteiro} 
            numero={quarto.id}
            preco={quarto.preco}
            precoFormatado= "R$ 1000,00"
            acao={(quarto_id, prc_pago) => this.onClickQuarto(quarto_id, prc_pago)}
          />
        ))}

        <ItemAdicionar acao={() => this.onClickPlus()}/>

        {this.state.formAberto && <Form acao={(checkIn, checkOut) => this.onClickClose(checkIn, checkOut)}/>}
      </React.Fragment>
    );
  }

  onClickPlus = () => {

    this.setState({
      formAberto: true
    })
  }

  onClickClose = (checkin, checkout) => {

    let quartos = null;

    Axios.get(`http://localhost:3676/hotels/rooms?idhotel=1&checkin=${checkin}&checkout=${checkout}`).then((response) => {
      quartos = response.data;
      this.setState({
        formAberto: false,
        quartos, 
        checkin,
        checkout
      });
    }); 
  }

  onClickQuarto = (quarto_id, prc_pago) => {
    const { checkin, checkout } = this.state;
    
    Axios.post("http://localhost:3676/room-reservations", { quarto_id, prc_pago, checkin, checkout}).then((response) => {
      alert("Reserva feita com sucesso no quarto: " + quarto_id);
    });

    this.setState({
      formAberto: true,
    });
  }
}

export default Reserva;
