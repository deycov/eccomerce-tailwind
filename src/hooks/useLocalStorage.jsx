const LOCAL = 'eccomerce-v1';

const useGetStorage = async () => {
  try {
    let storage;
    const data = await localStorage.getItem(LOCAL);
    if(!data)
      storage = [];
    else
      storage = await JSON.parse(data);
    
    return storage;
  } catch (err) {
    console.error(err)  
  }
}

const useSetStorage = async (data) => {
  try {
    const save = await JSON.stringify(data);
    await localStorage.setItem(LOCAL, save);  
  } catch (err) {
    console.error(err);
  }
}

export {useGetStorage, useSetStorage};