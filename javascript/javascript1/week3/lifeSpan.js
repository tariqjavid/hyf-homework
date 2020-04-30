  
//Series duration of my life

const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes:0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ]

    let lifeSpan = ()=>{ // fat function

        let totalLifehours=80*365*24
        let total=0;
    for(let i=0;i<seriesDurations.length;i++)
    {
        let lifeHours=seriesDurations[i].days*24 + seriesDurations[i].hours+(seriesDurations[i].minutes/60);
          let spend=( lifeHours/totalLifehours) *100;
          total+=spend;
          

          let y=seriesDurations[i].title;
            console.log(`${y} took ${spend} % of my life`)
    }
    
            return total;
  }
             let res=lifeSpan();

             console.log("Total is "+ res +  "%" +"  " +"of my life");