import { CardContainer } from '../../../../shared/components/CardContainer/index';
import { CardEquipos } from './CardEquipos/index';
import { CardList } from '../../../../shared/components/CardList/CardList';
import { EquipmentID } from '../../models/Equipments';
import React from 'react';
import { SinEquipos } from '../SinEquipos/index';
import { Typography } from 'app/shared/components/Typography';

interface Props{
    allEquipments:EquipmentID[];
    deleteEquipment:(id:number)=>void;
    selectEquipment:(id: number)=>void;

}
export const ConsultarEquipos = ({allEquipments,deleteEquipment,selectEquipment}:Props) => {
    
    return (
        <>
            <Typography 
                tag='h2' 
                styles={{textAlign:'center'}} 
            >Consulta tus Equipos</Typography>
            <CardContainer>
                <CardList>
                    {
                        allEquipments.length
                        ?
                        allEquipments.map((equip)=>(
                            <CardEquipos
                                key={equip.codigo}
                                deleteEquipment={deleteEquipment}
                                selectEquipment={selectEquipment}
                                {...equip}
                            />
                        ))
                        :<SinEquipos/>
                    }
                </CardList>
            </CardContainer>

        </>
    );
};
