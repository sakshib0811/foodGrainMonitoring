#include <Firebase.h>
#include <FirebaseArduino.h>
#include <FirebaseCloudMessaging.h>
#include <FirebaseError.h>
#include <FirebaseHttpClient.h>
#include <FirebaseObject.h>
#include <Wire.h>
#include <ESP8266WiFi.h>  

// FirebaseData fbdo;
// FirebaseJsonArray arr;

#define FIREBASE_HOST "wheat-monitoring-system-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "1cKSIKcd0ujy48QhcCfgrojgGJeTmUpLP2CFQ68A"
#define WIFI_SSID ""
#define WIFI_PASSWORD ""



void setup() {
 Serial.begin(9600); /* begin serial for debug */
 Wire.begin(D1, D2); /* join i2c bus with SDA=D1 and SCL=D2 of NodeMCU */
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);  
}

void loop() {
//  Wire.beginTransmission(8); /* begin with device address 8 */
//  Wire.write("Hello Arduino");  /* sends hello string */
//  Wire.endTransmission();    /* stop transmitting */

 Wire.requestFrom(8, 13); /* request & read data of size 13 from slave */
 if(Wire.available()){
   Firebase.pushString("Data", String(Wire.read()));
  //int c = Wire.read();// //Firebase.setFloat("Value", c);
  if (Firebase.failed()) {  
        Serial.print("setting /number failed:");  
        Serial.println(Firebase.error());    
        return;  
    }  else {
      Serial.print("Data gone!");
    }
  //Serial.print(c);
}
else {
//Serial.print("No data available! ");
}
 Serial.println(Firebase.getString("Data"));
 delay(5000);
}