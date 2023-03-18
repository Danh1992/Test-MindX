import React from "react";
class Form extends React.Component {
    render() {
const hanleCallApi = async () =>{
  const reponse = await fetch("https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=886705b4c1182eb1c69f28eb8c520e20")
}

// console.log(reponse);


        return (
<form>
<input type="text" name="city" placeholder="City..."/>;
{/* <input type="text" name="country" placeholder="Country..."/>; */}
<button onClick={hanleCallApi}>Get Weather</button>;
</form>
  )
}
}
export default Form;