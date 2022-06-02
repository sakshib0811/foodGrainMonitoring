const int AOUTpin=A0;//the AOUT pin of the alcohol sensor goes into analog pin A0 of the arduino
const int ledPin=13;//the anode of the LED connects to digital pin D13 of the arduino

int i,alco_high,alco_low,mapped,data[200];

void setup() {
Serial.begin(9600);//sets the baud rate
pinMode(AOUTpin, INPUT);//sets the pin as an input to the arduino
for(i=2;i<=5;i++)
{
  pinMode(i,OUTPUT);//sets the pin as an output of the arduino
}
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
}}