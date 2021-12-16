import { CardBox, CardContent, CardSecction,CardTitle  } from './styled';
import { Button } from 'app/shared/components/Button';
import React from 'react';

interface CardProps{
    codigo: number | '';
    nombre: string;
    ubicacion: string;
    id:number;
}
export const CardEquipos = ({codigo,nombre,ubicacion}:CardProps) => {
    return (
        <>
        <CardBox>
            <CardSecction>
                <CardTitle>Codigo:</CardTitle>
                <CardContent>{codigo}</CardContent>
            </CardSecction>
            <CardSecction>
                <CardTitle>Nombre:</CardTitle>
                <CardContent>{nombre}</CardContent>
            </CardSecction>
            <CardSecction>
                <CardTitle>Ubicación:</CardTitle>
                <CardContent>{ubicacion}</CardContent>
            </CardSecction>
            <CardSecction>
                <Button>Eliminar</Button>
            </CardSecction>
        </CardBox>
            
        </>
    );
};
