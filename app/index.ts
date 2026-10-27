import axiosClient from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com'; // Replace with your API base URL

const id = 100; // Replace with the ID of the todo you want to fetch

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

axiosClient.get(`${baseURL}/todos/${id}`).then(response => {
    const todo: Todo = response.data;

    logTodo(todo.title);
});


const logTodo =  (title:string) => {
    console.log(`Todo has a title: ${title}`);
}
