#define echoPin 2 // attach pin D2 Arduino to pin Echo of HC-SR04
#define trigPin 3 //attach pin D3 Arduino to pin Trig of HC-SR04
#define SensorPin A2 
float sensorValue = 0;
int val;
int tempPin = A1;

const int AOUTpin=A0;
const int ledPin=13;
int i, alco_high, alco_low, mapped, data[200];
long duration; // variable for the duration of sound wave travel
int distance; // variable for the distance measurement

void setup() {  
  for(i=2;i<=5;i++)
  {
    pinMode(i,OUTPUT);
  }
  Serial.begin(9600);
  pinMode(AOUTpin, INPUT);
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an OUTPUT
  pinMode(echoPin, INPUT); // Sets the echoPin as an INPUT
  Serial.begin(9600); // // Serial Communication is starting with 9600 of baudrate speed
//  Serial.println("Ultrasonic Sensor HC-SR04 Test"); // print some text in Serial Monitor
//  Serial.println("with Arduino UNO R3");
}

void loop()
{
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
//  Serial.print("Gas value: ");
//  Serial.println(mapped);//prints the alcohol value
//  delay(2000);
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
  val = analogRead(tempPin);
  float mv = ( val/1024.0)*5000;
  float cel = mv/10;
  float farh = (cel*9)/5 + 32;
//  Serial.print("TEMPRATURE = ");
//  Serial.print(cel);
//  Serial.print("*C");
//  delay(1000);
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;
//  Serial.print("Distance: ");
//  Serial.print(distance);
//  Serial.println(" cm"); 
  for (int i = 0; i <= 100; i++) 
 { 
   sensorValue = sensorValue + analogRead(SensorPin); 
   delay(1); 
 } 
 sensorValue = sensorValue/100.0;
 Serial.print("Gas value: ");
  Serial.println(mapped);

  Serial.print("TEMPRATURE = ");
  Serial.print(cel);
  Serial.println("*C");
//  Serial.println("");
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

 Serial.print("Moisture Value: ");
 Serial.println(sensorValue); 
 delay(2000); 
}
