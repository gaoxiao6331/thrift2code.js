import { readFileContent } from "@/util/fileLoader";

(async function readGrammar() {
  const grammar1 = await readFileContent("./grammar.thrift");
  console.log(grammar1);
  const grammar2 = await readFileContent(`${__dirname}/grammar.thrift`);
  console.log(grammar2 === grammar1);
  const grammar3 = await readFileContent(
    "~/Code/thrift2code.js/src/test/util/grammar.thrift",
  );
  console.log(grammar3 === grammar2);
})();
