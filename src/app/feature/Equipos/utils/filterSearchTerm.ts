import { EquipmentID } from '../models/Equipments';
export const filterSearchTerm = (arr:EquipmentID[],term:string) => {

  const regEx = new RegExp(term,'i');
  const filter = arr.filter((p) => {
    const values = Object.values(p)
      .map((v) => regEx.test(String(v)))
      .includes(true);
    if (!values) {
      return;
    }
    return p;
  });

  return filter;
};
