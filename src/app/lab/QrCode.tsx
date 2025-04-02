"use client";
import { QRCodeSVG } from "qrcode.react";

export default function QrCode({ text }: { text: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white p-4">
      <QRCodeSVG value={text} size={256} />
    </div>
  );
}
