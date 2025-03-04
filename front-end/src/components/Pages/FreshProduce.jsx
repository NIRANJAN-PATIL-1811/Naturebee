import "../css/AllItems.css";
import AllItemsComp from "./AllItemsComp.jsx";



export default function FreshProduce ({ image_path }) {

  const AllItems = [
    {
      item_name: "Organic Ripe Mangoes, Handpicked for Maximum Freshness",
      item_description: "Fresh, ripe mangoes, sweet and juicy, handpicked for the perfect flavor and texture.",
      item_price: "Rs. 120/kg",
      item_image: `${image_path}/mango.jpg`,
      item_discount: "20%",
      item_rating: "4.2"
    },
    {
      item_name: "Premium Carrots, Perfect for Juices and Cooking",
      item_description: "Crunchy, orange carrots, rich in vitamins and perfect for salads and juices.",
      item_price: "Rs. 50/kg",
      item_image: `${image_path}/carrot.jpg`,
      item_discount: "15%",
      item_rating: "4.0"
    },
    {
      item_name: "Fresh and Organic Spinach, Packed with Essential Nutrients",
      item_description: "Fresh green spinach leaves, packed with nutrients and perfect for smoothies, soups, or cooking.",
      item_price: "Rs. 30/bunch",
      item_image: `${image_path}/spinach.jpg`,
      item_discount: "10%",
      item_rating: "4.5"
    },
    {
      item_name: "Crisp Red Apples, A Perfect Snack or Addition to Desserts",
      item_description: "Crisp and sweet red apples, perfect for snacking or baking into your favorite desserts.",
      item_price: "Rs. 90/kg",
      item_image: `${image_path}/apple.jpg`,
      item_discount: "12%",
      item_rating: "4.3"
    },
    {
      item_name: "Juicy Fresh Tomatoes, Ideal for Sauces and Salads",
      item_description: "Fresh, juicy tomatoes, ideal for salads, sauces, and soups.",
      item_price: "Rs. 40/kg",
      item_image: `${image_path}/tomato.jpg`,
      item_discount: "8%",
      item_rating: "3.8"
    },
    {
      item_name: "Sweet and Soft Bananas, The Perfect On-the-Go Snack",
      item_description: "Sweet and soft bananas, packed with energy and a perfect on-the-go snack.",
      item_price: "Rs. 60/kg",
      item_image: `${image_path}/banana.jpg`,
      item_discount: "5%",
      item_rating: "4.0"
    },
    {
      item_name: "Crisp Green Lettuce, Perfect for Fresh Salads and Sandwiches",
      item_description: "Crisp, fresh lettuce, perfect for salads and sandwiches.",
      item_price: "Rs. 35/bunch",
      item_image: `${image_path}/lettuce.jpg`,
      item_discount: "10%",
      item_rating: "4.4"
    },
    {
      item_name: "Sweet and Tangy Pineapple, A Tropical Delight for Your Taste Buds",
      item_description: "Sweet and tangy pineapples, great for tropical salads and juices.",
      item_price: "Rs. 80/each",
      item_image: `${image_path}/pineapple.jpg`,
      item_discount: "18%",
      item_rating: "4.6"
    },
    {
      item_name: "Crisp and Refreshing Cucumbers, Perfect for Healthy Snacks",
      item_description: "Fresh, crisp cucumbers, perfect for salads, sandwiches, or pickling.",
      item_price: "Rs. 25/each",
      item_image: `${image_path}/cucumber.jpg`,
      item_discount: "5%",
      item_rating: "4.1"
    },
    {
      item_name: "Fresh and Organic Green Bell Peppers, Full of Flavor and Color",
      item_description: "Crunchy, fresh green bell peppers, great for stir-fries, salads, and sandwiches.",
      item_price: "Rs. 45/kg",
      item_image: `${image_path}/bellpepper.jpg`,
      item_discount: "10%",
      item_rating: "4.3"
    },
    {
      item_name: "Handpicked Fresh Strawberries, Sweet and Juicy for Desserts",
      item_description: "Fresh, sweet strawberries, perfect for desserts, smoothies, or snacking.",
      item_price: "Rs. 150/kg",
      item_image: `${image_path}/strawberry.jpg`,
      item_discount: "25%",
      item_rating: "4.7"
    }
  ];

  return (
    <>
      <AllItemsComp AllItems={{AllItems}} />
    </>
  );
}