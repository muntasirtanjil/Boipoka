import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStorBook } from '../../utility/Utility';
import ReadListCard from './ReadListCard';

const ReadList = () => {

    const data = useLoaderData()
    console.log(data)
    const [readList, setReadList] = useState([]);

    useEffect(() => {
        const storeBookData = getStorBook();
        const convertedStoredBook = storeBookData.map(id => parseInt(id));
        // console.log(convertedStoredBook)
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));

        setReadList(myReadList)

    }, [])

    

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                  {
                    readList.map(readListData =>  <ReadListCard key={readListData.bookId} readListData={readListData}></ReadListCard>)
                  }
                </TabPanel>
                <TabPanel>
                    <h2>My WishList</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;