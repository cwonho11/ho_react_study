import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
    let [contactList, setContactList] = useState([]);

    const store_contactList = useSelector(state => state.contactList);
    let store_name = useSelector(state => state.name);

    useEffect(() => {
        if(store_name !== "") {
            let searchData = store_contactList.filter((item) => item.name.includes(store_name));
    
            setContactList(searchData);
        } else {
            setContactList(store_contactList);
        }
    }, [store_name, store_contactList]);
    
  return (
    <div>
        <SearchBox />
        <div className='mt-3 mb-3'>연락처: {contactList.length || 0}</div>
        { contactList.length > 0 ? 
            (contactList.map((item, index) => (
                <ContactItem item={item} key={index} />
            ))) :
            <p className='border border-warning p-3'>연락처가 없습니다 ㅜㅜ</p>
        }        
    </div>
  )
}

export default ContactList;