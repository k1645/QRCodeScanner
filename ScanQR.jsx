import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

const ScanQR = () => {

  useEffect(() => {
    console.log("Initializing QR Code scanner...");

    const html5QrCode = new Html5Qrcode("reader");

    html5QrCode
      .start(
        { facingMode: "environment" }, // Using rear camera
        { fps: 10, qrbox: 250 },
        async (decodedText) => {
          console.log("Scanned: ", decodedText);
          alert("Scanned: " + decodedText);

          // Stop the QR code scanner after scanning
          html5QrCode
            .stop()
            .then(() => {
              alert("QR Code scanner stopped successfully.");
              console.log("QR Code scanner stopped successfully.");
            })
            .catch((error) => {
              alert("Error stopping QR code scanner: " + error);
              console.error("Error stopping QR code scanner: ", error);
            });
        },
        (errorMessage) => {
          console.warn("QR Code scan error: ", errorMessage);
        }
      )
      .catch((error) => {
        console.error("Error initializing QR code scanner: ", error);
      });

    return () => {
      // Cleanup QR scanner on component unmount
      html5QrCode.stop().catch((error) => {
        console.error("Error stopping QR code scanner on unmount: ", error);
      });
    };
  }, []);

  return (
    <div>
      {/* <h2>Scan QR Code</h2> */}
      <div id="reader" style={{ width: "300px" }}></div>
    </div>
  );
};

export default ScanQR;
