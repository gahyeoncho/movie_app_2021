import React from "react";

const foodILike = 
[
  {
    id : 1,
    name : "Kimchi",
    image :
    "https://www.ghostfreshmart.com/wp-content/uploads/2020/04/%EB%A7%89%EA%B9%80%EC%B9%98.jpg" 
  },
  {
    id : 2,
    name : "Samgiopsal",
    image :
    "https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304"
  },
  {
    id : 3,
    name : "Jjukumi",
    image :
    "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/05/52d2be99c015378a75c9db81362422c71.jpg"
  }
];

function Food({name,picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
    </div>;
}

function App() {
  return (
    <div className="App">  
      {foodILike.map(dish=>(
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;