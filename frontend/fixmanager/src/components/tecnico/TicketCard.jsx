import React from 'react';


const TicketCard = ({id,title,priority,status,customer,selected,onClick}) => {

//     ASIGNAR COLOR SEGUN LA PRIORIDAD
    const getPriorityColor = (priority) => {
        if(['high','alta','urgente'].includes(priority.toLowerCase())){
            return 'danger';
        }

        if(['medium','media','medio'].includes(priority.toLowerCase())){
            return 'warning';
        }

        if(['low','baja','bajo'].includes(priority.toLowerCase())){
            return 'success';
        }
        return 'info';
    }

};

export default TicketCard;