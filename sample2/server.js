const express = require("express");
const fs = require("fs");
const ejs = require("ejs");

const app = express();

const prisma = require("@prisma/client");
client = new prisma.PrismaClient();

const bodyParser = require("body-parser");
const { request } = require("http");

app.use(bodyParser.urlencoded({extended: false}));

// async function asyncAwait() {
// 	const todos = await client.todo.findMany();
// 	return todos;
// }

app.get("/", async (request, response) => {
	const todos = await client.todo.findMany();
	const template = fs.readFileSync("template.ejs").toString();
	const html = ejs.render(template, {todos: todos});
	response.send(html);
});

app.post("/", async (request, response) => {
	await client.todo.create({data: {name: request.body.newTodo}});

	const todos = await client.todo.findMany();
	const template = fs.readFileSync("template.ejs").toString();
	const html = ejs.render(template, {todos: todos});
	response.send(html);
});

app.get("/form", (request, response) => {
	const html = fs.readFileSync("./form.html").toString();
	response.send(html);
});

app.post("/send", async (request, response) => {
	await client.todo.create({data: {name: request.body.newTodo}});
	const todos = await client.todo.findMany();
	const template = fs.readFileSync("template.ejs").toString();
	const html = ejs.render(template, {todos: todos});
	response.send(html);
});



app.listen(3000);



// async function main() {
// 	const todos = await client.todo.findMany();
// 	debugger;

// }

// async function main() {
// 	const todo = await client.todo.create({data: {name: "go shopping"}});
// 	debugger;
// 	const todos = await client.todo.findMany();
// 	debugger;
// }

// main();

