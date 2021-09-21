//importing Button component
import Button from "./Button"

//React Arrow Function Component for Header
const Header = ({title}) => {
     //Creating the onClick function
    const onClick =() => {
        console.log('click')
    }
    return (
        <header className='header'>
           <h1>{title}</h1>
           <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

//Default prop to display if prop not specified
Header.defaultProps = {
    title: 'React Task Tracker',
}

export default Header 
