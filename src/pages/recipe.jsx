import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealByID } from "../api";
import { Preloader } from "../components/preloader";

function Recipe() {
    const[recipe, setRecipe] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getMealByID(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <img className="recipe-image" src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1 className="recipe-title">{recipe.strMeal}</h1>
                    <h6><span className="category">Category:</span> {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6><span className="area">Area:</span> {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>

                    <table className="centered highlight">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>

                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5 style={{ margin: "2rem 0 1.5rem" }} className="video-recipe">Video Recice</h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                allowFullScreen
                            />
                        </div>
                    ) : null}
                </div>
            )}
            <button className="btn pink lighten-2" onClick={goBack}>
                Go Back
            </button>
        </>
    );
}

export { Recipe };