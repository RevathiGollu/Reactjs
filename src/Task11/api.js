// api.js
export const getItems = async () => {
    return [
      { id: 1, name: 'Phone', price: 699 },
      { id: 2, name: 'Laptop', price: 1299 },
      { id: 3, name: 'Tablet', price: 499 },
    ];
  };
  
  export const getItemById = async (id) => {
    const items = await getItems();
    return items.find((item) => item.id === id);
  };
  