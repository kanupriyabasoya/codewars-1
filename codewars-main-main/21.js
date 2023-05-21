function numberOfPeople(busStops){
    inBus = 0;
    offBus = 0;
    for(let i=0;i<busStops.length;i++){
        inBus +=busStops[i][0];
        offBus += busStops[i][1];
    }
    return inBus-offBus;
}