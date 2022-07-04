export const ADDStuff = 'ADDStuff';
export const EditStuff = 'EditStuff';

export const addStuff = ({ quantity, stuff, people, location, adress, time }) => ({
  type: ADDStuff,
  payload: {
    quantity,
    stuff,
    people,
    location,
    adress,
    time,
  }
});

export const editStuff = ({ quantity, stuff, people, location, organization, adress, time }) => ({
  type: EditStuff,
  payload: {
    quantity,
    stuff,
    people,
    location,
    organization,
    adress,
    time,
  }
});
