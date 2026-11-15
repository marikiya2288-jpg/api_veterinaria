
/* Actualice para los signos raro y tildes y guarde directamente
  por eso no sale la tabala veterinario*/

USE veterinaria;

UPDATE veterinario 
SET apellidos = 'Martinez Ruiz', especialidad = 'Cirugia' 
WHERE id_veterinario = 1;

UPDATE veterinario 
SET apellidos = 'Gomez Lopez', especialidad = 'Dermatologia' 
WHERE id_veterinario = 2;

UPDATE veterinario 
SET apellidos = 'Sanchez Gil' 
WHERE id_veterinario = 3;

UPDATE veterinario 
SET apellidos = 'Torres Diaz', especialidad = 'Traumatologia' 
WHERE id_veterinario = 4;

USE veterinaria;

UPDATE veterinario 
SET nombre = 'Maria', apellidos = 'SinTildes', especialidad = 'Cardiologia'
WHERE id_veterinario = 5;
