import React from 'react'

import Card from '../comp/Card';

import lens from '../img/lens.jpg';
import start from '../img/start.jpg';
import sugar from '../img/sugar.png';
import tcs from '../img/tcs.png';

const Explore = () => {
  return (
    <div class="card-hold">
        <Card src={lens}
      user="lensKart"
      link="https://github.com/Shruti-jha6"
      site="LensKart"/>

<Card src={start}
      user="Start-Up"
      link="https://x.com/Shruti_Jha6?t=jyKDKRQ06iwFe8gtuk_5fw&s=08"
      site="Startup"/>

<Card src={start}
      user="Start-Up"
      link="https://x.com/Shruti_Jha6?t=jyKDKRQ06iwFe8gtuk_5fw&s=08"
      site="Startup"/>
      

      <Card src={sugar}
      user="Start-Up"
      link="https://x.com/Shruti_Jha6?t=jyKDKRQ06iwFe8gtuk_5fw&s=08"
      site="Sugar"/>
      

      <Card src={tcs}
      user="tcs"
      link="https://x.com/Shruti_Jha6?t=jyKDKRQ06iwFe8gtuk_5fw&s=08"
      site="tcs"/>
      <Card src={lens}
      user="lensKart"
      link="https://github.com/Shruti-jha6"
      site="LensKart"/>


      
<Card src={sugar}
      user="Start-Up"
      link="https://in.sugarcosmetics.com/?utm_source=google&utm_medium=search&utm_campaign=17164953316&adgroupid=136382391996&utm_content=646586460881&utm_term=sugar%20cosmetics&gad_source=1&gclid=CjwKCAiAiP2tBhBXEiwACslfnvcnMQBaPlgD7olxwCmRchHmW33zMgtJ0AroocuzGKFdSH6Uzrq3vxoCisoQAvD_BwE"
      site="Sugar"/>
      <div/>

<br/>







    </div>
  )
}



export default Explore
