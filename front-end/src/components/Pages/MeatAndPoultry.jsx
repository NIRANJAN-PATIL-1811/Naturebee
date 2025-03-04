import "../css/AllItems.css";
import AllItemsComp from "./AllItemsComp.jsx";



export default function MeatAndPoultry ({ image_path }) {

  const AllItems = [
    // Meat and Poultry
    {
      item_name: "Fresh Chicken Breast, Boneless and Skinless",
      item_description: "Lean, tender chicken breast, perfect for grilling, baking, or stir-frying.",
      item_price: "Rs. 250/kg",
      item_image: `${image_path}/chicken_breast.jpg`,
      item_discount: "15%",
      item_rating: "4.4"
    },
    {
      item_name: "Juicy Lamb Chops, Tender and Flavorful",
      item_description: "Premium lamb chops, tender and full of flavor, ideal for grilling or roasting.",
      item_price: "Rs. 550/kg",
      item_image: `${image_path}/lamb_chops.jpg`,
      item_discount: "10%",
      item_rating: "4.6"
    },
    {
      item_name: "Tender Chicken Thighs, Bone-In and Skin-On",
      item_description: "Juicy and tender chicken thighs, bone-in and skin-on for added flavor.",
      item_price: "Rs. 220/kg",
      item_image: `${image_path}/chicken_thighs.jpg`,
      item_discount: "10%",
      item_rating: "4.3"
    },
    {
      item_name: "Pork, Fresh and Ready to Cook",
      item_description: "Fresh pork, perfect for making sausages, burgers, or stir-fry dishes.",
      item_price: "Rs. 300/kg",
      item_image: `${image_path}/pork.jpg`,
      item_discount: "8%",
      item_rating: "4.2"
    },
    {
      item_name: "Whole Chicken, Fresh and Ready for Roasting",
      item_description: "Whole chicken, perfect for roasting or preparing your favorite chicken dishes.",
      item_price: "Rs. 180/kg",
      item_image: `${image_path}/whole_chicken.jpg`,
      item_discount: "5%",
      item_rating: "4.7"
    },
    {
      item_name: "Duck Breast, Rich and Flavorful",
      item_description: "Premium duck breast, perfect for searing or roasting for a rich, flavorful dish.",
      item_price: "Rs. 800/kg",
      item_image: `${image_path}/duck_breast.jpg`,
      item_discount: "15%",
      item_rating: "4.6"
    },
    {
      item_name: "Turkey Breasts, Perfect for Roasting and Holidays",
      item_description: "Lean turkey breasts, ideal for roasting or making sandwiches and salads.",
      item_price: "Rs. 350/kg",
      item_image: `${image_path}/turkey_breast.jpg`,
      item_discount: "10%",
      item_rating: "4.3"
    },
    {
      item_name: "Fresh Salmon Fillets, Rich in Omega-3",
      item_description: "Fresh salmon fillets, rich in omega-3 fatty acids, perfect for grilling or pan-searing.",
      item_price: "Rs. 650/kg",
      item_image: `${image_path}/salmon_fillets.jpg`,
      item_discount: "12%",
      item_rating: "4.7"
    },
    {
      item_name: "Pork Ribs, Tender and Juicy",
      item_description: "Tender, juicy pork ribs, perfect for slow-cooking or grilling.",
      item_price: "Rs. 400/kg",
      item_image: `${image_path}/pork_ribs.jpg`,
      item_discount: "10%",
      item_rating: "4.4"
    }
  ];
  

  return (
    <>
      <AllItemsComp AllItems={{AllItems}} />
    </>
  );
}