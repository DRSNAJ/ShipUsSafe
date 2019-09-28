class Port {
   constructor(name,country,type,size,locprecision,latitude,longitude,ships)
   {
     this._portName = name;
     this._portCountry = country;
     this._portType = type;
     this._portSize = size;
     this._portLocprecision = locprecision;
     this._portLatitude = latitude;
     this._portLongitude = longitude;
     this._shipsArray = ships;
   }

   // Declaring getters
   get name()
   {
     return this._portName;
   }
   get country()
   {
     return this._portCountry;
   }
   get type()
   {
     return this._portType;
   }
   get size()
   {
     return this._portSize;
   }
   get locprecision()
   {
     return this._portLocprecision;
   }
   get latitude()
   {
     return this._portLatitude;
   }
   get longitude()
   {
     return this._portLongitude;
   }
   get ships()
   {
     return this._shipsArray;
   }

   // Declarig setters
   set name(newName)
   {
      this._portName = newName;
   }
   set country(newCountry)
   {
      this._portCountry = newCountry;
   }
   set type(newType)
   {
      this._portType = newType;
   }
   set size(newSize)
   {
      this._portSize = newSize;
   }
   set locprecision(newLocprecision)
   {
      this._portLocprecision = newLocprecision;
   }
   set latitude(newLatitude)
   {
      this._portLatitude = newLatitude;
   }
   set longitude(newLongitude)
   {
      this._portLongitude = newLongitude;
   }
   set ships(newShips)
   {
      this._shipsArray = newShips;
   }

   addShip()
   {

   }

   removeShip()
   {

   }

   toString()
   {
     let output = "Port Name: " + this._portName + "<br>" +
                  "Port Country: " + this._portCountry + "<br>" +
                  "Port Type: " + this._portType + "<br>" +
                  "Port Size: " + this._portSize + "<br>" +
                  "Port Location Precision: " + this._portLocprecision + "<br>" +
                  "Port Latitude: " + this._portLatitude + "<br>" +
                  "Port Longitude: " + this._portLongitude + "<br><br>Ships Available:";
      let c = 0;
      let shipString = "";
      for (c in this._shipsArray)
      {
        shipString += "<br> " + this._shipsArray[c];
      }
      output = output + shipString;
      return output;
   }

   fromData(dataObject)
   {
       this._portName = dataObject.name;
       this._portCountry = dataObject.country;
       this._portType = dataObject.type;
       this._portSize = dataObject.size;
       this._portLocprecision = dataObject.locprecision;
       this._portLatitude = dataObject.lat;
       this._portLongitude = dataObject.lng;
   }

 }
class Ship {
   constructor(name,maxSpeed,range,desc,cost,status,comments)
   {
     this._shipName = name;
     this._shipMaxSpeed = maxSpeed;
     this._shipRange = range;
     this._shipDesc = desc;
     this._shipCost = cost;
     this._shipStatus = status;
     this._shipComments = comments;
   }

   // Declaring getters
   get name()
   {
     return this._shipName;
   }
   get maxSpeed()
   {
     return this._shipMaxSpeed;
   }
   get range()
   {
     return this._shipRange;
   }
   get desc()
   {
     return this._shipDesc;
   }
   get cost()
   {
     return this._shipCost;
   }
   get status()
   {
     return this._shipStatus;
   }
   get comments ()
   {
     return this._shipComments;
   }

   // Declarig setters
   set name(newName)
   {
      this._shipName = newName;
   }
   set maxSpeed(newMaxSpeed)
   {
      this._shipMaxSpeed = newMaxSpeed;
   }
   set range(newRange)
   {
      this._shipRange = newRange;
   }
   set desc(newDesc)
   {
      this._shipDesc = newDesc;
   }
   set cost(newCost)
   {
      this._shipCost = newCost;
   }
   set status(newStatus)
   {
      this._shipStatus = newStatus;
   }
   set comments (newComments)
   {
      this._shipComments = newComments;
   }

   toString()
   {
     let output = "Ship Name :" + this._shipName + "<br>" +
                  "Ship MaxSpeed :" + this._shipMaxSpeed + "<br>" +
                  "Ship Range :" + this._shipRange + "<br>" +
                  "Ship Desc :" + this._shipDesc + "<br>" +
                  "Ship Cost :" + this._shipCost + "<br>" +
                  "Ship Status :" + this._shipStatus + "<br>";
      return output;
   }


 }


// putting into local storage
 let url = "https://eng1003.monash/api/v1/ports/?callback=getports";
 let script = document.createElement('script');
 script.src = url;
 document.body.appendChild(script);


 function getports(currentPorts){
    if (typeof(Storage) !== "undefined")
    {
        console.log("localStorage is available.");
        localStorage.setItem("PORT_CLASS", JSON.stringify(currentPorts));
    }
    else
    {
        console.log("localStorage is not supported by current browser.");
    }
  }

//getting from local storage
  let i = 0;
  portsObject = JSON.parse(localStorage.getItem("PORT_CLASS")).ports;
  let portsArray = [];

  for (i in portsObject)
  {
    let p = new Port();
    p.fromData(portsObject[i]);
    portsArray[i] = p;
  }
  console.log(portsArray);
  document.getElementById("info").innerHTML = portsArray[0].toString();
