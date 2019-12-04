import React from 'react'
import Axios from 'axios'
import Moment from 'moment'

import ItemListagem from '../ItemListagem';
import ItemReservas from '../ItemReservas';
import ItemAdicionar from '../ItemAdicionar';
import Form from '../Form';
import Header from '../Header';

import styles from './hotel.css';

class Hotel extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      formAberto: false,
      quartos: [],
      reservas: [],
      checkin: null,
      checkout: null,
      page: 'booked',
      selectedReservationId: null
    }

    this.updateReservas()
  }

  onPageChange = (newPage) => {
    switch (newPage) {
      case 'booked':
        this.updateReservas()
        break
      case 'reservation':
        this.updateQuartos()
        break
      default:
    }
  }

  render(){
    {this.state.quartos && console.log(this.state.quartos)}
    return (
      <div className="Hotel">
        <Header title="RESERVAS" onPageChange={this.onPageChange}/>
        { this.state.page === 'reservation' &&
          <div className="Hotel-List">
            {this.state.quartos && this.state.quartos.map(quarto => (
              <ItemListagem 
                key={quarto.id}
                nomeHotel={quarto.hotel.nome}
                tipo={quarto.nom_tipo}
                pessoas={quarto.max_ocupantes}
                camasCasal={quarto.num_camas_casal} 
                camasSolteiro={quarto.num_camas_solteiro} 
                numero={quarto.id}
                preco={quarto.preco}
                precoFormatado= "R$ 1000,00"
                onReservationClick={this.onClickQuarto}
              />
            ))}

            <ItemAdicionar acao={() => this.onClickPlus()}/>
          </div>
        }
        { this.state.page === 'booked' &&
          <div className="Hotel-List">
            {this.state.reservas && this.state.reservas.map(reserva => {
              console.log(Moment(reserva.dat_inicio_estadia).format('DD/MM/YYYY'))
              return (
              <ItemReservas
                key={reserva.id}
                id={reserva.id}
                quarto={reserva.quarto_id}
                checkin={Moment(reserva.dat_inicio_estadia).format('DD/MM/YYYY')}
                checkout={Moment(reserva.dat_inicio_estadia).add(reserva.qtd_noites, 'days').format('DD/MM/YYYY')}
                preco={reserva.prc_pago}
                onUpdateClick={this.onClickPlus}
                onDeleteClick={this.onReservationDelete}
              />
              )
            })}

          </div>
        }
        {this.state.formAberto && <Form acao={(checkIn, checkOut) => this.onClickClose(checkIn, checkOut)}/>}
      </div>
    )
  }

  onClickPlus = (id) => {
    this.setState({
      formAberto: true,
      selectedReservationId: id
    })
  }

  onClickClose = (checkin, checkout) => {
    switch (this.state.page) {
      case 'booked':
        this.setState({ checkin, checkout }, () => (
          this.state.selectedReservationId &&
            Axios.put(`http://localhost:3676/room-reservations/${this.state.selectedReservationId}`, { dat_inicio_estadia: checkin, qtd_noites: Math.abs(Moment(checkin).diff(checkout, 'days')) })
              .then(res => this.updateReservas())
        ))
        break
      case 'reservation':
        this.updateQuartos(checkin, checkout)
        break
    }
  }

  onReservationDelete = (id) => {
    Axios.delete(`http://localhost:3676/room-reservations/${id}`).then(() => this.updateReservas())
  }

  onClickQuarto = (quarto_id, prc_pago) => {
    const { checkin, checkout } = this.state;
    
    Axios.post("http://localhost:3676/room-reservations", { quarto_id, prc_pago, checkin, checkout}).then((response) => {
      alert("Reserva feita com sucesso no quarto: " + quarto_id);
    })
    
    this.updateQuartos()
  }

  updateQuartos = (checkin, checkout) => {
    Axios.get(`http://localhost:3676/hotels/rooms?idhotel=1${checkin && checkout ? `&checkin=${checkin}` : ''}${checkin && checkout ? `&checkout=${checkout}` : ''}`).then((response) => {
      const quartos = response.data;
      this.setState({
        page: 'reservation',
        formAberto: false,
        quartos,
        reservas: [],
        checkin,
        checkout
      })
    })
  }

  updateReservas = () => {
    Axios.get(`http://localhost:3676/room-reservations`).then((response) => {
      const reservas = response.data;
      this.setState({
        page: 'booked',
        formAberto: false,
        quartos: [],
        reservas
      })
    })
  }
}

export default Hotel;
