import { BuscadorContainer, Container, ContainerSearchIcon } from './styles';
import React, { useState } from 'react';
import { Button } from 'app/shared/components/Button';
import { FaSearch } from 'react-icons/fa';
import { Input } from '../../../../shared/components/Input/index';
import { SpanError } from '../../../Producto/components/FormCrearProducto/styles';
import { useError } from '../../hook/useError';

interface Props{
  getEquipmentBySearch:(termino:string)=>void;
}
export const BuscadorEquipos = ({getEquipmentBySearch}:Props) => {
  const [value, setValue] = useState('');
  const {error,msg,setError} = useError();
  const searchEquipment = () => {
    if (value.trim() === '') {
      setError({
        msg: 'Debe escribir un campo de busqueda',
        error: true,
      });
      return;
    }
    getEquipmentBySearch(value);
    setError({msg:'',error:false});
    setValue('');
  };

  return (
    <Container>
      <BuscadorContainer>
        <Input
          value={value}
          name="search"
          type="search"
          placeholder="Buscar Equipo"
          onChange={(e) => setValue(e.target.value)}
        />
        <ContainerSearchIcon>
          <Button type="button" onClick={searchEquipment}>
            <FaSearch />
          </Button>
        </ContainerSearchIcon>
      </BuscadorContainer>
      {
        error &&
        <SpanError>{msg}</SpanError>
      }
    </Container>
  );
};
