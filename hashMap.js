function HashMap() {
  let capacity = 16;
  const loadFactor = 0.75;
  let size = 0;
  const buckets = new Array(capacity).fill(null).map(() => []);

  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  function set(key, value) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const pair = bucket[i];
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    size++;
  }

  function get(key) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const pair = bucket[i];
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return null; // Si no se encuentra la clave
  }

  function has(key) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }

    return false;
  }

  function remove(key) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1); // Eliminar el par
        size--;
        return true;
      }
    }

    return false; // Si no se encuentra la clave
  }

  function length() {
    return size;
  }

  function clear() {
    buckets = new Array(capacity).fill(null).map(() => []);
    size = 0;
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
  };
}
