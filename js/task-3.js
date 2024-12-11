class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }
  padStart(str) {
    return (this.#value = str + this.#value);
  }
  padEnd(str) {
    return (this.#value += str);
  }

  padBoth(str) {
    const newStr = str.concat(this.#value);
    this.#value = newStr.concat(str);
  }

  /* 
  Ще одна більш ізящна версія, але придумав не сам,- а ChatGPT :)
  
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  } */
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
