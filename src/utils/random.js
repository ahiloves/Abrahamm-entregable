
    const getRandomElement = (elements) => {
      // logica necesaria pura para devolver un elemento aleatorio de ese arreglo
      // suponinendo elemntos con diez elementos 
      // 0------> 0.999999 * 10 => 0---> 9.99999  nunca es uno  
      const indexRandom = Math.floor(Math.random() * elements.length);
      return elements[indexRandom];
    };
    export {getRandomElement};