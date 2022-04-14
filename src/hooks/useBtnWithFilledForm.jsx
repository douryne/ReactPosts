import {useMemo} from 'react';

export const useBtnWithFilledForm = (form) => {
  const isFormFilled = useMemo(() => {
    return Object.values(form).every(inputVal => inputVal !== '')
  }, [form])

  return isFormFilled;
}