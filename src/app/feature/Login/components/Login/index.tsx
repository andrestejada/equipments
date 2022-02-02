import * as Yup from 'yup';
import { FormikHelpers, useFormik } from 'formik';
import { Button } from 'app/shared/components/Button';
import { Form } from 'app/shared/components/Form';
import { Input } from 'app/shared/components/Input';
import { Label } from '../../../../shared/components/Label/index';
import { LoginContainer } from './style';
import React from 'react';
import { SpanError } from 'app/feature/Producto/components/FormCrearProducto/styles';

interface FormValues {
  username: string;
  password: string;
}

export const Login = () => {
  const initialValues: FormValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .email('Debe ser un email valido')
      .required('Este campo es requerido'),
    password: Yup.string().required('El password es Obligatorio'),
  });

  const onSubmit = (values: FormValues,{resetForm}: FormikHelpers<FormValues>) => {
    console.log(values);
    resetForm();
  };
  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
      <LoginContainer>
        <Form onSubmit={handleSubmit}>
          <h2>Inicio de sesión </h2>
          <hr />
          <Label>Usuario</Label>
          <Input
            type="email"
            placeholder="correo@correo.com"
            {...getFieldProps('username')}
          />
          {touched.username && errors.username ? (
            <SpanError>{errors.username}</SpanError>
          ) : null}
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="******"
            {...getFieldProps('password')}
          />
          {touched.password && errors.password ? (
            <SpanError>{errors.password}</SpanError>
          ) : null}
          <Button type="submit">Iniciar sesión</Button>
        </Form>
      </LoginContainer>
    </>
  );
};
