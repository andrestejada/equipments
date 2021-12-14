import { CardContainer } from '../../../../shared/components/CardContainer/index';
import { CardEquipos } from './CardEquipos/index';
import { CardList } from '../../../../shared/components/CardList/CardList';
import { Equipment } from '../../models/Equipments';
import React from 'react';
import { Typography } from 'app/shared/components/Typography';

export const ConsultarEquipos = () => {
    const equipments:Equipment[] = [
        {codigo:123,nombre:'bascula',ubicacion:'fabrica'},
        {codigo:456,nombre:'centrifuga',ubicacion:'laboratorio'},
        {codigo:789,nombre:'motor',ubicacion:'almacen'},
    ];
    return (
        <>
            <Typography 
                tag='h2' 
                styles={{textAlign:'center'}} 
            >Consulta tus Equipos</Typography>
            <CardContainer>
                <CardList>
                    {
                        equipments.map((equip)=>(
                            <CardEquipos
                                key={equip.codigo}
                                {...equip}
                            />
                        ))
                    }
                </CardList>
            </CardContainer>

        </>
    );
};
