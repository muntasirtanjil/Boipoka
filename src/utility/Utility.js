const getStorBook = () => {
    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
};

const addToStoredDB = (id) => {

    const storedBookData = getStorBook();
    if (storedBookData.includes(id)) {
        alert(" This id already exist ")
    }
    else {
        storedBookData.push(id)
        console.log(storedBookData);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data);
    }

};

export { addToStoredDB };
