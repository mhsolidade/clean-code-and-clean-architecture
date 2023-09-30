import axios from "axios"

axios.defaults.validateStatus = function () {
	return true;
};
test("Deve fazer o cálculo do preço de uma corrida durante o dia", async function () {
    const input = {
        segments: [
            {distance: 10, date: "2023-09-29T10:00:00"}
        ]
    }
    const response = await axios.post("http://localhost:3000/calculete_ride", input)
    expect(response.data.price).toBe(21);    
})

test("Se a distância for inválida deve lançar um erro", async function () {
	const input = {
		segments: [
			{ distance: -10, date: "2021-03-01T10:00:00" }
		]
	};
	const response = await axios.post("http://localhost:3000/calculete_ride", input);
	expect(response.status).toBe(422);
	const output = response.data;
	expect(output).toBe("Invalid distance");
});