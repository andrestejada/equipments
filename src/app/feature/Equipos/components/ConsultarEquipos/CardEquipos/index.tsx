import { BtnSecction, CardBox, CardContent, CardSecction,CardTitle  } from './styled';
import { Button } from 'app/shared/components/Button';
import React from 'react';

interface CardProps{
    codigo: number | '';
    nombre: string;
    ubicacion: string;
    id:number;
    deleteEquipment:(id:number)=>void;
    selectEquipment:(id: number)=>void;

}
export const CardEquipos = ({codigo,nombre,ubicacion,deleteEquipment,id,selectEquipment}:CardProps) => {
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
            
                <BtnSecction>
                    <Button
                        role='button'
                        onClick={()=>deleteEquipment(id)}
                    >Eliminar</Button>
                    <Button
                        role='edit'
                        onClick={()=>selectEquipment(id)}
                    >Editar</Button>
                </BtnSecction>
                
            
        </CardBox>
            
        </>
    );
};
