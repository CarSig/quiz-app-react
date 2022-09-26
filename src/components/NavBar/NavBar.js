import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
    return (
        <div className='navbar-container'>


            <ul>
                <li>
                    <Link to="/"><button>home</button></Link>
                </li>
                <li>
                    <Link to="/bookmarks"><button>bookmarks</button></Link>
                </li>
                <li>
                    <Link to="/about"><button>about</button></Link>
                </li>
                <li><Link to="taglist"><button>tag list</button></Link>

                </li>



            </ul>
        </div>



    )
}

export default NavBar