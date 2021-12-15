import * as Yup from 'yup';
import { Button } from '../../../../shared/components/Button/index';
import { Equipment } from '../../models/Equipments';
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
    addNewEquipment:(equip:Equipment)=> void
}

export const FormCrearEquipos = ({addNewEquipment}:PropsFormEquipos) => {


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
        addNewEquipment(values);
        resetForm();
    };
    const {handleSubmit,values,handleChange,touched,errors,handleBlur} = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });    
    return (
        <div>
            <Typography
                tag='h2'
                styles={{textAlign:'center'}}
            >Empieza Creando Un Equipo</Typography>
           
            <Form
                role='form'
                onSubmit={handleSubmit}
            >
                <Typography
                    tag='h3'
                >Ingresa los datos</Typography>
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
                >Ingresar</Button>
            </Form>
        </div>
    );
};
