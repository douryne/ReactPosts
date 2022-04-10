import {useMemo} from 'react';

export const useInputs = (form) => {
  let areAllFilled = true;
  const areInputsEmpty = useMemo(() => {
    Object.values(form).forEach(inputVal => {
      if(!inputVal) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        areAllFilled = false;
      }
    })
    return areAllFilled
  }, [form])

  return areInputsEmpty;
}