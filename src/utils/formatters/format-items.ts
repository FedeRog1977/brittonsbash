export const formatItems = (columns: number, items: unknown[]) => {
  const formattedItems = [];

  for (let index = 0; index < items.length; index += columns) {
    const chunk = items.slice(index, index + columns);

    formattedItems.push(chunk);
  }

  // console.log('Unformatted Items:\n\n', items)
  // console.log('Formatted Items:\n\n', formattedItems)
  return formattedItems;
};
