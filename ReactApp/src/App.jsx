// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
// import Card from "./Card"
// import Button from "./Button"
import Student from "./Student.jsx"

function App() {

  return(
    <>
    {/* <Header/> */}
    {/* <Food/> */}
    {/* <Footer/> */}
    {/* <Card/> */}
    {/* <Card/> */}
    {/* <Button/> */}
    <Student name="Sara" age={16} isStudent={true} />
    <Student name="Skye" age={56} isStudent={false} />
    <Student name="Sameer" age={20} isStudent={true} />
    <Student name="Shakshi" age={21} isStudent={true} />
    <Student name="Sandy"/> 
    </>
  )
}

export default App
