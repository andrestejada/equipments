export interface Equipment {
  codigo: number | '';
  nombre: string;
  ubicacion: string;
}

export interface EquipmentID extends Equipment{
  id:number;
}