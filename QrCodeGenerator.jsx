import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQRcode] = useState("");

  function handleGenerateQR() {
    setQRcode(input);
  }
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <h1 className="text-2xl font-semibold">QR Code Generator</h1>
      <div className="flex h-10 my-5 justify-between w-96">
        <input
          className=" outline-double px-2"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter value here"
        />
        <button
          className=" text-md bg-black text-white py-2 px-4 hover:bg-white hover:text-black hover:border-2 hover:border-black"
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQR}
        >
          Generate QR
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" size={400} value={qrCode} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
