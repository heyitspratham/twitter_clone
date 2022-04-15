
import Sidebar from '../components/Sidebar';
import Feed from '../components/home/Feed';
import Widgets from '../components/Widgets'

const style ={
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] flex justify-between overflow-y-scroll`
}

const Home = () => {
  return (
    <div className={style.wrapper} >
      <div className={style.content}>
        <Sidebar />
        <Feed/>
        <Widgets/>
        
      </div>
    </div>
  )
}



export default Home
