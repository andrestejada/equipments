import { useEffect, useState } from 'react';
interface Values {
  msg: string;
  error: boolean;
}
export const useError = () => {
  const initialvalues: Values = {
    msg: '',
    error: false,
  };
  const [{ msg, error }, setError] = useState(initialvalues);

  useEffect(() => {
      if(error){
          setTimeout(() => {
              setError(initialvalues);
          }, 5000);
      }
  }, [error,setError]);
  return {
      msg,
      error,
      setError
  };
};
