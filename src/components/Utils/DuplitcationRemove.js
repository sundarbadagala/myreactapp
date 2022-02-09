function Duplication({ value }) {
  return Array.from(new Set(value)).map((item) => item);
}

export default Duplication;
