
import  {  Nav, Navbar}from 'react-bootstrap';


export const NaVbar = () =>{



      return(

   
            <Navbar expand="md" className='bg-info d-flex align-items-center border-none fixed-top' >
          <Navbar.Brand href="/">
            <span className='text-secondary fw-bolder fs-3'> Sunnyside</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle> 
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ms-auto d-flex align-items-center">
               <Nav.Link href="#about"><span className='text-secondary ms-2'>ABOUT</span></Nav.Link>
               <Nav.Link href="#services" ><span className='text-secondary ms-2'>Services</span></Nav.Link>
               <Nav.Link href="#projects" ><span className='text-secondary me-2'>Projects</span></Nav.Link>
               <a href="/">
                <button className='bg-white text-secondary rounded-pill border border-secondary bg-opacity-25'>Connect</button>
               </a>
             </Nav>
          </Navbar.Collapse>

      </Navbar>
  
      )
      }