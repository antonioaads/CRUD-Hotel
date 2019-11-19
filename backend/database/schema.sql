-- RESET / DROPS

DROP TABLE IF EXISTS reserva_quarto;
DROP TABLE IF EXISTS quarto;
DROP TABLE IF EXISTS preco_por_temporada;
DROP TABLE IF EXISTS tipo_quarto;
DROP TABLE IF EXISTS hotel;

-- TABLES

CREATE TABLE hotel (
  id SERIAL,

  nome VARCHAR(50),

  PRIMARY KEY (id)
);


CREATE TABLE tipo_quarto (
  id SERIAL,

  nom_tipo VARCHAR(50),
  max_ocupantes INTEGER,
  banheiro_compartilhado BOOLEAN,

  PRIMARY KEY (id)
);

CREATE TABLE quarto (
  id SERIAL,

  hotel_id INTEGER REFERENCES hotel(id) ON DELETE CASCADE NOT NULL,
  tipo_quarto_id INTEGER REFERENCES tipo_quarto(id) ON DELETE RESTRICT NOT NULL,

  num_camas_solteiro INTEGER,
  num_camas_casal INTEGER,
  num_quarto INTEGER,

  PRIMARY KEY (id)
);

CREATE TABLE preco_por_temporada (
  id SERIAL,

  tipo_quarto_id INTEGER REFERENCES tipo_quarto(id) ON DELETE CASCADE NOT NULL,

  preco FLOAT,
  dat_inicio_temporada DATE,
  dat_fim_temporada DATE,

  PRIMARY KEY (id)
);

CREATE TABLE reserva_quarto (
  id SERIAL,

  quarto_id INTEGER REFERENCES quarto(id) ON DELETE RESTRICT NOT NULL,
  
  prc_pago FLOAT,
  dat_inicio_estadia DATE,
  qtd_noites INTEGER,

  PRIMARY KEY (id)
);
