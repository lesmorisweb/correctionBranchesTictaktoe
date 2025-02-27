import express from "express"
import gameRoutes from "./routes/routes"


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use("/game", gameRoutes)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
