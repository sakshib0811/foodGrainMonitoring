#include <dht.h>

#include<Wire.h>
dht DHT;
#define SensorPin A1
#define echoPin 2 // attach pin D2 Arduino to pin Echo of HC-SR04
#define trigPin 3 //attach pin D3 Arduino to pin Trig of HC-SR04
#define DHT11_PIN 4
const int AOUTpin=A0;//the AOUT pin of the alcohol sensor goes into analog pin A0 of the arduino
const int ledPin=13;//the anode of the LED connects to digital pin D13 of the arduino
long duration; // variable for the duration of sound wave travel
int distance=-1; // variable for the distance measurement
int i,alco_high,alco_low,mapped,data[200];
float sensorValue = 0; 


void setup() {
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an OUTPUT
  pinMode(echoPin, INPUT); // Sets the echoPin as an INPUT
  pinMode(AOUTpin, INPUT);//sets the pin as an input to the arduino
  Serial.begin(9600); // // Serial Communication is starting with 9600 of baudrate speed
for(i=2;i<=5;i++)
{
  pinMode(i,OUTPUT);//sets the pin as an output of the arduino
}  
//    Wire.onRequest(requestEvent);
}
void loop() {
  // Clears the trigPin condition
  digitalWrite(trigPin, LOW);
  delay(2000);
  // Sets the trigPin HIGH (ACTIVE) for 10 microseconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  // Calculating the distance
  distance = duration * 0.034 / 2; // Speed of sound wave divided by 2 (go and back)
  // Displays the distance on the Serial Monitor
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  alco_high=0; // initially alcohol level is zero
  alco_low = 1023; // low threshold is 1023

        for(i=200; i>0; i--){
        data[i] = data[i-1]; // decrement of data
        
      if(data[i]>alco_high)
      alco_high=data[i];
      if(data[i]<alco_low)
      alco_low=data[i];
      }
data[0]= analogRead(AOUTpin);//reads the analaog value from the alcohol sensor's AOUT pin
mapped=map(data[0],0,1023,0,600);
Serial.print("Gas value: ");
Serial.println(mapped);//prints the alcohol value
delay(2000);

 if((alco_high-alco_low)>150){
  if(data[0] > (alco_high-.95*(alco_high-alco_low)))//this is true if the read is greater than 95% of the span
  digitalWrite(2, HIGH);
  else
  digitalWrite(2,LOW); 
  
  if(data[0] > (alco_high-.9*(alco_high-alco_low)))
  digitalWrite(3, HIGH);
  else
  digitalWrite(3,LOW); 
 
    if(data[0] > (alco_high-.8*(alco_high-alco_low)))
  digitalWrite(4, HIGH);
  else
  digitalWrite(4,LOW); 
    if(data[0] > (alco_high-.7*(alco_high-alco_low)))
  digitalWrite(5, HIGH);
  else
  digitalWrite(5,LOW); 
 }
 else 
 {
 for(i=2;i<=5;i++)
 digitalWrite(i,0);
}
for (int i = 0; i <= 100; i++) 
 { 
   sensorValue = sensorValue + analogRead(SensorPin); 
   delay(1); 
 } 
 sensorValue = sensorValue/100.0; 
 Serial.print("Moisture: ");
 Serial.println(sensorValue); 
 int chk = DHT.read11(DHT11_PIN);
  Serial.print("Temperature = ");
  Serial.println(DHT.temperature);
  Serial.print("Humidity = ");
  Serial.println(DHT.humidity);
  //delay(1000);
  delay(5000);
}

void requestEvent() {
//  Wire.write("Distance: ");  /*send string on request */
//  Wire.write(distance);
//  Wire.write("cm"); 
}