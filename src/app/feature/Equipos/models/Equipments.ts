export interface Equipment {
  codigo: number | '';
  nombre: string;
  ubicacion: string;
  fecha:string | Date;
}

export interface EquipmentID extends Equipment{
  id:number;
}