import * as crypto from "node:crypto";

export default function Hash() {
  const data = "522A49SMP00037EP000G";

  const hash = crypto.createHash("md5").update(data).digest("hex");

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <h1 className="text-2xl font-bold">Hash</h1>
      <p className="text-sm text-muted-foreground">
        This is a hash page. You can test new features here.
      </p>
      <pre>
        <code>{hash}</code>
      </pre>
    </div>
  );
}
