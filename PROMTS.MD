1. Actúa como diseñador de bases de datos MySQL.
 
Crea la sentencia CREATE TABLE para una tabla llamada `mascota` de una clínica veterinaria.
Ya existe una tabla `dueno` con clave primaria `id` (INT).
 
Campos requeridos, en este orden:
- id: identificador entero autoincremental, clave primaria.
- id_dueno: entero, clave foránea a dueno(id).
- nombre: texto de hasta 50 caracteres.
- especie: texto de hasta 20 caracteres (perro, gato, etc.).
- raza: texto de hasta 50 caracteres.
- sexo: un único carácter ('M' o 'H').
- fecha_nacimiento: fecha.
- peso_kg: peso en kilos con 2 decimales, máximo 999,99.
- microchip: código de longitud fija de 15 caracteres.
- color: texto de hasta 30 caracteres.
- esterilizado: valor booleano.
- fecha_alta: fecha en que se registra en la clínica.
- fecha_fallecimiento: fecha, vacía si la mascota sigue viva.
- observaciones: texto libre sin límite práctico de longitud.
 
Restricciones:
- Usa exactamente esos nombres de columna (sin tildes ni ñ).
- No añadas columnas, índices ni restricciones que no se pidan.
- Devuelve solo el SQL, sin explicaciones.



2. Siguiendo estos modelos de datos 
 
CREATE TABLE dueno (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  dni                   CHAR(9),
  nombre                VARCHAR(50),
  apellidos             VARCHAR(100),
  fecha_nacimiento      DATE,
  telefono              CHAR(9),
  email                 VARCHAR(100),
  direccion             VARCHAR(150),
  localidad             VARCHAR(60),
  codigo_postal         CHAR(5),
  acepta_comunicaciones BOOLEAN,
  fecha_alta            DATE
);
 
CREATE TABLE mascota (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  id_dueno            INT,
  nombre              VARCHAR(50),
  especie             VARCHAR(20),
  raza                VARCHAR(50),
  sexo                CHAR(1),
  fecha_nacimiento    DATE,
  peso_kg             DECIMAL(5,2),
  microchip           CHAR(15),
  color               VARCHAR(30),
  esterilizado        BOOLEAN,
  fecha_alta          DATE,
  fecha_fallecimiento DATE,
  observaciones       TEXT,
  FOREIGN KEY (id_dueno) REFERENCES dueno(id)
);
 
dame 10 insert para crear dueños y 10 insert para crear mascotas
INSERT INTO dueno (dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta) VALUES
('12345678Z', 'Lucía', 'García Martínez', '1985-03-12', '612345678', 'lucia.garcia@email.com', 'Calle Mayor 12, 3ºB', 'Madrid', '28013', TRUE, '2022-01-15');
INSERT INTO dueno (dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta) VALUES
('23456789D', 'Javier', 'López Fernández', '1978-07-25', '623456789', 'javier.lopez@email.com', 'Avenida de la Constitución 45', 'Sevilla', '41001', FALSE, '2021-06-03');
INSERT INTO dueno (dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta) VALUES
('34567890V', 'Marta', 'Sánchez Ruiz', '1992-11-08', '634567890', 'marta.sanchez@email.com', 'Calle Colón 7, 1ºA', 'Valencia', '46004', TRUE, '2023-02-20');
INSERT INTO dueno (dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta) VALUES
('45678901G', 'Carlos', 'Romero Díaz', '1969-01-30', '645678901', 'carlos.romero@email.com', 'Paseo de Gracia 101', 'Barcelona', '08008', TRUE, '2020-09-11');
INSERT INTO dueno (dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta) VALUES
('56789012B', 'Ana', 'Torres Navarro', '1990-05-17', '656789012', 'ana.torres@email.com', 'Calle Larios 3, 2ºC', 'Málaga', '29005', FALSE, '2022-11-02');
INSERT INTO dueno (dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta) VALUES
('67890123B', 'Pablo', 'Jiménez Moreno', '1983-09-04', '667890123', 'pablo.jimenez@email.com', 'Gran Vía 28, 4ºD', 'Bilbao', '48001', TRUE, '2019-04-27');
INSERT INTO dueno (dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta) VALUES
('78901234X', 'Elena', 'Vázquez Gil', '1975-12-21', '678901234', 'elena.vazquez@email.com', 'Calle Real 56', 'A Coruña', '15003', TRUE, '2021-08-14');
INSERT INTO dueno (dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta) VALUES
('89012345E', 'Miguel', 'Castro Ortega', '1998-02-14', '689012345', 'miguel.castro@email.com', 'Calle Alfonso I 19, 5ºA', 'Zaragoza', '50003', FALSE, '2024-01-09');
INSERT INTO dueno (dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta) VALUES
('90123456A', 'Laura', 'Molina Herrera', '1987-06-29', '690123456', 'laura.molina@email.com', 'Calle San Fernando 8', 'Alicante', '03002', TRUE, '2023-05-30');
INSERT INTO dueno (dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta) VALUES
('11223344B', 'Sergio', 'Delgado Ramos', '1972-10-10', '611223344', 'sergio.delgado@email.com', 'Calle Uría 33, 2ºB', 'Oviedo', '33003', FALSE, '2020-03-18');

INSERT INTO mascota (id_dueno, nombre, especie, raza, sexo, fecha_nacimiento, peso_kg, microchip, color, esterilizado, fecha_alta, fecha_fallecimiento, observaciones) VALUES
(1, 'Toby', 'perro', 'Labrador Retriever', 'M', '2019-04-10', 32.50, '724098100000001', 'dorado', TRUE, '2022-01-15', NULL, 'Alergia al pollo. Dieta hipoalergénica.');
INSERT INTO mascota (id_dueno, nombre, especie, raza, sexo, fecha_nacimiento, peso_kg, microchip, color, esterilizado, fecha_alta, fecha_fallecimiento, observaciones) VALUES
(2, 'Misi', 'gato', 'Europeo común', 'H', '2018-08-22', 4.20, '724098100000002', 'atigrado', TRUE, '2021-06-03', NULL, NULL);
INSERT INTO mascota (id_dueno, nombre, especie, raza, sexo, fecha_nacimiento, peso_kg, microchip, color, esterilizado, fecha_alta, fecha_fallecimiento, observaciones) VALUES
(3, 'Luna', 'perro', 'Border Collie', 'H', '2021-02-14', 18.30, '724098100000003', 'blanco y negro', FALSE, '2023-02-20', NULL, 'Muy activa, nerviosa en consulta.');
INSERT INTO mascota (id_dueno, nombre, especie, raza, sexo, fecha_nacimiento, peso_kg, microchip, color, esterilizado, fecha_alta, fecha_fallecimiento, observaciones) VALUES
(4, 'Rocky', 'perro', 'Bulldog Francés', 'M', '2012-06-01', 12.80, '724098100000004', 'atigrado', TRUE, '2020-09-11', '2024-03-05', 'Problemas respiratorios crónicos.');
INSERT INTO mascota (id_dueno, nombre, especie, raza, sexo, fecha_nacimiento, peso_kg, microchip, color, esterilizado, fecha_alta, fecha_fallecimiento, observaciones) VALUES
(5, 'Nala', 'gato', 'Siamés', 'H', '2020-11-30', 3.60, '724098100000005', 'crema y marrón', TRUE, '2022-11-02', NULL, NULL);
INSERT INTO mascota (id_dueno, nombre, especie, raza, sexo, fecha_nacimiento, peso_kg, microchip, color, esterilizado, fecha_alta, fecha_fallecimiento, observaciones) VALUES
(6, 'Thor', 'perro', 'Pastor Alemán', 'M', '2017-03-19', 38.00, '724098100000006', 'negro y fuego', FALSE, '2019-04-27', NULL, 'Displasia de cadera leve.');
INSERT INTO mascota (id_dueno, nombre, especie, raza, sexo, fecha_nacimiento, peso_kg, microchip, color, esterilizado, fecha_alta, fecha_fallecimiento, observaciones) VALUES
(7, 'Kiwi', 'conejo', 'Belier', 'H', '2022-05-05', 1.90, '724098100000007', 'gris', FALSE, '2021-08-14', NULL, 'Revisión dental cada 6 meses.');
INSERT INTO mascota (id_dueno, nombre, especie, raza, sexo, fecha_nacimiento, peso_kg, microchip, color, esterilizado, fecha_alta, fecha_fallecimiento, observaciones) VALUES
(8, 'Simba', 'gato', 'Maine Coon', 'M', '2023-01-12', 7.40, '724098100000008', 'pardo', FALSE, '2024-01-09', NULL, NULL);
INSERT INTO mascota (id_dueno, nombre, especie, raza, sexo, fecha_nacimiento, peso_kg, microchip, color, esterilizado, fecha_alta, fecha_fallecimiento, observaciones) VALUES
(9, 'Coco', 'perro', 'Yorkshire Terrier', 'H', '2016-09-08', 3.10, '724098100000009', 'azul y fuego', TRUE, '2023-05-30', NULL, 'Toma medicación para el corazón.');
INSERT INTO mascota (id_dueno, nombre, especie, raza, sexo, fecha_nacimiento, peso_kg, microchip, color, esterilizado, fecha_alta, fecha_fallecimiento, observaciones) VALUES
(1, 'Max', 'perro', 'Beagle', 'M', '2020-12-24', 14.60, '724098100000010', 'tricolor', TRUE, '2022-01-15', NULL, NULL);

## 🩺 Gestión de Veterinarios (Tabla `veterinario`)

Módulo opcional de la API para administrar el personal veterinario de la clínica dentro de la base de datos `veterinaria`, siguiendo la misma arquitectura **Rutas ➔ Controlador ➔ Modelo**.

### 🗄️ Paso 1: Creación de la Base de Datos y Tabla en MySQL

Para poner en marcha este módulo, se ha creado la tabla `veterinario` dentro del esquema `veterinaria` con la siguiente estructura:

| Columna | Tipo de Dato | Restricciones | Descripción |
| :--- | :--- | :--- | :--- |
| `id_veterinario` | `INT` | `PRIMARY KEY`, `AUTO_INCREMENT` | Identificador único del veterinario. |
| `nombre` | `VARCHAR(50)` | `NOT NULL` | Nombre del profesional. |
| `apellidos` | `VARCHAR(100)` | `NOT NULL` | Apellidos del profesional. |
| `dni` | `VARCHAR(15)` | `NOT NULL`, `UNIQUE` | Documento Nacional de Identidad. |
| `num_colegiado` | `VARCHAR(20)` | `NOT NULL`, `UNIQUE` | Número de colegiado oficial. |
| `especialidad` | `VARCHAR(60)` | `NOT NULL` | Área médica (Cirugía, Dermatología, etc.). |
| `telefono` | `VARCHAR(15)` | `NOT NULL` | Teléfono de contacto. |
| `activo` | `TINYINT(1)` | `DEFAULT 1` | Estado en la clínica (`1` = Activo, `0` = Inactivo). |

#### Script SQL de Creación

```sql
USE veterinaria;

CREATE TABLE veterinario (
    id_veterinario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    dni VARCHAR(15) NOT NULL UNIQUE,
    num_colegiado VARCHAR(20) NOT NULL UNIQUE,
    especialidad VARCHAR(60) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    activo TINYINT(1) DEFAULT 1
);
```

#### Datos Iniciales de Prueba (`INSERT`)

```sql
INSERT INTO veterinario (nombre, apellidos, dni, num_colegiado, especialidad, telefono, activo) VALUES
('Laura', 'Martinez Ruiz', '11223344A', 'MAD-4521', 'Cirugia', '611223344', 1),
('Carlos', 'Gomez Lopez', '22334455B', 'MAD-7890', 'Dermatologia', '622334455', 1),
('Elena', 'Sanchez Gil', '33445566C', 'MAD-1122', 'Medicina General', '633445566', 1),
('Javier', 'Torres Diaz', '44556677D', 'MAD-9988', 'Traumatologia', '644556677', 0);
```

---

### 🏗️ Paso 2: Arquitectura del Módulo *(En desarrollo)*

1. **Modelo (`src/models/veterinarios.model.js`):** Consultas SQL preparadas contra la tabla `veterinario`.
2. **Controlador (`src/controllers/veterinarios.controller.js`):** Lógica de validación y respuesta en formato JSON.
3. **Rutas (`src/routes/veterinarios.routes.js`):** Endpoints bajo la ruta base `http://localhost:3000/api/veterinarios`.
