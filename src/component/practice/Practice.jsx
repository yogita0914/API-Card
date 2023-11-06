import React, { useEffect, useState } from 'react';
import styles from './Practice.module.css';

const Practice = () => {
  const [posts, setPosts] = useState([])
  const [current, setCurrent] = useState(0);
  const response = async()=> {
    try{
    const data = await fetch (`https://dummyjson.com/products/1`)
    const post = await data.json()
    console.log(post);
    setPosts([post])
    }
    catch(err){
      console.log(err);
    }
    
  }
  useEffect(()=>{
    response()
  },[])
  const handleDotClick = (index)=>{
    setCurrent(index)
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Smart Phones</h3>
      <div>
      {posts.map((newPosts,index)=>(
        <div key={index} className={styles.box}>
          <img src={newPosts.images[current]} alt='not found' className= {styles.imgs}/>
          <div className={styles.phone_data}>
            {newPosts.images.map((image, imageIndex)=>(
              <span key={imageIndex} className={current === imageIndex? styles.activeDot:styles.dot}
              onClick={()=>handleDotClick(imageIndex)}></span>
            ))}
          </div>
          <div className= {styles.content}>
          <p className={styles.title}>Title: {newPosts.title}</p>
          <p className={styles.id}>Id: {newPosts.id}</p>
          <p className={styles.description}>Description: {newPosts.description}</p>
          <p className={styles.price}>Price: {newPosts.price}</p>
          <p className={styles.discount}>Dis_Percentage: {newPosts.discountPercentage}</p>
          <p className={styles.rating}>Rating: {newPosts.rating}</p>
          <p className={styles.stock}>Stock: {newPosts.stock}</p>
          <p className={styles.brand}>Brand: {newPosts.brand}</p>
          <p className={styles.category}>Category: {newPosts.category}</p>
          </div>
        </div>
      ))}
      </div>
    </div>     
  )
}

export default Practice;