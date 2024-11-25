import axios from "axios";

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
	  return response.data.resp || [];
	} catch (error) {
	  console.error("Erro ao listar salas:", error.response?.data || error.message);
	  throw new Error(error.response?.data?.msg || "Erro ao listar salas.");
	}
  };
  

export const listarMensagens = async (idSala, timestamp) => {
  try {
    const response = await api.get(`/sala/mensagens`, {
      params: { idSala, timestamp },
    });
    return response.data.msgs || [];
  } catch (error) {
    console.error("Erro ao listar mensagens:", error.response?.data || error.message);
    throw new Error(error.response?.data?.msg || "Erro ao listar mensagens.");
  }
};

export const enviarMensagem = async (idSala, msg) => {
  try {
    const response = await api.post(`/sala/mensagem?idsala=${idSala}`, { msg });
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error.response?.data || error.message);
    throw new Error(error.response?.data?.msg || "Erro ao enviar mensagem.");
  }
};

const apiServices = {
  entrar,
  listarSalas,
  listarMensagens,
  enviarMensagem,
};

export default apiServices;
