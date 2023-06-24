CREATE TABLE reservas (
  usuario_reserva INT,
  id_reserva SERIAL PRIMARY KEY,
  fecha_reserva TIMESTAMP NOT NULL
);