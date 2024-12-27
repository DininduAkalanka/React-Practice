import React from 'react'

export default function List() {
    const fruits = [
        {id : 1, name:"Apple",calaries:120},
        {id : 2, name:"Wanana",calaries:100},
        {id : 3, name:"Strawberry",calaries:110},
        {id : 4, name:"Wildapple",calaries:96},
        {id : 5, name:"Lemone",calaries:68},
        {id : 6, name:"mangus",calaries:50}
    ]


    //fruits.sort((a,b)=>a.name.localeCompare(b.name));
   // fruits.sort((a,b)=>b.name.localeCompare(a.name));
  //fruits.sort((a,b)=>a.calaries-b.calaries);
 const mincal= fruits.filter(fruits=>fruits.calaries>=120);





    const listItem = mincal.map(mincal=><li key = {mincal.id}>{mincal.name}: <b>{mincal.calaries}</b></li>);

   
  return (
    <div>
        <ol>{listItem}</ol>
      
    </div>
  )
}
