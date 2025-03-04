import "../css/AllItems.css";
import AllItemsComp from "./AllItemsComp.jsx";



export default function DairyProducts ({ image_path }) {

  const AllItems = [
    {
      item_name: "Fresh Organic Milk, Full of Calcium and Nutrients",
      item_description: "Pure, fresh organic milk, rich in calcium and ideal for a healthy diet.",
      item_price: "Rs. 50/litre",  // Milk is typically priced per litre
      item_image: `${image_path}/milk.jpg`,
      item_discount: "10%",
      item_rating: "4.8"
    },
    {
      item_name: "Creamy Butter, Made from Fresh Cow's Milk",
      item_description: "Rich and creamy butter, made from fresh cow's milk, perfect for cooking or spreading.",
      item_price: "Rs. 600/kg",  // Butter is typically priced per kg
      item_image: `${image_path}/butter.jpg`,
      item_discount: "15%",
      item_rating: "4.5"
    },
    {
      item_name: "Fresh Cottage Cheese (Paneer), Soft and Nutritious",
      item_description: "Freshly made paneer, soft and high in protein, perfect for curries and salads.",
      item_price: "Rs. 360/kg",  // Paneer is typically priced per kg
      item_image: `${image_path}/paneer.jpg`,
      item_discount: "12%",
      item_rating: "4.6"
    },
    {
      item_name: "Delicious Greek Yogurt, Packed with Probiotics",
      item_description: "Creamy Greek yogurt, rich in probiotics and perfect for smoothies, desserts, or as a snack.",
      item_price: "Rs. 450/kg",  // Greek yogurt is typically priced per kg
      item_image: `${image_path}/greek-yogurt.jpg`,
      item_discount: "18%",
      item_rating: "4.7"
    },
    {
      item_name: "Fresh and Creamy Ice Cream, A Sweet Treat for All Ages",
      item_description: "Rich and creamy ice cream in a variety of flavors, a perfect treat for any occasion.",
      item_price: "Rs. 360/kg",  // Ice cream is typically priced per kg
      item_image: `${image_path}/ice-cream.jpg`,
      item_discount: "10%",
      item_rating: "4.4"
    },
    {
      item_name: "Cheddar Cheese, Full of Flavor and Ideal for Sandwiches",
      item_description: "Sharp and flavorful cheddar cheese, perfect for sandwiches, cooking, or snacking.",
      item_price: "Rs. 1200/kg",  // Cheese is typically priced per kg
      item_image: `${image_path}/cheddar-cheese.jpg`,
      item_discount: "8%",
      item_rating: "4.3"
    },
    {
      item_name: "Fresh Cream, Perfect for Cooking and Baking",
      item_description: "Rich and thick fresh cream, perfect for adding richness to your cooking and baking.",
      item_price: "Rs. 600/litre",  // Cream is typically priced per litre
      item_image: `${image_path}/fresh-cream.jpg`,
      item_discount: "5%",
      item_rating: "4.6"
    },
    {
      item_name: "Sweetened Condensed Milk, Ideal for Desserts",
      item_description: "Rich and sweet condensed milk, ideal for making desserts, sweets, and beverages.",
      item_price: "Rs. 650/kg",  // Condensed milk is typically priced per kg
      item_image: `${image_path}/condensed-milk.jpg`,
      item_discount: "20%",
      item_rating: "4.5"
    },
    {
      item_name: "Low-Fat Yogurt, A Healthy Snack Option",
      item_description: "Smooth and creamy low-fat yogurt, perfect as a snack or for mixing with fruits.",
      item_price: "Rs. 300/kg",  // Low-fat yogurt is typically priced per kg
      item_image: `${image_path}/low-fat-yogurt.jpg`,
      item_discount: "10%",
      item_rating: "4.2"
    },
    {
      item_name: "Mozzarella Cheese, Soft and Stretchy",
      item_description: "Fresh mozzarella cheese, soft and stretchy, perfect for pizzas, salads, and more.",
      item_price: "Rs. 1200/kg",  // Mozzarella is typically priced per kg
      item_image: `${image_path}/mozzarella-cheese.jpg`,
      item_discount: "15%",
      item_rating: "4.8"
    }
  ];
  
  return (
    <>
      <AllItemsComp AllItems={{AllItems}} />
    </>
  );
}