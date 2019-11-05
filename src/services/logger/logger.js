export const logger = target => {
  return new Proxy(target, {
    apply(target, thisArg, args) {
      console.log(`Called function name: ${target.name}`);
      console.log('++++++++++');
      console.log(`Request parametres: ${args}`);

      return target(args);
    }
  });
};
