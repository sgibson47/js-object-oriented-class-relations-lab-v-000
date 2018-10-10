let store = { drivers: [], passengers: [], trips: [] };
// initialize store with key of items and users that each point to an empty array
 
let driverId = 0;
 
class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;

        // insert in the store
        store.drivers.push(this);
    }

    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
        // OR 
        // return store.trips.filter(trip => {
        //   return trip.driverId == this.id;
        // });
    }

    passengers() {
        //passengers from store who share trips with this driver
        const theTrips = this.trips()
        let thePassengers = []
        for(const trip of theTrips){
            thePassengers.push(trip.passenger());
        }
        return thePassengers;
        // OR 
        // return this.trips().map(trip => {
        //   return trip.passenger();
        // })
    }
}
 
let passengerId = 0;
 
class Passenger {
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;
 
        // insert in the store
        store.passengers.push(this);
    }

    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        );
        // OR
        // return store.trips.filter(trip => {
        //   return trip.passengerId == this.id;
        // });
    }

    drivers() {
        const theTrips = this.trips()
        let theDrivers = []
        for(const trip of theTrips){
            theDrivers.push(trip.driver());
        }
        return theDrivers;
        // OR
        // return this.trips().map(trip => {
        //   return trip.driver();
        // });
    }
}

let tripId = 0;
 
class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId;
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        
        // insert in the store
        store.trips.push(this);
    }

    driver() {
        return store.drivers.find(
            function(driver) {
                return driver.id === this.driverId;
            }.bind(this)
        );
        // OR 
        // return store.drivers.find(driver => {
        //   return driver.id === this.driverId;
        // });
    }

    passenger() {
        return store.passengers.find(
            function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        );
        // OR 
        // return store.passengers.find(passenger => {
        //   return passenger.id === this.passengerId;
        // });
    }
}