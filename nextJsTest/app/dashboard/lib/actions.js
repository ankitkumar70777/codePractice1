'use server';

export const handleFormSubmitFn = async (formData) => {
    "use server";

    const name = formData.get('name');
    const age = formData.get('age');

    console.log('name,age', { name, age });
    
  };