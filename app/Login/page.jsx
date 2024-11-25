"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/lib/api"; // Importando o api.js
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TbMessages } from "react-icons/tb";

const Login = () => {
	const [userName, setUserName] = useState(""); // Estado para o nome do usuário
	const [errorMessage, setErrorMessage] = useState(""); // Estado para mensagens de erro
	const [loading, setLoading] = useState(false); // Estado para desativar o botão durante o carregamento
	const router = useRouter();

	const handleLogin = async () => {
		if (!userName.trim()) {
		  setErrorMessage("Por favor, insira seu nome.");
		  return;
		}
	  
		try {
		  setLoading(true);
	  
		  // Faz a chamada para a API
		  const response = await api.entrar(userName);
		  console.log("Resposta da API:", response);
	  
		  // Verifica se a resposta contém os dados esperados
		  if (response.idUser && response.token && response.nick) {
			console.log("Login bem-sucedido. Salvando dados no localStorage...");
			localStorage.setItem("token", response.token);
			localStorage.setItem("idUser", response.idUser);
			localStorage.setItem("nick", response.nick);
	  
			// Redireciona para a página de temas
			router.push("/Tema");
		  } else {
			throw new Error("Dados incompletos na resposta da API.");
		  }
		} catch (error) {
		  console.error("Erro no login:", error.message);
		  setErrorMessage(error.message || "Erro ao autenticar. Tente novamente.");
		} finally {
		  setLoading(false);
		}
	  };
	  
	  

	return (
		<div className="w-full lg:grid lg:min-h-[300px] lg:grid-cols-2 xl:min-h-[300px]">
			{/* SEÇÃO ESQUERDA */}
			<div className="hidden bg-muted lg:block">
				<div className="flex items-center h-screen w-full rounded-lg bg-accent-bege">
					<TbMessages className="h-full w-full text-accent-branco"/>
				</div>
			</div>

			{/* SEÇÃO DIREITA */}
			<div className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="grid gap-2 text-center xl:text-center">
						<h1 className="text-3xl text-accent-branco font-bold">MONOLITCH</h1>
					</div>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="user" className="text-accent-branco">
								Usuário
							</Label>
							<Input
								id="user"
								type="text"
								placeholder="Digite seu nickname"
								value={userName}
								onChange={(e) => {
									setUserName(e.target.value);
									setErrorMessage(""); // Limpa a mensagem de erro ao digitar novamente
								}}
								required
							/>
						</div>
						{errorMessage && (
							<p className="text-red-500 text-sm">{errorMessage}</p>
						)}
						<Button
							onClick={handleLogin}
							className="w-full bg-accent-bege"
							disabled={loading}
						>
							{loading ? "Carregando..." : "Entrar"}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
