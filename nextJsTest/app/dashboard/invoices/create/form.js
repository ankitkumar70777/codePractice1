"use client";
import { useFormState } from "react-dom";
import { createSource } from "../../lib/fetchData";

const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createSource, initialState);
  console.log("state", state);

  return (
    <form action={dispatch}>
      <input type='text' name='title' required />
      <input type='text' name='body' required />
      <input type='number' name='userId' required />

      <button type='submit' name='submit'>
        submit
      </button>

      <div id='customer-error' aria-live='polite' aria-atomic='true'>
        {state.errors?.title &&
          state.errors.title.map((error) => (
            <p className='mt-2 text-sm text-red-500' key={error}>
              {error}
            </p>
          ))}

        {state.errors?.body &&
          state.errors.body.map((error) => (
            <p className='mt-2 text-sm text-red-500' key={error}>
              {error}
            </p>
          ))}

        {state.errors?.userId &&
          state.errors.userId.map((error) => (
            <p className='mt-2 text-sm text-red-500' key={error}>
              {error}
            </p>
          ))}
      </div>
    </form>
  );
};

export default Form;
