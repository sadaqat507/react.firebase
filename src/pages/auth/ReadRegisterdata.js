import { Table, Button } from 'antd';
import { firestore } from 'config/firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReadProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchDocuments = async () => {
    let array = [];

    const querySnapshot = await getDocs(collection(firestore, 'users'));
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      array.push({ key: doc.id, ...data });
    });

    setProducts(array);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(firestore, 'users', id));
    setProducts(products.filter((product) => product.key !== id));
  };

  const handleUpdate = async (id) => {
    console.log('ID to Update:', id); // Log the ID being passed in
    // console.log('npm  Array:', products); // Log the current state of products
    
    const product1 = products.find((product) => product.key === id);
    
    if (product1) {
      console.log('Update Data:', product1);
    } else {
      console.log('Product not found');
    }
  };
  
  

  useEffect(() => {
    fetchDocuments();
  }, []);

  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => ( index+ 1 ) // This will render the row number starting from 1
    }, {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'UID',
      dataIndex: 'uid',
      key: 'uid',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button
            type="primary"
            onClick={() => handleUpdate(record)}
            className="me-2   bg-success text-white"
            style={{ width: '100px' }}
          >
            Update
          </Button>
          <Button
            type="danger"
            onClick={() => handleDelete(record.key)}
            className="  bg-danger text-white"
            style={{ width: '100px' }}
          >
            Delete
          </Button>
        </>

      ),
    },
  ];

  return (
    <div className="container mt-4 text-center">
      <p>Email data</p>
      {products.length > 0 ? (
        <Table dataSource={products} columns={columns} pagination={false} />
      ) : (
        <div className="spinner-border text-primary"></div>
      )}
    </div>
  );
};

export default ReadProduct;
