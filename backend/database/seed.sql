-- INSERTIONS
INSERT INTO hotel (nome)
VALUES
  ('Laplace'),
  ('Checksum'),
  ('Santo Totônio'),
  ('Astaroth')
;

INSERT INTO tipo_quarto (nom_tipo, max_ocupantes, banheiro_compartilhado)
VALUES
  ('Deluxe', 8, FALSE),
  ('Medium', 4, TRUE),
  ('Low Tier', 2, TRUE)
;

INSERT INTO quarto (hotel_id, tipo_quarto_id, num_camas_solteiro, num_camas_casal, num_quarto)
VALUES
  (1, 1, 4, 2, 0),
  (1, 2, 2, 1, 10),
  (1, 2, 2, 1, 20),
  (1, 3, 2, 0, 30)
;

INSERT INTO preco_por_temporada (tipo_quarto_id, preco, dat_inicio_temporada, dat_fim_temporada)
VALUES
  (1, 1000, NOW(), NOW() + INTERVAL '1' YEAR),
  (2, 500, NOW(), NOW() + INTERVAL '1' YEAR),
  (3, 100, NOW(), NOW() + INTERVAL '1' YEAR)
;

INSERT INTO reserva_quarto (quarto_id, prc_pago, dat_inicio_estadia, qtd_noites)
VALUES
  (1, 1000, NOW(), 100)
;
