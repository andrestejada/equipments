import { CardContainer } from '../../../../shared/components/CardContainer/index';
import { CardEquipos } from './CardEquipos/index';
import { CardList } from '../../../../shared/components/CardList/CardList';
import { EquipmentID } from '../../models/Equipments';
import { Paginador } from '../PaginadorEquipos';
import React from 'react';
import { SinEquipos } from '../SinEquipos/index';
import { Typography } from 'app/shared/components/Typography';

interface Props {
  deleteEquipment: (id: number) => void;
  selectEquipment: (id: number) => void;
  getAllEquipments: (page?: number) => void;
  totalCount: number;
  allEquipments: EquipmentID[];
}
export const ConsultarEquipos = ({
  allEquipments,
  deleteEquipment,
  selectEquipment,
  totalCount,
  getAllEquipments,
}: Props) => {
  return (
    <>
      <Typography tag="h2" styles={{ textAlign: 'center' }}>
        Consulta tus Equipos
      </Typography>
      <CardContainer>
        <CardList>
          {allEquipments.length ? (
            <>
              {allEquipments.map((equip) => (
                <CardEquipos
                  key={equip.codigo}
                  deleteEquipment={deleteEquipment}
                  selectEquipment={selectEquipment}
                  {...equip}
                />
              ))}
              <Paginador
                totalCount={totalCount}
                getAllEquipments={getAllEquipments}
              />
            </>
          ) : (
            <SinEquipos />
          )}
        </CardList>
      </CardContainer>
    </>
  );
};
