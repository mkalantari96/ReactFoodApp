import MealItem from "./MealItem.jsx";
import useHTTP from "../hooks/useHTTp.js";
import Error from "./Error.jsx";

const requestConfig = {};
export default function Meals() {
  const {
    data: loadMeals,
    isLoading,
    error,
  } = useHTTP("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching data ... </p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <MealItem meal={meal} />
      ))}
    </ul>
  );
}
