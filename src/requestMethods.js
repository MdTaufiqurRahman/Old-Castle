import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjAxNDhhYjZkNWRhNDgzYjRmZGJjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzA4NjkzNSwiZXhwIjoxNjYzMzQ2MTM1fQ.dDxzzJxgDTZm7qHijlXtsyr8_IMNk1x9J8-6azptG08";

  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });