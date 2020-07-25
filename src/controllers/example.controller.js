const dados = [
	{
		id: '1',
		nome: 'teste'
	},
	{
		id: '2',
		nome: 'Jao'
	}
	,
	{
		id: '3',
		nome: 'Manoel'
	}
];

export const all = async (req, res) => {
	return res.status(200).send(dados);
};

export const get = async (req, res) => {

	const resultado = dados.find((e) => e.id === req.id);

	return res.status(200).send(resultado);
};

export const exclude = async (req, res) => {

	const resultado = dados.find((e) => e.id === req.id);

	return res.status(200).send(resultado);
};

export const save = async (req, res) => {

    const newData = {
		id: req.id,
		nome: req.nome
	};

	dados.push(newData);

	return res.status(200).send(newData);
};

export const update = async (req, res) => {
	const resultado = dados.find((e) => e.id === req.id);

	resultado.nome = req.nome;

	return res.status(200).send(resultado);
};