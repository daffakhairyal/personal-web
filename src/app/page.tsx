
import Expertise from "./component/expertise";
import Recent from "./component/recent";
import Hero from "./home/page";

export default function Home(){
  return(
    <section>
      <Hero/>
      <Recent/>
      <Expertise/>
    </section>
  )
}