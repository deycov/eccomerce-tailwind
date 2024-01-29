const useFetchProducts = async (API_URL, setItems) => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok)
      throw new Error(
        `## ERROOOR ## hubo un problema del tipo HTTP, ${response.status}`
      );
    const data = await response.json();
    setItems(data);
  } catch (err) {
    console.error(
      `## ERROOOR ## La pagina no pudo cargar los datos por -> ${err}`
    );
  }
};

const useFetchCategories = async (setItems, API_URL, API_CATEGORY) => {
  try {
    const response = await fetch(`${API_URL}${API_CATEGORY}`);
    if (!response.ok)
      throw new Error(
        `## ERROOOR ## hubo un problema del tipo HTTP, ${response. status}`
      );
    const data = await response.json();
    setItems(data);
  } catch (err) {
    console.error(
      `## ERROOOR ## La pagina no pudo cargar los datos por -> ${err}`
    );
  }
};

const useFetchClothes = async (setItems, API_URL, API_WOMENS, API_MENS) => {
  try {
    const res1 = await fetch(`${API_URL}${API_WOMENS}`);
    if (!res1.ok)
      throw new Error(
        `## ERROOOR ## hubo un problema del tipo HTTP, ${res1.status}`
      );
    const women = await res1.json();
    const res2 = await fetch(`${API_URL}${API_MENS}`);
    if (!res2.ok)
      throw new Error(
        `## ERROOOR ## hubo un problema del tipo HTTP, ${res2.status}`
      );
    const men = await res2.json();
    const arr = [...women,...men]
    setItems(arr);

  } catch (err) {
    console.error(
      `## ERROOOR ## La pagina no pudo cargar los datos por -> ${err}`
    );
  }
};

export {useFetchProducts, useFetchCategories, useFetchClothes};
