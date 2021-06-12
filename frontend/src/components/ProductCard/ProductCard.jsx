import React from 'react'
import "./productcard.css"
import circle from '../../resources/icons/circle.png'
import fifty_off from '../../resources/icons/50_off.png'
import trending2 from '../../resources/icons/trending2.png'
function ProductCard({topic}) {
    return (<>
            <h1 style={{textAlign:"center",marginTop:30,fontFamily:"PT Sans Caption",fontSize:40,fontWeight:"lighter"}}>{topic}</h1>
        <div className="product_container">
            <div className="product_container_box">
                <div style={{marginLeft:65,marginBottom:-65,zIndex:99,alignSelf:"start",backgroundImage:"url("+ circle+")",padding:7 , width: 50,height:50,backgroundSize:"cover"}}>
                    <img src={fifty_off} style={{width:35,height:35}} />
                </div>
                <img src={trending2}/>

                <div className="product_name"><span>RS 548</span></div>
            </div>
            <div className="product_container_box">
                
                <img src={trending2}/>
                <div className="product_name"><span>RS 548</span></div>
            </div>
            <div className="product_container_box">
                
                <img src={trending2}/>

                <div className="product_name"><span>RS 548</span></div>
            </div>
            <div className="product_container_box">
                
                <img src={trending2}/>
                <div className="product_name"><span>RS 548</span></div>
            </div>
        </div>
        </>
    )

}

export default ProductCard
