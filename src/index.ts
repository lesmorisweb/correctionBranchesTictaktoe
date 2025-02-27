import express from "express"
import router from "./routes/routes";


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.get("/game", router)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
