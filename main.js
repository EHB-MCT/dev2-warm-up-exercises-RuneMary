import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();

function warmup1() {
	document.querySelector("#button-1a").addEventListener("click", function () {
		console.log("click OK");

		const p = `<p>Hallo, dit is de oefening van Rune</p>`;

		document.querySelector("#content-1").innerHTML = p;
	});
}

function warmup2() {
	console.log("Exercise week 2");
	const scores = getRandomScores(10);
}

function warmup3() {
	let student = getStudentJSON();
}

function warmup4() {
	let main, min, max;
}

function warmup5() {}
