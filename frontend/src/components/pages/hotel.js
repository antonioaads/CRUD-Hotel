import React from 'react';
import Axios from 'axios';

import ItemListagem from '../ItemListagem';
import ItemAdicionar from '../ItemAdicionar';
import Form from '../Form';

class Hotel extends React.Component {

  state = {
    formAberto: true,
    quartos: [],
    checkin: null,
    checkout: null
  }

  render(){
    {this.state.quartos && console.log(this.state.quartos)}
    return (
      <div className="App">
        <header className="App-header">
          {this.state.quartos &&  this.state.quartos.map(quarto => {
            console.log(quarto);

            return(
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
            )

          })}

          <ItemAdicionar acao={() => this.onClickPlus()}/>

          {this.state.formAberto && <Form acao={(checkIn, checkOut) => this.onClickClose(checkIn, checkOut)}/>}

          
        </header>
      </div>
    );
  }

  onClickPlus = () => {

    this.setState({
      formAberto: true
    })
  }

  onClickClose = (checkin, checkout) => {
    console.log("checkIn:" + checkin);
    console.log("checkOut:" + checkout);

    let quartos = null;

    Axios.get(`http://172.16.126.49:3677/hotels/rooms?idhotel=1&checkin=${checkin}&checkout=${checkout}`).then((response) => {
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
    
    Axios.post("http://172.16.126.49:3677/room-reservations", { quarto_id, prc_pago, checkin, checkout}).then((response) => {
      alert("Reserva feita com sucesso no quarto: " + quarto_id);
    });

    this.setState({
      formAberto: true,
    });
  }
}

export default Hotel;
