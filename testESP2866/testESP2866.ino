#include <Firebase.h>
#include <FirebaseArduino.h>
#include <FirebaseCloudMessaging.h>
#include <FirebaseError.h>
#include <FirebaseHttpClient.h>
#include <FirebaseObject.h>
#include <ESP8266WiFi.h>

#define FIREBASE_HOST "wheat-monitoring-system-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "1cKSIKcd0ujy48QhcCfgrojgGJeTmUpLP2CFQ68A"
#define WIFI_SSID "AndroidAPd02d"
#define WIFI_PASSWORD "aman13720"

// DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  // dht.begin();

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

int n = 0;

void loop() {

  // float h = dht.readHumidity();
  // float t = dht.readTemperature();
  // float f = dht.readTemperature(true);

  // if (isnan(h) || isnan(t) || isnan(f)) {
  //   Serial.println(F("Failed to read from DHT sensor!"));
  //   return;
  // }

  // float hif = dht.computeHeatIndex(f, h);
  // float hic = dht.computeHeatIndex(t, h, false);

  Firebase.setFloat("temperature", 56);
  if (Firebase.failed()) {
    Serial.print("setting /number failed:");
    Serial.println(Firebase.error());
    return;
  }

  Firebase.setFloat("humidity", 42);
  if (Firebase.failed()) {
    Serial.print("setting /number failed:");
    Serial.println(Firebase.error());
    return;
  }
  delay(1000);

  Serial.print("Data Temperature: ");
  Serial.println(Firebase.getFloat("temperature"));
  Serial.print("Data Humidity: ");
  Serial.println(Firebase.getFloat("humidity"));
  Serial.println();
  delay(1000);
}