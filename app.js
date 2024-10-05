
let my_city = [

    {
        name: 'Edmonton',
        population: 1000000,
        is_capital: true,
        communities: [
            {
                name: 'edgmon',
                population: '1000000'
            },

            {
                name: 'EnrighWay',
                population: '2000000'
            },

            {
                name: 'WoodHeaven',
                population: '90'
            }

            ]
    }
]


for(let i = 0; i < my_city.length; i++){
    if(my_city.is_capital === true){
        console.log(`City:${my_city.name}, population:${my_city.population}`);
    }else{
        console.log('Not important enough');
    }
}




counter = 0;
while(counter < my_city.length){

      let community = my_city[counter].communities;
      console.log(community)
      console.log(community[counter])

    counter = counter + 1;
}


counter = 0;
while(counter < my_city.length){
    let community = my_city[counter].communities;
    console.log(community);

    if(community.name >= 100){
        console.log(`Name:${community.name}`)
    }

   counter ++;
}

let population = 0;

counter = 0;
while(counter < my_city.length){
    
   let totalPopulation = population + my_city[counter].communities.population;
   console.log(`${totalPopulation}`)
   counter ++;
}






