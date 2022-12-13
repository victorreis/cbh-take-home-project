const { deterministicPartitionKey } = require("./dpk");

console.log(deterministicPartitionKey());
console.log(deterministicPartitionKey({}));
console.log(deterministicPartitionKey([]));
console.log(deterministicPartitionKey(new Object()));
console.log(deterministicPartitionKey({ partitionKey: undefined }));
console.log(deterministicPartitionKey({ partitionKey: null }));
console.log(deterministicPartitionKey({ partitionKey: 0 }));
console.log(deterministicPartitionKey({ partitionKey: "" }));
console.log(deterministicPartitionKey({ partitionKey: false }));
console.log(deterministicPartitionKey({ partitionKey: NaN }));
console.log(deterministicPartitionKey({ partitionKey: "0" }));
console.log(deterministicPartitionKey({ partitionKey: 300 }));
console.log(deterministicPartitionKey({ partitionKey: Infinity }));
console.log(deterministicPartitionKey({ partitionKey: 999999999 }));
console.log(
  deterministicPartitionKey({
    partitionKey:
      "dbdbea1dfd870ff4c4174b3331d7d332776fdbf2438dc7c910d2c889ca98a62eccb077cac648a3fa40e59362d2f393cf41a7ee3cf9d29a567b74c8353a3d0abc",
  })
);
