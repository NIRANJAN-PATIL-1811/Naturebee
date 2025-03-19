import Your_stores from "./Your_stores.jsx";
import images1 from "./suggested_for_you.json";

function Nutritious() {
  return (
    <>
      <Your_stores images1={images1} />
    </>
  );
}

export default Nutritious;