import { EquipmentID } from '../models/Equipments';
export const paginateTermSearch = (page: number, equipments: EquipmentID[]) => {
  const rangePage = 3;
  const pageEquipments = equipments.slice(
    (page - 1) * rangePage,
    (page - 1) * rangePage + rangePage
  );
  return pageEquipments;
};
