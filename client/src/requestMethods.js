import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzA5NzU1MjgwM2JmNDQwZWJhM2UzOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzQxOTgzMCwiZXhwIjoxNjc0MDI0NjMwfQ.dXRKZFb_HyLOGEcn92d0aPy4pdxPzPmYD0NZIg18ye4"

export const publicRequest=axios.create({
    baseURL: BASE_URL,
});

export const userRequest=axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}` },
});