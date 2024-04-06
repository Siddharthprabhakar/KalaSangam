import "./two.css";

export function SectionTwo() {
  return (
    <div style={{ backgroundColor: "#0057A3"}}>
        <div className="sectiontwo" >
    <div className="twowrapper">
      <h1>Stuff You&apos;ll Love </h1>
      <div className="layout">
        <main className="grid">
        <div className="asidebox">
          <h2>Hi! </h2>
          <p>
           We Thought you might like this 
          </p>
        </div>
          <div className="twoproduct">
            <img src="https://images.unsplash.com/photo-1559715541-5daf8a0296d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzU1ODd8&ixlib=rb-4.0.3&q=80&w=400" alt="Toy duck in a batman costume" />
            <h3 className="product__title">Bat Duck</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">From <span>$25</span></p>
              <button className="twobutton" data-type="outline">Buy</button>
            </div>
          </div>
    
          <div className="twoproduct">
            <img src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzU1ODd8&ixlib=rb-4.0.3&q=80&w=400" alt="lego stormtrooper" />
            <h3 className="product__title">Lego Storm Trooper</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">From <span>$25</span></p>
              <button className="twobutton" data-type="outline">Buy</button>
            </div>
          </div>
    
          <div className="twoproduct">
            <img src="https://images.unsplash.com/photo-1627752458987-d721d34ecd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxNjN8&ixlib=rb-4.0.3&q=80&w=400" alt="" />
            <h3 className="product__title">Figurines</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">From <span>$25</span></p>
              <button className="twobutton" data-type="outline">Buy</button>
            </div>
          </div>
    
          <div className="twoproduct">
            <img src="https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxODV8&ixlib=rb-4.0.3&q=80&w=400" alt="" />
            <h3 className="product__title">Gundam</h3>
            <div className="flex-group space-between v-center">
              <p className="product__price">From <span>$25</span></p>
              <button className="twobutton" data-type="outline">Buy</button>
            </div>
          </div>
    
          <div className="twoproduct" data-featured="true">
            <img src="https://images.unsplash.com/photo-1605287977617-ddd865d5f696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTYzMzYxODV8&ixlib=rb-4.0.3&q=80&w=400" alt="" />
            <h3 className="product__title">Stuffed hamster</h3>
            <p className="product__description">
              A nice fuzzy and cuddly stuffed hamster for you to snuggle with
              and enjoy. Might be small in size, but it is&apos;t small in cuteness.
            </p>
    
            <div className="flex-group space-between v-center">
              <p className="product__price">From <span>$25</span></p>
              <button className="twobutton" data-type="outline">Buy</button>
            </div>    
          </div>
      
        </main>
    
      </div>
    </div>
    
    </div>
    </div>
  
  )
}