package com.sixdee.magik.services.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class QRCodeController {
	
	private String latestQRCode;

    @PostMapping("/api/qr/submit")
    public ResponseEntity<String> submitQRCode(@RequestBody String qrCode) {
        System.out.println("Received QR Code: " + qrCode);
        latestQRCode = qrCode; // Store the latest QR code
        return ResponseEntity.ok("QR Code submitted successfully");
    }

    @GetMapping("/latest")
    public ResponseEntity<String> getLatestQRCode() {
        return ResponseEntity.ok(latestQRCode != null ? latestQRCode : "");
    }


}
