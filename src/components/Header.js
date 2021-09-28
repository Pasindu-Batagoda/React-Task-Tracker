//importing Button component
import Button from "./Button"

//React Arrow Function Component for Header
const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
           <h1>{title}</h1>
           
           {/*Change "Add" button color and text*/}
           
           <Button color={showAdd ? 'red' : 'green'} 
           text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

//Default prop to display if prop not specified
Header.defaultProps = {
    title: 'React Task Tracker',
}

export default Header 
