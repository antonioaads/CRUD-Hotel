-- INSERTIONS
INSERT INTO address_districts (name)
VALUES
  ('Ouro Preto'),
  ('Bandeirantes'),
  ('Santo Antonio'),
  ('Gameleira')
;

INSERT INTO addresses (district_id, number, street)
VALUES
  (1, 100, 'Rua Logo Ali'),
  (2, 200, 'Rua Logo Aqui'),
  (3, 300, 'Rua Logo Lá'),
  (4, 500, 'Rua Logo Depois')
;

INSERT INTO property_types (type)
VALUES
  ('Casa'),
  ('Apartamento')
;

INSERT INTO properties (type_id, addresses_id, qt_rooms, qt_suites, qt_lvrooms, qt_vacancies, area, builtin_cabinet, description, rent)
VALUES
  (1, 1, 3, 2, 2, 2, 11.5, TRUE, 'Uma descricao qualquer 1', 1000.99),
  (1, 2, 3, 2, 2, 2, 12.5, TRUE, 'Uma descricao qualquer 2', 2000.99),
  (2, 3, 3, 2, 2, 2, 13.5, TRUE, 'Uma descricao qualquer 3', 3000.99),
  (2, 4, 3, 2, 2, 2, 14.5, TRUE, 'Uma descricao qualquer 4', 4000.99)
;

INSERT INTO property_extras (property_id, qt_dnrooms, floor, condo_value, lobby_24h)
VALUES
  (3, 3, 10, 1000.50, TRUE),
  (4, 4, 11, 2000.55, FALSE)
;
