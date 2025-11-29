# 🍽️ Food Delivery React App

A modern and responsive **React Food Delivery Application** where users can:

- Browse food items  
- Filter by categories (Salad, Rolls, Desserts, Sandwich, Cake, etc.)  
- Add items to cart  
- Remove items from cart  
- View total items & total price  

Perfect for portfolio, practice, or beginners learning React.

---

## 🌟 Features

### 🎯 Category Filter
Click categories to filter foods:
- Salad  
- Rolls  
- Desserts  
- Sandwich  
- Cake  
- Pure Veg  
- Pasta  
- Noodles  
- All (show everything)

### 🛒 Cart System
- Add items to cart  
- Increase/decrease quantity  
- Remove items  
- Show total items  
- Show total amount  

### 📱 Responsive UI
- Works on mobile, tablet, and desktop  
- Clean modern layout  

---

## 🛠️ Tech Stack

| Tech | Use |
|------|-----|
| React | Frontend UI |
| Context API / useState | Cart state & global management |
| CSS / Tailwind / Bootstrap | Page styling |
| Vite | Fast development server |

---

## 📁 Project Folder Structure
oodAPP/
│
├── public/
│
├── src/
│ ├── assets/
│ │ └── images, icons, food images etc.
│ │
│ ├── components/
│ │ ├── appdownload/
│ │ ├── exploremenu/
│ │ ├── foodDisplay/
│ │ ├── footer/
│ │ ├── header/
│ │ ├── login/
│ │ ├── menubar/
│ │ └── navbar/
│ │
│ ├── context/
│ │ └── storeContext.jsx # Global cart context
│ │
│ ├── pages/
│ │ ├── cart/ # Cart Page
│ │ ├── home/ # Homepage
│ │ └── placeorder/ # Order placing page
│ │
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md


---

## 🌟 Features Overview

### 🥗 **1. Category-Based Food Filtering**
User can click categories (like Salad, Rolls, Desserts, Sandwich, Pasta, etc.)  
→ Only items of that category are displayed.

Example categories shown on UI:
- Salad  
- Rolls  
- Desserts  
- Sandwich  
- Cake  
- Pure Veg  
- Pasta  
- Noodles  
- All  

---

### 🛒 **2. Add to Cart**
Each food item has an **Add to Cart** button.

The app supports:
- Adding items  
- Increasing quantity  
- Decreasing quantity  
- Removing items  
- Showing real-time subtotal  
- Total cart price  

All cart state is handled in **Context API (`storeContext.jsx`)**.

---

### 📦 **3. Cart Page**
Inside `/pages/cart`
- Displays all cart items  
- Shows quantity controls (+ / -)  
- Shows item price & total price  
- Delete/remove button  
- Button to “Place Order”  

---

### 🎉 **4. Place Order Page**
Inside `/pages/placeorder`
- Dummy page for now
- Can be connected to backend later  

---

### 📱 **5. Fully Responsive Layout**
All components adapt to mobile/tablet/desktop screens:
- Navbar  
- Header  
- Menu categories  
- Food display  
- Cart  
- Footer  

---

## 🧠 How the App Works (Logic Overview)

✔ Add to Cart (Context API)

Located inside /src/context/storeContext.jsx


  const [cart, setCartitems] = useState({});
  const addtoCart = (itemId)=> {
    console.log("id :", itemId);
    setCartitems((prev) => ({
      ...prev,
      [itemId]:(prev[itemId] || 0)+1,
  }));
};

✔ Remove / Decrease Quantity
const removeFromCart = (itemId) => {
       setCartitems((prev)=>{
        const updated = {...prev};
        if(updated[itemId]>1){
          updated[itemId] -= 1;
        }else{
          delete updated[itemId];
        }
        return updated;
       });
  };

🚀 How to Run This Project
1️⃣ Move into project folder
cd foodAPP

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


📦 Tech Stack Used
Technology	Usage
React	UI Components
Context API	Global Cart State
Vite	React Build Tool
CSS	Styling
JavaScript (ES6+)	Logic
🚀 Future Improvements

Login / Register

Payment Gateway

Search Food Items

Favorite Dishes

Live Order Tracking (Socket.io)

Admin Panel to add/edit food items

🤝 Contributing

Open to PRs! Improve UI, add features, or optimize code.

⭐ Support

If you like this project, give it a ⭐ on GitHub!
It helps motivate future improvements.

Made with ❤️ using React + Context API




---
