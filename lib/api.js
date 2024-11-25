import axios from "axios";
import { Coming_Soon } from "next/font/google";

const API_BASE_URL =
	process.env.NEXT_PUBLIC_API_BASE_URL || "https://chat-crng.onrender.com";

// Configuração padrão do Axios
const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

// Interceptador para adicionar o token em todas as requisições
api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		const nick = localStorage.getItem("nick");
		const idUser = localStorage.getItem("idUser");

		if (token) {
			config.headers["token"] = token;
		}
		if (nick) {
			config.headers["nick"] = nick;
		}
		if (idUser) {
			config.headers["idUser"] = idUser;
		}

		console.log("Configuração do cabeçalho da requisição:", config.headers);
		return config;
	},
	(error) => Promise.reject(error)
);


// Funções de API
export const entrar = async (nick) => {
	try {
		const response = await api.post("/entrar", { nick });
		console.log("Resposta da API (entrar):", response.data);

		if (response.data?.resp?.token && typeof window !== "undefined") {
			localStorage.setItem("token", response.data.resp.token);
			localStorage.setItem("idUser", response.data.resp.idUser);
			localStorage.setItem("nick", nick);
		}
		return response.data;
	} catch (error) {
		console.error("Erro na API (entrar):", error.response?.data || error.message);
		throw new Error(error.response?.data?.msg || "Erro ao autenticar.");
	}
};


export const listarSalas = async () => {
	try {
		const token = localStorage.getItem("token");
		const nick = localStorage.getItem("nick");
		const idUser = localStorage.getItem("idUser");

		if (!token || !nick || !idUser) {
			throw new Error("Credenciais ausentes no localStorage.");
		}

		const response = await api.get("/salas", {
			headers: {
				token: token,
				nick: nick,
				idUser: idUser,
			},
		});

		console.log("Resposta da API (listarSalas):", response.data);
		return response.data || [];
	} catch (error) {
		console.error("Erro ao listar salas:", error.response?.data || error.message);
		throw new Error(error.response?.data?.msg || "Erro ao listar salas.");
	}
};


export const listarMensagens = async (idSala, timestamp) => {
	try {
		console.log("oiiiiiiiiiiiiiiii")
		const token = localStorage.getItem("token");
		const nick = localStorage.getItem("nick");
		const idUser = localStorage.getItem("idUser");
		const response = await api.get(`/sala/mensagens?idSala=${idSala}&timestamp`, {
			headers: {
				token: token,
				nick: nick,
				idUser: idUser,
			},
		});
		console.log("RESPONSE", response);
		console.log("oiiiiiiiiiiiiiiii")
		return response.data.msgs || [];
	} catch (error) {
		console.error("Erro ao listar mensagens:", error.response?.data || error.message);
		throw new Error(error.response?.data?.msg || "Erro ao listar mensagens.");
	}
};

export const enviarMensagem = async (idSala, msg) => {
	try {
		const token = localStorage.getItem("token");
		const nick = localStorage.getItem("nick");
		const idUser = localStorage.getItem("idUser");
		const data = {
			msg: msg,
			idSala: idSala
		}
		const response = await api.post(`/sala/mensagem?idsala=${idSala}`, data, {
			headers: {
				token: token,
				nick: nick,
				idUser: idUser,
			},
		});
		console.log("Response: ", response)
		return response.data;
	} catch (error) {
		console.error("Erro ao enviar mensagem:", error.response?.data || error.message);
		throw new Error(error.response?.data?.msg || "Erro ao enviar mensagem.");
	}
};

export const entrarSala = async (idSala) => {
	try {
		const token = localStorage.getItem("token");
		const nick = localStorage.getItem("nick");
		const idUser = localStorage.getItem("idUser");

		const response = await api.put(`/sala/entrar?idsala=${idSala}`, {
			headers: {
				token: token,
				nick: nick,
				idUser: idUser,
			},
		});
		console.log("Resposta da API (entrar sala):", response.data);

		return response.data.timestamp;
	} catch (error) {
		console.error("Erro ao entrar sala:", error.response?.data || error.message);
		throw new Error(error.response?.data?.msg || "Erro ao entrar na sala.");
	}
};

const apiServices = {
	entrar,
	listarSalas,
	listarMensagens,
	enviarMensagem,
	entrarSala,
};

export default apiServices;
