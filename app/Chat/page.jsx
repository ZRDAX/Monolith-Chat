"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Atom, ChevronLeft, ChevronRight, Code, Package } from "lucide-react";
import api from "@/lib/api";

const ChatPage = () => {
  const [namespaces, setNamespaces] = useState([]); // Lista de salas
  const [selectedNamespace, setSelectedNamespace] = useState(null); // Sala selecionada
  const [userName, setUserName] = useState(""); // Nome do usuário
  const [message, setMessage] = useState(""); // Mensagem digitada
  const [messages, setMessages] = useState([]); // Mensagens da sala selecionada
  const [isSidebarHidden, setIsSidebarHidden] = useState(false); // Controle da visibilidade da sidebar

  // Carrega as salas disponíveis ao montar o componente
  useEffect(() => {
    const fetchNamespaces = async () => {
      try {
        const nick = localStorage.getItem("nick");
        if (!nick) {
          console.error("Usuário não autenticado.");
          window.location.href = "/Login";
          return;
        }
        setUserName(nick);

        const salas = await api.listarSalas();
        console.log("Salas retornadas da API: ", salas);

        if (Array.isArray(salas) && salas.length > 0) {
          setNamespaces(
            salas.map((sala) => ({
              idSala: sala._id,
              nome: sala.nome || "Sala sem nome",
            }))
          );
        } else {
          console.warn("Nenhuma sala disponível ou resposta inválida.");
        }
      } catch (error) {
        console.error("Erro ao carregar salas:", error.message);
      }
    };

    fetchNamespaces();
  }, []);

  // Seleciona uma sala e carrega as mensagens
  const handleSelectNamespace = async (namespace) => {
    const timestamp = await api.entrarSala(namespace.idSala);
    setSelectedNamespace(namespace);
    console.log(namespace);
    try {
      console.log("oiiiiiiiiiiiiiiii")
      const mensagens = await api.listarMensagens(namespace.idSala, timestamp);
      console.log("Mensagens carregadas:", mensagens);

      const formattedMessages = mensagens.map((msg) => ({
        timestamp: msg.timestamp,
        nick: msg.nick || "Sistema",
        msg: msg.msg || "Ação realizada.",
      }));

      setMessages(formattedMessages);
    } catch (error) {
      console.error("Erro ao carregar mensagens:", error.message);
    }
  };

  // Envia uma mensagem para a sala selecionada
  const handleSendMessage = async () => {
    if (!message.trim() || !selectedNamespace) {
      console.warn("Mensagem vazia ou nenhuma sala selecionada.");
      return;
    }

    try {
      await api.enviarMensagem(selectedNamespace.idSala, message);

      // Atualiza as mensagens localmente
      const newMessage = { nick: userName, msg: message };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage(""); // Limpa o campo de entrada
      console.log("Mensagem enviada:", newMessage);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error.message);
    }
  };

  // Alterna a visibilidade da sidebar
  const toggleSidebar = () => {
    setIsSidebarHidden((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-zinc-900 text-white">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarHidden ? "hidden" : "w-80"
        } border-r border-zinc-800 flex flex-col`}
      >
        {/* Header */}
        <div className="p-4 border-b border-zinc-800">
          <div className="flex items-center gap-2 mb-4">
            <ChevronLeft
              className="h-5 w-5 cursor-pointer"
              onClick={toggleSidebar}
            />
            <h1 className="text-2xl font-bold">CHATS</h1>
          </div>
          <p className="text-sm text-zinc-400">Explorar</p>
        </div>

        {/* Namespace List */}
        <div className="flex-1 overflow-auto">
          {namespaces.length > 0 ? (
            namespaces.map((namespace) => (
              <div
                key={namespace.idSala}
                className={`flex items-center gap-3 p-4 cursor-pointer ${
                  selectedNamespace?.idSala === namespace.idSala
                    ? "bg-zinc-800"
                    : "hover:bg-zinc-700"
                }`}
                onClick={() => handleSelectNamespace(namespace)}
              >
                <Atom className="h-5 w-5 text-[#D4B59E]" />
                <span className="font-medium">{namespace.nome}</span>
              </div>
            ))
          ) : (
            <p className="text-zinc-400 text-center p-4">Nenhuma sala disponível.</p>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800">
          <span className="text-sm text-zinc-400">monolitch-chat</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-16 border-b border-zinc-800 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            {isSidebarHidden && (
              <ChevronRight
                className="h-5 w-5 cursor-pointer"
                onClick={toggleSidebar}
              />
            )}
            <Code className="h-5 w-5" />
            <Package className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#D4B59E]">{userName}</span>
            <Avatar>
              <AvatarImage src="/assets/pessoa.svg" alt="User avatar" />
              <AvatarFallback>{userName.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-auto p-6">
          {selectedNamespace ? (
            messages.map((msg, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg mb-2 ${
                  msg.nick === userName
                    ? "bg-[#2E7D32] text-white self-end"
                    : "bg-zinc-800 text-zinc-200 self-start"
                }`}
              >
                <p className="font-bold">{msg.nick}</p>
                <p>{msg.msg}</p>
              </div>
            ))
          ) : (
            <p className="text-zinc-400">
              Selecione uma sala para começar a conversar.
            </p>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-zinc-800">
          <div className="relative">
            <Input
              placeholder="Escreva aqui..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-zinc-800 border-none text-white placeholder:text-zinc-500 pr-12"
              disabled={!selectedNamespace}
            />
            <Button
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#C15A4E] hover:bg-[#C15A4E]/90"
              onClick={handleSendMessage}
              disabled={!selectedNamespace || !message.trim()}
            >
              <Package className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-xs text-zinc-400 mt-2">
            Siga as regras do chat | A Monolitch não tolerará.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
