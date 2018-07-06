// helper function to update state and avoid mutations!

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export default updateObject;
