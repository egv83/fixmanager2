-- ✅ Cambiar la contraseña del usuario por defecto
ALTER USER postgres WITH PASSWORD 'P@sswordM@ster2025*#';

-- ✅ Crear un nuevo usuario para la app
CREATE USER fixmanager WITH ENCRYPTED PASSWORD 'FixM@nag3R2025*#';

-- ✅ Crear base de datos y asignarla al usuario
CREATE DATABASE fixmanager OWNER fixmanager;

-- ✅ Darle permisos al usuario fixmanager
GRANT ALL PRIVILEGES ON DATABASE fixmanager TO fixmanager;