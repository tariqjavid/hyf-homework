
        const getCurrentLocation=(time)=>{
            return new Promise((position,error)=>{
                setTimeout(()=>{
                    navigator.geolocation.getCurrentPosition((pos)=>{
                        const currentPosition=`Latitude:${pos.coords.latitude}   Longitude:${pos.coords.longitude}`
                        if(currentPosition)
                        {
                            position(currentPosition)
                        }
                        else
                        {
                            error("Error");
                        }
                    }) // end of getCurrentPosition
                },time)// end of timesetout
            })
        } // end of getcurrentLocation function
        getCurrentLocation(3000)
        .then((position) => {
            // called when the users position is found
            console.log(position);
        })
        .catch((error) => {
            // called if there was an error getting the users location
            console.log(error);
        });