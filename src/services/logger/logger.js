export const logger = target => {
  return new Proxy(target, {
    apply(target, thisArg, args) {
      console.log('++++++++++++++++++++++++++++');
      console.log(`Request parametres: ${args}`);

      return target(args);
    }
  });
};
