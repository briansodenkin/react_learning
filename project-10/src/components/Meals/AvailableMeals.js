import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const [meallist, setMeallist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetechData().catch((error) => {
      setIsLoading(false);
      setIsError(true);
    });
  }, []);

  const fetechData = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://react-test-ae44f-default-rtdb.firebaseio.com/meals.json"
    );
    if (!response.ok) {
      throw Error("GG");
    }
    const data = await response.json();
    const transformedData = [];
    for (const key in data) {
      // console.log(data.results[key])
      transformedData.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: +data[key].price,
      });
    }
    console.log(transformedData)
    setMeallist(transformedData);
    setIsLoading(false);
    // console.log(transformedData)
  };

  const mealsList = meallist.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  if (isLoading) {
    return (
      <div>
        <p style={{ textAlign: "center" }}>Loading....</p>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <p style={{ textAlign: "center", color: "red" }}>Error....</p>
      </div>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
