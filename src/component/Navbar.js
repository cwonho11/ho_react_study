import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faUser as faUser_solid } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isOpen, setIsOpen] = useState(false);    // 모바일용 햄버거 메뉴 펼침 여부

    const navigate = useNavigate();
    const goToMain = () => {
        setSearchKeyword("");   // input 영역 비우기
        navigate("/");
    }
    const goToSearch = (event) => {  
        if(event.key == "Enter") {
            let keyword = event.target.value;
            
            navigate(`/?q=${keyword}`);
        }
    }
    const goToLogin = () => {
         navigate("/login");
    }
    const goToLogout = () => {
        setAuthenticate(false);
        navigate("/");
    }

    const searchHandler = (event) => {
        setSearchKeyword(event.target.value);
    }

  return (
    <div className='navbar-area'>
        <div>
            { authenticate === true ? 
                <div className="login-button" onClick={goToLogout}>
                    <FontAwesomeIcon icon={faUser_solid} />
                    <div className='login-button-text'>로그아웃</div>
                </div>
                : 
                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div className='login-button-text'>로그인</div>
                </div> 
            }
            
        </div>
        <div className='nav-section' onClick={goToMain}>
            <img width="100px" src="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg" />
        </div>
        <div className='menu-area'>

            <ul className='menu-list'>
                { menuList.map(menu => <li>{menu}</li>) }                
            </ul>
            <div className='search-area'>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder='제품검색' onKeyDown={(event) => { goToSearch(event); }} 
                       onChange={searchHandler} value={searchKeyword} />
            </div>
        </div>
    </div>
  )
}

export default Navbar