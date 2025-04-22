function HashMap() {
  const capacity = 16;
  const loadFactor = 0.75;
  let size = 0;
  const buckets = new Array(capacity).fill(null).map(() => []);

  return {
    getCapacity: () => capacity,
    getLoadFactor: () => loadFactor,
    getSize: () => size,
    // Agregar métodos.
  };
}
