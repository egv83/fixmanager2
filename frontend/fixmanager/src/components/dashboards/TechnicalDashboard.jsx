import {useState} from "react";
import {Tag} from "primereact/tag";
import {Button} from "primereact/button";
import {InputNumber} from "primereact/inputnumber";
import {InputTextarea} from "primereact/inputtextarea";

import TicketCard from "../tecnico/TicketCard.jsx";

const TechnicalDashboard = () => {

    // estado para saber el ticket seleccionado
    const [selectedTicket, setselectedTicket] = useState(null);

    return (
        <div className="grid p-3">
            {/* Título de la pantalla */}
            <div className="col-12">
                <h2 className="m-0">Technician Dashboard</h2>
                <p className="text-secondary">Manage your assigned tickets...</p>
            </div>

            {/* Columna Izquierda: Lista de Tickets (3 de 12 columnas) */}
            <div className="col-12 md:col-4 lg:col-3">
                <div className="surface-card p-3 border-round shadow-1">
                    <h3 className="text-sm uppercase text-500 mb-3">My Assigned Tickets</h3>
                    {/* Aquí mapearías tus tickets */}
                    <TicketCard id="#2024-001" title="Computer won't start" priority="high" status="in-progress" />
                    <TicketCard id="#2024-005" title="Monitor flickering" priority="low" status="open" selected />
                </div>
            </div>

            {/* Columna Derecha: Detalle y Work Log (9 de 12 columnas) */}
            <div className="col-12 md:col-8 lg:col-9">
                <div className="surface-card p-4 border-round shadow-1">
                    {/* Header del Ticket */}
                    <div className="flex justify-content-between align-items-start mb-4">
                        <div>
                            <div className="flex align-items-center gap-2 mb-2">
                                <span className="text-xl font-bold">#2024-005</span>
                                <Tag className="col-3" value="open" severity="info" />
                                <Tag className="col-3" value="low priority" severity="success" />
                            </div>
                            <h2 className="mt-0">Monitor flickering and display issues</h2>
                        </div>
                        <Tag value="Assigned" severity="success" className="p-2" />
                    </div>

                    {/* Sección Work Log (PrimeReact InputTextarea) */}
                    <div className="p-fluid mt-5">
                        <label className="font-bold block mb-2">Work Log</label>
                        <div className="surface-100 p-3 border-round">
                            <span className="text-500 mb-2 block">Add Work Entry</span>
                            <InputTextarea rows={4} autoResize placeholder="Describe the work performed..." className="mb-3" />
                            <div className="flex align-items-center gap-3">
                                <div className="flex-grow-1">
                                    <InputNumber value={2} suffix=" hours" showButtons />
                                </div>
                                <Button label="Add Entry" icon="pi pi-plus" className="w-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default TechnicalDashboard;