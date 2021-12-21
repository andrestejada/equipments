import * as Yup from 'yup';
import { Equipment, EquipmentID } from '../../models/Equipments';
import { Button } from '../../../../shared/components/Button/index';
import { Form } from '../../../../shared/components/Form/index';
import { FormControl } from '../../../../shared/components/FormControl/index';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/shared/components/Input';
import { Label } from '../../../../shared/components/Label/index';
import React from 'react';
import { Select } from '../../../../shared/components/Select/index';
import { SpanError } from '../../../Producto/components/FormCrearProducto/styles';
import { Typography } from '../../../../shared/components/Typography/index';
import { useFormik  } from 'formik';


interface FormValues {
    codigo: number | '';
    nombre: string;
    ubicacion: string;
}

interface PropsFormEquipos{
    addNewEquipment:(equip:Equipment)=> void;
    editEquipment:(equipment:EquipmentID)=>void;
    equipmentSelected:EquipmentID[];
}

export const FormCrearEquipos = ({addNewEquipment,equipmentSelected,editEquipment}:PropsFormEquipos) => {
    const IsEditing = equipmentSelected.length ? true : false ;
    const editValues:FormValues = {
        codigo: equipmentSelected[0]?.codigo ,
        nombre: equipmentSelected[0]?.nombre,
        ubicacion:equipmentSelected[0]?.ubicacion
    };
    const initialValues:FormValues={
        codigo:'',
        nombre:'',
        ubicacion:'',
    };

    const validationSchema= Yup.object().shape<FormValues>({
        codigo: Yup.number().required('El codigo es requerido'),
        nombre: Yup.string().required('El nombre es requerido').max(10,'No debe ser mas de 10 caracteres'),
        ubicacion: Yup.string().required('La ubicacion es requerida'),        
    });
    
    const onSubmit=(values:FormValues,{resetForm}:FormikHelpers<FormValues>)=>{
        if(IsEditing){
            editEquipment({...values,id:equipmentSelected[0].id});
        }else{
            addNewEquipment(values);
        }
        resetForm();
    };
    const {handleSubmit,values,handleChange,touched,errors,handleBlur} = useFormik({
        initialValues: IsEditing ? editValues : initialValues ,
        onSubmit,
        validationSchema,
        enableReinitialize:true
    });
    
    return (
        <div>
            <Typography
                tag='h2'
                styles={{textAlign:'center'}}
            >{IsEditing ? 'Edita el equipo seleccionado': 'Empieza Creando Un Equipo'}</Typography>
           
            <Form
                role='form'
                onSubmit={handleSubmit}
            >
                <Typography
                    tag='h3'
                >{IsEditing ? 'Edita los datos': 'Ingresar los datos'}</Typography>
                <hr/>
                <FormControl>
                    <Label>Codigo</Label>
                    <Input
                        type='number'
                        name='codigo'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.codigo}
                        placeholder='Ingresa un codigo'
                    />
                </FormControl>
                {errors.codigo && touched.codigo && <SpanError>{errors.codigo}</SpanError> }
                <FormControl>
                    <Label>Nombre Equipo</Label>
                    <Input
                        type='text'
                        name='nombre'
                        onChange={handleChange}
                        placeholder='Ingresa un nombre para el equipo'
                        value={values.nombre}
                    />
                </FormControl>
                {errors.nombre && touched.nombre && <SpanError>{errors.nombre}</SpanError> }
                <FormControl>
                    <Label>Ubicacion</Label>
                    <Select
                        role='ubicacion'
                        name='ubicacion'
                        onChange={handleChange}
                        value={values.ubicacion}
                    >
                        <option hidden value=''>
                            Selecciona una ubicación
                        </option>
                        <option
                            value='laboratorio'
                        >
                            Laboratorio
                        </option>
                        <option
                            value='fabrica'
                        >
                            Fabrica
                        </option>
                        <option
                            value='almacen'
                        >
                            Almacen
                        </option>
                    </Select>
                </FormControl>
                {errors.ubicacion && touched.ubicacion && <SpanError>{errors.ubicacion}</SpanError> }
                <Button
                    type='submit'
                    role='button'
                >{ IsEditing ? 'Editar' : 'Ingresar'}</Button>
            </Form>
        </div>
    );
};
