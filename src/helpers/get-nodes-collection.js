export const getNodesCollection = (createNodeFunction, arrayOfData) =>
  arrayOfData.map(data => createNodeFunction(data));
