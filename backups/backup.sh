#!/bin/bash

# Variables
USER=fixmanager
DB=fixmanager
PASS='FixM@nag3R2025*#'
BACKUP_DIR=/backup

# Exportar contraseña para pg_dump
export PGPASSWORD=$PASS

# Fecha para nombre del archivo
DATE=$(date +'%Y-%m-%d_%H-%M-%S')
FILENAME=fixmanager_backup_$DATE.dump

# Ejecutar backup
pg_dump -U $USER -d $DB -F c -b -v -f $BACKUP_DIR/$FILENAME

# Limpiar variable sensible
unset PGPASSWORD