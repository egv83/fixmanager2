-- Usuarios con roles básicos
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(150),
    role VARCHAR(20) CHECK (role IN ('TECHNICIAN', 'SECRETARY', 'ADMIN')) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: clients
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    cc_ruc VARCHAR(12),
    phone VARCHAR(20)
);

-- Equipos de cliente
CREATE TABLE devices (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES clients(id),
    device_type_id INT REFERENCES device_types(id),
    brand VARCHAR(100),
    model VARCHAR(100),
    serial_number VARCHAR(100)
);

-- Tipos de dispositivos (Laptop, PC, etc.)
CREATE TABLE device_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

-- Estados simplificados
CREATE TABLE statuses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,  -- Ej: INGRESADO, EN_REVISIÓN, EN_REPARACIÓN, FINALIZADO
    is_final BOOLEAN DEFAULT FALSE,
    order_index INT
);

-- Tabla: service_types
CREATE TABLE service_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    base_price DECIMAL(10, 2)
);

-- Tabla: parts
CREATE TABLE parts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    stock INT,
    warranty_months INT
);

-- Orden de servicio básica
CREATE TABLE service_orders (
    id SERIAL PRIMARY KEY,
    client_id INT REFERENCES clients(id),
    device_id INT REFERENCES devices(id),
    secretary_id INT REFERENCES users(id),
    technician_id INT REFERENCES users(id),
    status_id INT REFERENCES statuses(id),
    service_type VARCHAR(20) CHECK (service_type IN ('MANTENIMIENTO', 'REPARACION', 'GARANTIA')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: service_order_parts
CREATE TABLE service_order_parts (
    id SERIAL PRIMARY KEY,
    service_order_id INT REFERENCES service_orders(id),
    part_id INT REFERENCES parts(id),
    quantity INT,
    installed_at TIMESTAMP,
    warranty_expires_at TIMESTAMP
);

-- Tabla: service_tasks
CREATE TABLE service_tasks (
    id SERIAL PRIMARY KEY,
    service_order_id INT REFERENCES service_orders(id),
    name VARCHAR(100),
    description TEXT, -- Aquí se detalla diagnóstico y solución
    duration_minutes INT,
    start_date DATE,
    end_date DATE,
    price DECIMAL(10, 2)
);

-- Historial de cambio de estados (sin UI complejo, solo registro)
CREATE TABLE service_order_status_history (
    id SERIAL PRIMARY KEY,
    service_order_id INT REFERENCES service_orders(id),
    status_id INT REFERENCES statuses(id),
    changed_by INT REFERENCES users(id),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Imágenes asociadas a tareas
CREATE TABLE task_images (
    id SERIAL PRIMARY KEY,
    service_task_id INT REFERENCES service_tasks(id),
    file_name TEXT NOT NULL,
    file_path TEXT NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    comment TEXT
);