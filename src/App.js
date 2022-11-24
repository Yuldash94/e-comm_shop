import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Книжная полка',
          img: 'book.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore earum quas animi temporibus commodi odit explicabo eligendi quod, natus quasi!',
          category: 'table',
          price: '99.99'
        },
        {
          id: 2,
          title: 'Книжная полка',
          img: 'book_1.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore earum quas animi temporibus commodi odit explicabo eligendi quod, natus quasi!',
          category: 'wall',
          price: '99.99'
        },
        {
          id: 3,
          title: 'Книжная полка',
          img: 'book_2.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore earum quas animi temporibus commodi odit explicabo eligendi quod, natus quasi!',
          category: 'wall',
          price: '99.99'
        },
        {
          id: 4,
          title: 'Книжная полка',
          img: 'book_3.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore earum quas animi temporibus commodi odit explicabo eligendi quod, natus quasi!',
          category: 'flloor',
          price: '99.99'
        },
        {
          id: 5,
          title: 'Книжная полка',
          img: 'book_4.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore earum quas animi temporibus commodi odit explicabo eligendi quod, natus quasi!',
          category: 'wall',
          price: '99.99'
        },
        {
          id: 6,
          title: 'Книжная полка',
          img: 'book_5.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore earum quas animi temporibus commodi odit explicabo eligendi quod, natus quasi!',
          category: 'flloor',
          price: '99.99'
        },
        {
          id: 7,
          title: 'Книжная полка',
          img: 'book_6.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore earum quas animi temporibus commodi odit explicabo eligendi quod, natus quasi!',
          category: 'flloor',
          price: '99.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems=this.state.items

    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer/>
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({orders: [...this.state.orders, item]})
    }
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
}

export default App;
