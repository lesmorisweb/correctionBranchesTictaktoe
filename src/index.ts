import express from "express"


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.get("/game", playRoutes)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
