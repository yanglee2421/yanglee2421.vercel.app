import { generateKeyPair, publicEncrypt, privateDecrypt } from "node:crypto";
import { promisify } from "node:util";
import QrCode from "./QrCode";

const generateKeyPairAsync = promisify(generateKeyPair);

export default async function Lab() {
  const { publicKey, privateKey } = await generateKeyPairAsync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });

  const data = "522A49SMP00037EP000G";
  const encryptedData = publicEncrypt(publicKey, Buffer.from(data));
  const encryptedDataString = encryptedData.toString("base64");
  const decryptedData = privateDecrypt(
    privateKey,
    Buffer.from(encryptedDataString, "base64"),
  );
  const decryptedDataString = decryptedData.toString("utf-8");

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <h1 className="text-2xl font-bold">Lab</h1>
      <p className="text-sm text-muted-foreground">
        This is a lab page. You can test new features here.
      </p>
      <div className="grid grid-cols-2 gap-6 p-6">
        <article>
          <pre>{publicKey}</pre>
        </article>
        <article>
          <pre>{privateKey}</pre>
        </article>
        <article>
          <pre>{data}</pre>
        </article>
        <article>
          <pre className="break-all">{decryptedDataString}</pre>
        </article>
        <article>
          {decryptedDataString === data && <span>Absolutely equal</span>}
          <textarea
            name=""
            id=""
            defaultValue={encryptedDataString}
            readOnly
            className="h-48 w-full"
          ></textarea>
        </article>
        <QrCode text={encryptedDataString} />
      </div>
    </div>
  );
}
