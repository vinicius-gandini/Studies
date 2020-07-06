import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Vinicius",
      sobrenome: "Gandini",
      email: "viniciusgandini.goncalves@hotmail.com",
      idade: "20",
      peso: 50,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
