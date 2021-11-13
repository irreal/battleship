import readline from "readline";
export default function readLine(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(prompt + " ", (value) => {
      rl.close();
      resolve(value);
    });
  });
}
